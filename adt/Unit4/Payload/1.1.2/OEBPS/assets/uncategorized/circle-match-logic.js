let selectedPicture = null;
let selectedOval = null;
let connections = [];
let gameState = {
    currentPicture: null,
    currentOval: null,
    navigationMode: 'behaviors' 
};
let score = { correct: 0, total: 0 };

// Helper function to determine if a background color is light or dark
function isLightBackground(color) {
    // Handle common color names
    const lightColors = ['white', 'yellow', 'lightblue', 'lightgreen', 'lightgray', 'lightgrey', 'pink', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow'];
    const darkColors = ['black', 'darkblue', 'darkgreen', 'darkred', 'darkgray', 'darkgrey', 'navy', 'maroon', 'purple', 'indigo', 'brown', 'olive', 'teal', 'darkorange', 'darkviolet', 'darkmagenta', 'darkcyan', 'darkslategray', 'darkslategrey'];
    
    const lowerColor = color.toLowerCase().trim();
    
    if (lightColors.includes(lowerColor)) {
        return true;
    }
    if (darkColors.includes(lowerColor)) {
        return false;
    }
    
    // Handle hex colors
    if (color.startsWith('#')) {
        const hex = color.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128;
    }
    
    // Handle rgb/rgba colors
    if (color.startsWith('rgb')) {
        const matches = color.match(/\d+/g);
        if (matches && matches.length >= 3) {
            const r = parseInt(matches[0]);
            const g = parseInt(matches[1]);
            const b = parseInt(matches[2]);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            return brightness > 128;
        }
    }
    
    // Default to light background for unknown colors
    return true;
}
function announceToScreenReader(message, delay = 100) {
    setTimeout(() => {
        const announcement = document.getElementById('announcements');
        announcement.textContent = message;
        setTimeout(() => {
            announcement.textContent = '';
        }, 3000);
    }, delay);
}

function handleBehaviorKeydown(event, element) {
    switch(event.key) {
        case 'Enter':
        case ' ':
            event.preventDefault();
            selectPicture(element);
            break;
        case 'ArrowRight':
        case 'ArrowDown':
            event.preventDefault();
            focusNextBehavior();
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
            event.preventDefault();
            focusPreviousBehavior();
            break;
        case 'Tab':
            if (selectedPicture) {
                event.preventDefault();
                jumpToCategories();
            }
            break;
    }
}

function handleCategoryKeydown(event, element) {
    switch(event.key) {
        case 'Enter':
        case ' ':
            event.preventDefault();
            selectOval(element);
            break;
        case 'ArrowRight':
        case 'ArrowDown':
            event.preventDefault();
            focusNextCategory();
            break;
        case 'ArrowLeft':
        case 'ArrowUp':
            event.preventDefault();
            focusPreviousCategory();
            break;
    }
}

function focusNextBehavior() {
    const behaviors = Array.from(document.querySelectorAll('.picture-item:not(.connected)'));
    const currentIndex = behaviors.indexOf(document.activeElement);
    const nextIndex = (currentIndex + 1) % behaviors.length;
    behaviors[nextIndex].focus();
    announceToScreenReader(`Behavior ${nextIndex + 1} of ${behaviors.length}: ${behaviors[nextIndex].querySelector('div:last-child').textContent}`);
}

function focusPreviousBehavior() {
    const behaviors = Array.from(document.querySelectorAll('.picture-item:not(.connected)'));
    const currentIndex = behaviors.indexOf(document.activeElement);
    const prevIndex = currentIndex === 0 ? behaviors.length - 1 : currentIndex - 1;
    behaviors[prevIndex].focus();
    announceToScreenReader(`Behavior ${prevIndex + 1} of ${behaviors.length}: ${behaviors[prevIndex].querySelector('div:last-child').textContent}`);
}

function focusNextCategory() {
    const categories = Array.from(document.querySelectorAll('.oval'));
    const currentIndex = categories.indexOf(document.activeElement);
    const nextIndex = (currentIndex + 1) % categories.length;
    categories[nextIndex].focus();
    announceToScreenReader(`Category ${nextIndex + 1} of ${categories.length}: ${categories[nextIndex].textContent}`);
}

function focusPreviousCategory() {
    const categories = Array.from(document.querySelectorAll('.oval'));
    const currentIndex = categories.indexOf(document.activeElement);
    const prevIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
    categories[prevIndex].focus();
    announceToScreenReader(`Category ${prevIndex + 1} of ${categories.length}: ${categories[prevIndex].textContent}`);
}

function jumpToCategories() {
    const firstCategory = document.querySelector('.oval');
    if (firstCategory) {
        firstCategory.focus();
        gameState.navigationMode = 'categories';
        announceToScreenReader('Now in category selection. Use arrow keys to navigate between categories, Enter or Space to select.', 200);
    }
}

function jumpToBehaviors() {
    const unconnectedBehaviors = document.querySelectorAll('.picture-item:not(.connected)');
    if (unconnectedBehaviors.length > 0) {
        const firstUnconnected = unconnectedBehaviors[0];
        firstUnconnected.focus();
        gameState.navigationMode = 'behaviors';
        const remainingCount = unconnectedBehaviors.length;
        announceToScreenReader(`Now back to behavior selection. ${remainingCount} behavior${remainingCount !== 1 ? 's' : ''} remaining. Use arrow keys to navigate, Enter or Space to select.`, 500);
    } else {
        const resetBtn = document.querySelector('.reset-btn');
        if (resetBtn) {
            resetBtn.focus();
            announceToScreenReader('Congratulations! All behaviors have been matched. Game complete! Press Enter to reset or Tab to navigate.', 500);
        }
    }
}

function generateDynamicPositions(behaviorCount) {
    const positions = [];
    const gameArea = document.querySelector('.game-area');
    const gameAreaRect = gameArea.getBoundingClientRect();
    const gameAreaWidth = gameAreaRect.width;
    const gameAreaHeight = gameAreaRect.height;
    
    // // Calculate responsive item dimensions
    // const itemWidth = Math.max(60, Math.min(100, gameAreaWidth * 0.08));
    // const itemHeight = Math.max(45, Math.min(75, gameAreaHeight * 0.15));
    const itemWidth = Math.max(100, Math.min(100, gameAreaWidth * 0.15));
    const itemHeight = Math.max(100, Math.min(75, gameAreaHeight * 0.20));
    
    const margin = Math.max(10, Math.min(20, gameAreaWidth * 0.02));
    
    const centerX = gameAreaWidth / 2;
    const centerY = gameAreaHeight / 2;
    
    // Calculate radius based on available space
    const horizontalRadius = Math.min(centerX - itemWidth/2 - margin, gameAreaWidth * 0.40);
    const verticalRadius = Math.min(centerY - itemHeight/2 - margin, gameAreaHeight * 0.35);
    
    for (let i = 0; i < behaviorCount; i++) {
        const angle = (i * 2 * Math.PI) / behaviorCount - Math.PI / 2;
        
        const x = centerX + horizontalRadius * Math.cos(angle) - itemWidth / 2;
        const y = centerY + verticalRadius * Math.sin(angle) - itemHeight / 2;
        
        const boundedX = Math.max(margin, Math.min(x, gameAreaWidth - itemWidth - margin));
        const boundedY = Math.max(margin, Math.min(y, gameAreaHeight - itemHeight - margin));
        
        positions.push({
            left: `${boundedX}px`,
            top: `${boundedY}px`
        });
    }
    
    return positions;
}

function initializeGame() {
    document.getElementById('gameInstructions').innerHTML = `
        <div style="font-size: 9px; margin-top: 2px; color: #888;">
            Keyboard: Tab to navigate, Enter/Space to select, Arrow keys to move between items, Escape to clear selection, Ctrl+R to reset
        </div>
    `;
    
    generateBehaviors();
    generateCategories();
    
    setTimeout(() => {
        const firstBehavior = document.querySelector('.picture-item');
        if (firstBehavior) {
            firstBehavior.focus();
            gameState.navigationMode = 'behaviors';
            const totalBehaviors = document.querySelectorAll('.picture-item').length;
            announceToScreenReader(`Game started! ${totalBehaviors} Animals to match. Currently on first animal. Use arrow keys to navigate, Enter or Space to select.`, 1000);
        }
    }, 100);
}

function generateBehaviors() {
    const container = document.getElementById('behaviorsContainer');
    container.innerHTML = '';
    
    const dynamicPositions = generateDynamicPositions(gameConfig.behaviors.length);
    const gameArea = document.querySelector('.game-area');
    const gameAreaRect = gameArea.getBoundingClientRect();
    
    // Calculate responsive dimensions
    const itemWidth = Math.max(60, Math.min(100, gameAreaRect.width * 0.08));
    const itemHeight = Math.max(45, Math.min(75, gameAreaRect.height * 0.15));
    
    gameConfig.behaviors.forEach((behavior, index) => {
        const behaviorElement = document.createElement('div');
        behaviorElement.className = `picture-item pic${behavior.id}`;
        behaviorElement.setAttribute('data-id', behavior.id);
        behaviorElement.setAttribute('data-category', behavior.category);
        behaviorElement.setAttribute('tabindex', '0');
        behaviorElement.setAttribute('role', 'button');
        behaviorElement.setAttribute('aria-label', `Behavior ${index + 1} of ${gameConfig.behaviors.length}: ${behavior.text}. Image shows: ${behavior.alt || behavior.text}. Click to select this behavior card.`);
        behaviorElement.setAttribute('aria-describedby', `behavior-${behavior.id}-desc`);
        behaviorElement.onclick = () => selectPicture(behaviorElement);
        behaviorElement.onkeydown = (e) => handleBehaviorKeydown(e, behaviorElement);
        
        const position = dynamicPositions[index];
        behaviorElement.style.left = position.left;
        behaviorElement.style.top = position.top;
        behaviorElement.style.width = `${itemWidth}px`;
        behaviorElement.style.height = `${itemHeight}px`;
        
        behaviorElement.innerHTML = `
            <div class="emoji">
                <img src="${behavior.image}" alt="${behavior.alt || behavior.text}" />
            </div>
            `;
        
        container.appendChild(behaviorElement);
    });
}

function generateCategories() {
    const container = document.getElementById('categoriesContainer');
    container.innerHTML = '';
    
    const gameArea = document.querySelector('.game-area');
    const gameAreaRect = gameArea.getBoundingClientRect();
    
    // Calculate responsive dimensions for category cards
    const itemWidth = Math.max(60, Math.min(100, gameAreaRect.width * 0.08));
    const itemHeight = Math.max(40, Math.min(65, gameAreaRect.height * 0.12));
    
    Object.values(gameConfig.categories).forEach((category, index) => {
        const categoryElement = document.createElement('div');
        categoryElement.className = `oval ${category.color}`;
        categoryElement.setAttribute('data-id', category.id);
        categoryElement.setAttribute('tabindex', '0');
        categoryElement.setAttribute('role', 'button');
        categoryElement.setAttribute('aria-label', `Category ${index + 1} of 2: ${category.label}. ${category.alt ? 'Image shows: ' + category.alt + '. ' : ''}Click to select this category.`);
        categoryElement.onclick = () => selectOval(categoryElement);
        categoryElement.onkeydown = (e) => handleCategoryKeydown(e, categoryElement);
        
        // Apply the color from JSON configuration
        categoryElement.style.backgroundColor = category.color;
        categoryElement.style.width = `${itemWidth}px`;
        categoryElement.style.height = `${itemHeight}px`;
        
        if (category.image) {
            const imageHeight = Math.max(20, Math.min(35, itemHeight * 0.6));
            categoryElement.innerHTML = `
                <img src="${category.image}" alt="${category.alt || category.label}" style="max-height: ${imageHeight}px; width: auto; margin-bottom: 2px;" />
            `;
        } else {
            categoryElement.classList.add('text-only');
            categoryElement.textContent = category.label;
            
            // For text-only categories, ensure good contrast
            // If background is light, use dark text; if dark, use light text
            const isLightColor = isLightBackground(category.color);
            categoryElement.style.color = isLightColor ? '#000000' : '#ffffff';
        }
        
        container.appendChild(categoryElement);
    });
}

function selectPicture(element) {
    document.querySelectorAll('.picture-item').forEach(item => {
        item.classList.remove('selected');
        item.setAttribute('aria-selected', 'false');
    });
    
    document.querySelectorAll('.oval').forEach(oval => {
        oval.classList.remove('selected');
        oval.setAttribute('aria-selected', 'false');
    });
    
    element.classList.add('selected');
    element.setAttribute('aria-selected', 'true');
    selectedPicture = element;
    gameState.currentPicture = element;
    selectedOval = null;
    gameState.currentOval = null;
    
    const behaviorText = element.querySelector('div:last-child').textContent;
    announceToScreenReader(`Selected behavior: ${behaviorText}. Moving to category selection.`, 100);
    
    setTimeout(() => {
        jumpToCategories();
    }, 600);
}

function selectOval(element) {
    if (!selectedPicture) {
        announceToScreenReader('Please select a animal first! Use Tab or arrow keys to navigate to cards.', 100);
        setTimeout(() => {
            jumpToBehaviors();
        }, 1000);
        return;
    }
    
    document.querySelectorAll('.oval').forEach(oval => {
        oval.classList.remove('selected');
        oval.setAttribute('aria-selected', 'false');
    });
    
    element.classList.add('selected');
    element.setAttribute('aria-selected', 'true');
    selectedOval = element;
    gameState.currentOval = element;
    
    const categoryText = element.textContent;
    announceToScreenReader(`Selected category: ${categoryText}. Processing match...`, 100);
    
    setTimeout(() => {
        createConnection();
    }, 300);
}

function createConnection() {
    if (!selectedPicture || !selectedOval) return;
    
    const pictureRect = selectedPicture.getBoundingClientRect();
    const ovalRect = selectedOval.getBoundingClientRect();
    const gameAreaRect = document.querySelector('.game-area').getBoundingClientRect();
    
    let startX, startY, endX, endY;
    
    const pictureCenterX = pictureRect.left + pictureRect.width/2;
    const pictureCenterY = pictureRect.top + pictureRect.height/2;
    const ovalCenterX = ovalRect.left + ovalRect.width/2;
    const ovalCenterY = ovalRect.top + ovalRect.height/2;
    
    const deltaX = ovalCenterX - pictureCenterX;
    const deltaY = ovalCenterY - pictureCenterY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    const dirX = deltaX / distance;
    const dirY = deltaY / distance;
    
    const gameAreaCenterX = gameAreaRect.left + gameAreaRect.width / 2;
    const gameAreaCenterY = gameAreaRect.top + gameAreaRect.height / 2;
    
    const centerToPictureX = pictureCenterX - gameAreaCenterX;
    const centerToPictureY = pictureCenterY - gameAreaCenterY;
    
    if (Math.abs(centerToPictureX) > Math.abs(centerToPictureY)) {
        if (centerToPictureX > 0) {
            startX = pictureRect.left - gameAreaRect.left;
            startY = pictureCenterY - gameAreaRect.top;
        } else {
            startX = pictureRect.right - gameAreaRect.left;
            startY = pictureCenterY - gameAreaRect.top;
        }
    } else {
        if (centerToPictureY > 0) {
            startX = pictureCenterX - gameAreaRect.left;
            startY = pictureRect.top - gameAreaRect.top;
        } else {
            startX = pictureCenterX - gameAreaRect.left;
            startY = pictureRect.bottom - gameAreaRect.top;
        }
    }
    
    endX = ovalCenterX - gameAreaRect.left;
    endY = ovalCenterY - gameAreaRect.top;
    
    const existingConnection = connections.find(conn => conn.pictureId === selectedPicture.dataset.id);
    if (existingConnection) {
        const existingLine = document.getElementById(`line-${existingConnection.pictureId}`);
        if (existingLine) {
            existingLine.remove();
        }
        connections = connections.filter(conn => conn.pictureId !== selectedPicture.dataset.id);
    }
    
    const isCorrect = selectedPicture.dataset.category === selectedOval.dataset.id;
    const lineColor = isCorrect ? '#4CAF50' : '#f44336';
    
    const svg = document.getElementById('connectionSvg');
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', startX);
    line.setAttribute('y1', startY);
    line.setAttribute('x2', endX);
    line.setAttribute('y2', endY);
    line.setAttribute('class', 'connection-line');
    line.setAttribute('style', `stroke: ${lineColor};`);
    line.setAttribute('id', `line-${selectedPicture.dataset.id}`);
    svg.appendChild(line);
    
    connections.push({
        pictureId: selectedPicture.dataset.id,
        ovalId: selectedOval.dataset.id,
        element: line,
        isCorrect: isCorrect
    });
    
    selectedPicture.classList.add('connected');
    selectedPicture.classList.remove('selected');
    selectedOval.classList.remove('selected');
    
    score.total++;
    if (isCorrect) {
        score.correct++;
    }
    updateScoreDisplay();

    const behaviorText = selectedPicture.querySelector('div:last-child').textContent;
    const categoryText = selectedOval.textContent;
    
    if (isCorrect) {
        createCelebrationEffect('✓ सहि!', '#4CAF50');
        announceToScreenReader(`Correct! "${behaviorText}" matches with "${categoryText}". Well done!`, 100);
    } else {
        createCelebrationEffect('✗ गलत!', '#f44336');
        announceToScreenReader(`Incorrect. "${behaviorText}" does not match with "${categoryText}". Try to remember for next time.`, 100);
    }
    
    selectedPicture = null;
    selectedOval = null;
    gameState.currentPicture = null;
    gameState.currentOval = null;
    
    setTimeout(() => {
        jumpToBehaviors();
    }, 2000);
}

function createCelebrationEffect(message, color) {
    const celebration = document.createElement('div');
    celebration.innerHTML = message;
    celebration.style.position = 'absolute';
    celebration.style.fontSize = '16px';
    celebration.style.fontWeight = 'bold';
    celebration.style.color = color;
    celebration.style.left = '50%';
    celebration.style.top = '50%';
    celebration.style.transform = 'translate(-50%, -50%)';
    celebration.style.animation = 'bounce 0.6s ease-out';
    celebration.style.zIndex = '1000';
    celebration.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    celebration.style.padding = '6px 12px';
    celebration.style.borderRadius = '6px';
    celebration.style.border = `1px solid ${color}`;
    
    document.querySelector('.game-area').appendChild(celebration);
    
    setTimeout(() => {
        celebration.remove();
    }, 1500);
}

function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.textContent = `स्कोर: ${score.correct}/${score.total}`;
    
    const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
    setTimeout(() => {
        announceToScreenReader(`Score updated: ${score.correct} correct out of ${score.total} attempts. ${percentage}% accuracy.`, 300);
    }, 500);
}

function resetGame() {
    console.log('Reset button clicked');
    
    const svg = document.getElementById('connectionSvg');
    if (svg) {
        svg.innerHTML = '';
    }
    
    connections.forEach(conn => {
        if (conn.element) {
            conn.element.remove();
        }
    });
    connections = [];
    
    document.querySelectorAll('.picture-item').forEach(item => {
        item.classList.remove('selected', 'connected');
        item.setAttribute('aria-selected', 'false');
    });
    
    document.querySelectorAll('.oval').forEach(oval => {
        oval.classList.remove('selected');
        oval.setAttribute('aria-selected', 'false');
    });
    
    selectedPicture = null;
    selectedOval = null;
    gameState.currentPicture = null;
    gameState.currentOval = null;
    gameState.navigationMode = 'behaviors';
    
    score = { correct: 0, total: 0 };
    updateScoreDisplay();
    
    generateBehaviors();
    announceToScreenReader('Game reset successfully. All connections cleared.', 200);
    
    setTimeout(() => {
        const firstBehavior = document.querySelector('.picture-item');
        if (firstBehavior) {
            firstBehavior.focus();
            const totalBehaviors = document.querySelectorAll('.picture-item').length;
            announceToScreenReader(`Ready to play! ${totalBehaviors} animals to match. Currently on first animals. Use arrow keys to navigate, Enter or Space to select.`, 800);
        }
    }, 300);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 20%, 60%, 100% {
            transform: translate(-50%, -50%) translateY(0);
        }
        40% {
            transform: translate(-50%, -50%) translateY(-30px);
        }
        80% {
            transform: translate(-50%, -50%) translateY(-15px);
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('keydown', (event) => {
    if ((event.key === 'r' || event.key === 'R') && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        resetGame();
        return;
    }
    if (event.key === 'Escape') {
        let cleared = false;
        
        if (selectedPicture) {
            selectedPicture.classList.remove('selected');
            selectedPicture.setAttribute('aria-selected', 'false');
            selectedPicture = null;
            gameState.currentPicture = null;
            cleared = true;
        }
        
        if (selectedOval) {
            selectedOval.classList.remove('selected');
            selectedOval.setAttribute('aria-selected', 'false');
            selectedOval = null;
            gameState.currentOval = null;
            cleared = true;
        }
        
        if (cleared) {
            announceToScreenReader('Selection cleared. Navigate to animal cards to start matching.', 100);
            setTimeout(() => {
                jumpToBehaviors();
            }, 500);
        } else {
            announceToScreenReader('No active selection to clear.', 100);
        }
    }
    
    if (event.key === 'Tab' && !event.shiftKey) {
        if (gameState.navigationMode === 'behaviors' && !selectedPicture) {
            const focusedElement = document.activeElement;
            if (focusedElement && focusedElement.classList.contains('picture-item')) {
                event.preventDefault();
                jumpToCategories();
            }
        }
    }
    
    if (event.key === 'Tab' && event.shiftKey) {
        if (gameState.navigationMode === 'categories') {
            const focusedElement = document.activeElement;
            if (focusedElement && focusedElement.classList.contains('oval')) {
                event.preventDefault();
                jumpToBehaviors();
            }
        }
    }
    
    if (event.key === 'h' || event.key === 'H') {
        event.preventDefault();
        const unconnectedCount = document.querySelectorAll('.picture-item:not(.connected)').length;
        const totalCount = document.querySelectorAll('.picture-item').length;
        const helpMessage = `
            Game Help: ${unconnectedCount} of ${totalCount} behaviors remaining to match. 
            Current score: ${score.correct} correct out of ${score.total} attempts. 
            Use arrow keys to navigate, Enter or Space to select, Escape to clear selection, 
            Tab to move between behavior and category areas, Ctrl+R to reset game.
        `;
        announceToScreenReader(helpMessage, 100);
    }
});

window.addEventListener('resize', () => {
    // Debounce resize events to avoid excessive recalculations
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
        if (!selectedPicture && !selectedOval) {
            generateBehaviors();
            generateCategories();
            announceToScreenReader('Game layout adjusted for new screen size.', 500);
        }
    }, 150);
});

window.resetGame = resetGame;

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    
    document.body.addEventListener('focusin', (event) => {
        const element = event.target;
        
        if (element.classList.contains('picture-item')) {
            if (!element.classList.contains('connected')) {
                const allBehaviors = Array.from(document.querySelectorAll('.picture-item:not(.connected)'));
                const index = allBehaviors.indexOf(element);
                const behaviorText = element.querySelector('div:last-child').textContent;
                setTimeout(() => {
                    announceToScreenReader(`Behavior ${index + 1} of ${allBehaviors.length}: ${behaviorText}`, 300);
                }, 100);
            }
        } else if (element.classList.contains('oval')) {
            const allCategories = Array.from(document.querySelectorAll('.oval'));
            const index = allCategories.indexOf(element);
            const categoryText = element.textContent;
            setTimeout(() => {
                announceToScreenReader(`Category ${index + 1} of ${allCategories.length}: ${categoryText}`, 300);
            }, 100);
        }
    });
});