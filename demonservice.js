/*
MoltenWeb window manager - 2024 
written by ghgltggamer

License MIT LICENSE
*/

// CSS embedded in JavaScript
const style = document.createElement('style');
style.textContent = `
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #2e3440;
}

#desktop {
  position: relative;
  width: 100%;
  height: 100%;
}

#minimized-windows {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: #4c566a;
  display: flex;
  gap: 10px;
  align-items: center;
}

.minimized-icon {
  width: 40px;
  height: 40px;
  background-color: #3b4252;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.window {
  position: absolute;
  background-color: #3b4252;
  border: 1px solid #4c566a;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
}

.window-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4c566a;
  padding: 5px;
  cursor: move;
}

.window-header span {
  color: #eceff4;
  font-size: 14px;
  margin-left: 10px;
}

.window-header .controls {
  display: flex;
  gap: 5px;
}

.window-header .controls div {
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bf616a;
  border-radius: 50%;
  cursor: pointer;
}

.window-header .controls div:hover {
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
}

.window-header .controls .minimize {
  background-color: #d08770;
}

.window-header .controls .fullscreen {
  background-color: #a3be8c;
}

.window-header .controls .icon {
  fill: #eceff4;
  width: 12px;
  height: 12px;
}

.window-content {
  flex: 1;
  padding: 10px;
  color: #eceff4;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.window-content iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.resizable {
  resize: both;
  overflow: auto;
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
`;
document.head.appendChild(style);

// JavaScript for custom window management
(function() {
  const desktop = document.getElementById('desktop');
  const originalOpen = window.open;
  const originalClose = window.close;
  const windows = new Set();

  window.open = function(url = '', name = '', specs = '') {
    const config = parseSpecs(specs);
    if (config.target === '_parent') {
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.target = '_parent';
      anchor.click();
      return;
    }

    const windowElement = createWindowElement({ ...config, content: `<iframe src="${url}" style="width: 100%; height: 100%; border: none;"></iframe>`, name });
    desktop.appendChild(windowElement);
    makeDraggable(windowElement);
    windows.add(windowElement);
    return windowElement;
  };

  window.close = function(windowElement) {
    if (windows.has(windowElement)) {
      windowElement.remove();
      windows.delete(windowElement);
    } else {
      originalClose.call(window);
    }
  };

  function createWindowElement(config) {
    const windowElement = document.createElement('div');
    windowElement.classList.add('window', 'resizable');
    windowElement.style.width = config.width || '300px';
    windowElement.style.height = config.height || '200px';
    windowElement.style.left = '50px';
    windowElement.style.top = '50px';

    const windowHeader = document.createElement('div');
    windowHeader.classList.add('window-header');

    const icon = document.createElement('img');
    icon.classList.add('icon');
    icon.src = config.icon || '';

    const title = document.createElement('span');
    title.innerText = config.name || 'New Window';

    const controls = document.createElement('div');
    controls.classList.add('controls');

    const minimizeButton = document.createElement('div');
    minimizeButton.classList.add('minimize');
    minimizeButton.innerHTML = `<svg class="icon" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2z"></path></svg>`;
    minimizeButton.addEventListener('click', () => {
      const minimizedIcon = document.createElement('div');
      minimizedIcon.classList.add('minimized-icon');
      minimizedIcon.innerHTML = icon.outerHTML;
      minimizedIcon.addEventListener('click', () => {
        windowElement.style.display = 'block';
        minimizedIcon.remove();
      });
      const target = document.getElementById(config.winid) || document.getElementById('minimized-windows');
      target.appendChild(minimizedIcon);
      windowElement.style.display = 'none';
    });

    const fullscreenButton = document.createElement('div');
    fullscreenButton.classList.add('fullscreen');
    fullscreenButton.innerHTML = `<svg class="icon" viewBox="0 0 24 24"><path d="M6 6h12v12H6V6z"></path></svg>`;
    fullscreenButton.addEventListener('click', () => {
      if (windowElement.requestFullscreen) {
        windowElement.requestFullscreen();
      } else if (windowElement.mozRequestFullScreen) {
        windowElement.mozRequestFullScreen();
      } else if (windowElement.webkitRequestFullscreen) {
        windowElement.webkitRequestFullscreen();
      } else if (windowElement.msRequestFullscreen) {
        windowElement.msRequestFullscreen();
      }
    });

    const closeButton = document.createElement('div');
    closeButton.innerHTML = `<svg class="icon" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"></path></svg>`;
    closeButton.addEventListener('click', () => {
      window.close(windowElement);
    });

    controls.appendChild(minimizeButton);
    controls.appendChild(fullscreenButton);
    controls.appendChild(closeButton);
    windowHeader.appendChild(icon);
    windowHeader.appendChild(title);
    windowHeader.appendChild(controls);

    const windowContent = document.createElement('div');
    windowContent.classList.add('window-content');
    windowContent.innerHTML = config.content || '';

    windowElement.appendChild(windowHeader);
    windowElement.appendChild(windowContent);

    return windowElement;
  }

  function makeDraggable(element) {
    const header = element.querySelector('.window-header');
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - element.getBoundingClientRect().left;
      offsetY = e.clientY - element.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        element.style.left = `${e.clientX - offsetX}px`;
        element.style.top = `${e.clientY - offsetY}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }

  function parseSpecs(specs) {
    const defaultConfig = {
      target: '_blank'
    };

    return specs.split(',').reduce((acc, spec) => {
      const [key, value] = spec.split('=');
      acc[key.trim()] = value.trim();
      return acc;
    }, defaultConfig);
  }
})();

// Example of opening a new window
//const newWindow = window.open('https://example.com', 'My Window', 'width=400,height=300,icon=icon.png,winid=desktop,target=_blank');
