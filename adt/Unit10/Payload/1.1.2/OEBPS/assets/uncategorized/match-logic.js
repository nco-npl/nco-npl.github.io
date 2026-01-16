function createItem(itemData, isLeftSide) {
    const div = document.createElement('div');
    div.className = 'item';
    div.id = itemData.id;
    div.setAttribute('role', 'listitem');
    div.setAttribute('tabindex', '0');
    div.draggable = true;
    div.dataset.match = itemData.match;
    div.setAttribute('aria-grabbed', 'false');
    div.setAttribute('role', 'button');
    div.setAttribute('aria-dropeffect', 'none');

    const textElement = document.createElement('div');
    textElement.className = 'item-text';
    textElement.textContent = itemData.text || '';
    
    const img = document.createElement('img');
    img.src = itemData.image;
    img.alt = itemData.alt;
    img.setAttribute('draggable', 'false');

    if (itemData.text && itemData.text.trim() !== '') {
      textElement.classList.remove('hidden');
      img.classList.add('hidden');
      div.setAttribute('aria-label', itemData.text);
    } else {
      textElement.classList.add('hidden');
      img.classList.remove('hidden');
      div.setAttribute('aria-label', itemData.alt);
    }

    div.appendChild(textElement);
    div.appendChild(img);
    return div;
  }

  const leftItems = gameConfig.pairs.map(pair => ({
    id: pair.left.id,
    image: pair.left.image,
    alt: pair.left.alt,
    text: pair.left.text,
    match: pair.right.id
  }));

  const rightItems = gameConfig.pairs.map(pair => ({
    id: pair.right.id,
    image: pair.right.image,
    alt: pair.right.alt,
    text: pair.right.text,
    match: pair.left.id
  }));

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  shuffleArray(leftItems);
  shuffleArray(rightItems);

  const leftContainer = document.getElementById('left-items');
  const rightContainer = document.getElementById('right-items');
  const announcer = document.getElementById('game-announcer');

  leftItems.forEach(item => {
    const leftItem = createItem(item, true);
    leftContainer.appendChild(leftItem);
  });

  rightItems.forEach(item => {
    const rightItem = createItem(item, false);
    rightContainer.appendChild(rightItem);
  });

  let dragged = null;
  let selectedItem = null;
  let existingLines = [];

  function hasTextContent(item) {
    const textElement = item.querySelector('.item-text');
    return textElement && !textElement.classList.contains('hidden') && textElement.textContent.trim() !== '';
  }

  function getAnchorPoint(item, isLeftSide) {
    return isLeftSide ? 'right' : 'left';
  }

  function calculateConstrainedPathParameters(sourceItem, targetItem) {
    const sourceRect = sourceItem.getBoundingClientRect();
    const targetRect = targetItem.getBoundingClientRect();
    
    const sourceIsAbove = sourceRect.top < targetRect.top;
    const verticalDistance = Math.abs(targetRect.top - sourceRect.top);
    const horizontalDistance = Math.abs(targetRect.left - sourceRect.left);
    
    const leftColumnRight = sourceRect.left + sourceRect.width;
    const rightColumnLeft = targetRect.left;
    const availableGap = rightColumnLeft - leftColumnRight;
    
    const maxAllowedRadius = Math.max(availableGap * 0.3, 10);
    const minimalRadius = Math.min(maxAllowedRadius, 20);
    
    const verticalFactor = Math.min(verticalDistance / 80, 1);
    const finalRadius = minimalRadius * (0.3 + verticalFactor * 0.7);
    
    if (availableGap < 30) {
      return {
        path: 'straight',
        pathOptions: {}
      };
    }
    
    const pathOptions = {
      radius: finalRadius,
      direction: sourceIsAbove ? 'down' : 'up'
    };
    
    return {
      path: 'arc',
      pathOptions: pathOptions
    };
  }

  function checkMatch(sourceItem, targetItem) {
    if (sourceItem.dataset.match === targetItem.id) {
      const isAlreadyMatched = existingLines.some(line => 
        (line.start === sourceItem && line.end === targetItem) ||
        (line.start === targetItem && line.end === sourceItem)
      );

      if (!isAlreadyMatched) {
        const sourceIsLeft = sourceItem.parentElement.id === 'left-items';
        
        const sourceAnchor = getAnchorPoint(sourceItem, sourceIsLeft);
        const targetAnchor = getAnchorPoint(targetItem, !sourceIsLeft);
        
        const pathParams = calculateConstrainedPathParameters(sourceItem, targetItem);

        const line = new LeaderLine(sourceItem, targetItem, {
          color: '#333333', 
          size: 2,
          dash: {animation: true},
          startSocket: sourceAnchor,
          endSocket: targetAnchor,
          path: pathParams.path,
          pathOptions: pathParams.pathOptions,
          dropShadow: false,
          outline: false,
          hide: false,
          zIndex: 999
        });

        existingLines.push({ 
          start: sourceItem, 
          end: targetItem, 
          line: line 
        });
        
        announce('Match successful!');
        return true;
      }
    }
    return false;
  }

  function announce(message) {
    announcer.textContent = message;
  }

  function isItemMatched(item) {
    return existingLines.some(line => 
      line.start === item || line.end === item
    );
  }

  function getMatchedPair(item) {
    const match = existingLines.find(line => 
      line.start === item || line.end === item
    );
    return match ? (match.start === item ? match.end : match.start) : null;
  }

  function selectItem(item) {
    if (selectedItem) {
      selectedItem.classList.remove('selected');
      selectedItem.setAttribute('aria-grabbed', 'false');
    }

    if (isItemMatched(item)) {
      const matchedItem = getMatchedPair(item);
      const itemText = item.getAttribute('aria-label');
      const matchedText = matchedItem.getAttribute('aria-label');
      announce(`${itemText} is already matched with ${matchedText}. Please select an unmatched item.`);
      return false;
    }

    selectedItem = item;
    selectedItem.classList.add('selected');
    selectedItem.setAttribute('aria-grabbed', 'true');
    announce(`Selected ${item.getAttribute('aria-label')}. Click on another item to match.`);
    return true;
  }

  function clearSelection() {
    if (selectedItem) {
      selectedItem.classList.remove('selected');
      selectedItem.setAttribute('aria-grabbed', 'false');
      selectedItem = null;
      announce('Selection cleared');
    }
  }

  function attemptMatch(sourceItem, targetItem) {
    if (sourceItem === targetItem) {
      announce('Cannot match an item with itself');
      return false;
    }

    if (isItemMatched(targetItem)) {
      announce(`This ${targetItem.getAttribute('aria-label')} is already matched. Please select an unmatched item.`);
      return false;
    }

    const isMatch = checkMatch(sourceItem, targetItem) || checkMatch(targetItem, sourceItem);
    
    if (isMatch) {
      sourceItem.classList.add('matched');
      targetItem.classList.add('matched');
      clearSelection();
      const allItems = document.querySelectorAll('.item');
      const matchedCount = document.querySelectorAll('.item.matched').length;
      if (matchedCount === allItems.length) {
        announce('Congratulations! All items have been matched successfully!');
      }
    } else {
      announce('Not a match. Try again.');
    }
    
    return isMatch;
  }

  document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (isItemMatched(item)) {
        const matchedItem = getMatchedPair(item);
        const itemText = item.getAttribute('aria-label');
        const matchedText = matchedItem.getAttribute('aria-label');
        announce(`${itemText} is already matched with ${matchedText}. Please select an unmatched item.`);
        return;
      }

      if (!selectedItem) {
        selectItem(item);
      } else if (selectedItem === item) {
        clearSelection();
      } else {
        attemptMatch(selectedItem, item);
      }
    });

    item.addEventListener('focus', () => {
      if (isItemMatched(item)) {
        const matchedItem = getMatchedPair(item);
        const itemText = item.getAttribute('aria-label');
        const matchedText = matchedItem.getAttribute('aria-label');
        announce(`${itemText} is already matched with ${matchedText}`);
      }
    });

    item.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (isItemMatched(item)) {
            const matchedItem = getMatchedPair(item);
            const itemText = item.getAttribute('aria-label');
            const matchedText = matchedItem.getAttribute('aria-label');
            announce(`${itemText} is already matched with ${matchedText}. Please select an unmatched item.`);
            return;
          }

          if (!selectedItem) {
            selectItem(item);
            
            const currentGroup = item.parentElement;
            const otherGroup = currentGroup.id === 'left-items' ? rightContainer : leftContainer;
            const unmatchedItems = Array.from(otherGroup.children).filter(item => !isItemMatched(item));
            if (unmatchedItems.length > 0) {
              unmatchedItems[0].focus();
            } else {
              announce('No unmatched items remaining in the other group.');
            }
          } else if (selectedItem === item) {
            clearSelection();
          } else {
            attemptMatch(selectedItem, item);
          }
          break;
        case 'Escape':
          clearSelection();
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          e.preventDefault();
          const items = Array.from(item.parentElement.children);
          const currentIndex = items.indexOf(item);
          const nextIndex = e.key === 'ArrowUp' 
            ? (currentIndex - 1 + items.length) % items.length
            : (currentIndex + 1) % items.length;
          items[nextIndex].focus();
          break;
        case 'ArrowLeft':
        case 'ArrowRight':
          e.preventDefault();
          const targetContainer = item.parentElement.id === 'left-items' 
            ? rightContainer 
            : leftContainer;
          
          const sourceRect = item.getBoundingClientRect();
          const targetItems = Array.from(targetContainer.children);
          let closestItem = targetItems[0];
          let minDistance = Infinity;
          
          targetItems.forEach(targetItem => {
            const targetRect = targetItem.getBoundingClientRect();
            const distance = Math.abs(targetRect.top - sourceRect.top);
            if (distance < minDistance) {
              minDistance = distance;
              closestItem = targetItem;
            }
          });
          
          if (closestItem) {
            closestItem.focus();
          }
          break;
      }
    });
  });

  document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', (e) => {
      clearSelection();
      dragged = item;
      item.setAttribute('aria-grabbed', 'true');
      announce(`Started dragging ${item.getAttribute('aria-label')}`);
    });

    item.addEventListener('dragend', () => {
      dragged.setAttribute('aria-grabbed', 'false');
      dragged = null;
    });

    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      if (dragged !== item) {
        item.setAttribute('aria-dropeffect', 'move');
      }
    });

    item.addEventListener('dragleave', () => {
      item.setAttribute('aria-dropeffect', 'none');
    });

    item.addEventListener('drop', (e) => {
      e.preventDefault();
      item.setAttribute('aria-dropeffect', 'none');
      if (dragged !== item) {
        const isMatch = checkMatch(dragged, item) || checkMatch(item, dragged);
        if (isMatch) {
          dragged.classList.add('matched');
          item.classList.add('matched');
          const allItems = document.querySelectorAll('.item');
          const matchedCount = document.querySelectorAll('.item.matched').length;
          if (matchedCount === allItems.length) {
            announce('Congratulations! All items have been matched successfully!');
          }
        } else {
          announce('Not a match. Try again.');
        }
      }
    });
  });


  window.addEventListener('resize', () => {
    existingLines.forEach(({line}) => line.position());
  });
