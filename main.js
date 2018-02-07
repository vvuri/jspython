const electron = require('electron');
const app = electron.app;  // создали главный процесс
const BrowserWindow = electron.BrowserWindow;
let appWindow;

// обработчики событий
app.on('ready', () => {
   createWindow();
   
   appWindow.loadURL(`file://${__dirname}/main.html`); 
   
});

app.on('window-all-closed', function() {
   app.quit();
});

// создание самого окна
function createWindow() {
    appWindow = new BrowserWindow({
        width: 422,
        height: 500,
        //frame:false,
        resizable:false
    });
};