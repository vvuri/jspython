const electron = require('electron');
const app = electron.app;  // создали главный процесс
const BrowserWindow = electron.BrowserWindow;
let appWindow;

// обработчики событий
app.on('ready', () => {
   createWindow();
});

app.on('window-all-closed', function() {
   app.quit();
});

// создание самого окна
function createWindow() {
    appWindow = new BrowserWindow({
        width: 450,
        height: 500,
        //frame:false,
        resizable:false
    });
};