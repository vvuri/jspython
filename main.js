const electron = require('electron');
const app = electron.app;  // создали главный процесс
const BrowserWindow = electron.BrowserWindow;
let appWindow;
const appMenu = require('./scripts/appMenu');  // упровление меню

// обработчики событий
app.on('ready', () => {
    createWindow();
   
    const template = appMenu(app, appWindow);
    const menu = electron.Menu.buildFromTemplate(template);
    electron.Menu.setApplicationMenu(menu);


    appWindow.loadURL(`file://${__dirname}/main.html`); 
    // appWindow.webContents.openDevTools(); // открыть консоль отладки прямо в окне
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