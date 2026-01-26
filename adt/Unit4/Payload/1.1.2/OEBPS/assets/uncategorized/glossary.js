function generateGlossary(config) {
    const glossaryContainer = document.getElementById('glossary');
    
    config.entries.forEach((entry, index) => {
        const item = document.createElement('div');
        item.className = 'glossary-item';
        item.setAttribute('role', 'listitem');
        item.tabIndex = 0;
        
        const term = document.createElement('div');
        term.className = 'glossary-term';
        term.textContent = entry.word;
        
        const description = document.createElement('div');
        description.className = 'glossary-description';
        description.textContent = entry.description;
        
        item.appendChild(term);
        item.appendChild(description);
        glossaryContainer.appendChild(item);

        item.setAttribute('aria-label', `${entry.word}: ${entry.description}`);

        item.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    const nextItem = item.nextElementSibling;
                    if (nextItem) nextItem.focus();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    const prevItem = item.previousElementSibling;
                    if (prevItem) prevItem.focus();
                    break;
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    break;
            }
        });
    });
}
generateGlossary(glossaryConfig);
const audioToggle = document.getElementById('audioToggle');
const audioStatus = document.getElementById('audioStatus');

audioToggle.addEventListener('change', function() {
    const isEnabled = this.checked;
    this.setAttribute('aria-checked', isEnabled);
    
    audioStatus.textContent = `Audio Description is ${isEnabled ? 'on' : 'off'}`;
    
    if (isEnabled) {
        console.log('Audio Description enabled');
    } else {
        console.log('Audio Description disabled');
    }
});

audioToggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
    }
});