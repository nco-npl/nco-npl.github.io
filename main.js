const { app, BrowserWindow, Menu } = require('electron'); // Electron's app object
const express = require('express');
const path = require('path');

const server = express(); // 🌟 Renamed from 'app' to 'server' to avoid conflicts

app.name = "हाम्रो सेरोफेरो";

const publicDirectoryPath = path.join(__dirname, 'public');

// Use the new variable name for your Express configurations
server.use(express.static(publicDirectoryPath));

server.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

const port = process.env.PORT || 3030;

server.listen(port, () => {
    console.log(`Express server running on port ${port}`);
});

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 576,
    title: "ADT - हाम्रो सेरोफेरो कक्षा १",
    useContentSize:true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  win.loadURL(`http://localhost:${port}`);
}

const isMac = process.platform === 'darwin';

const template = [
  ...(isMac ? [{
    label: "हाम्रो सेरोफेरो", // 🌟 This replaces the default "Electron" title on Mac
    submenu: [
      { role: 'quit', label: 'बन्द गर्नुहोस्' } // Custom "Quit" label
    ]
  }] : []),
  // You can leave this empty or add standard Edit/Window menus if needed
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);


app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
