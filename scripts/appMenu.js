const { shell } = require('electron');
const dialog = require('electron').dialog;
const newShotDialog = {
    type: 'info',
    title: 'JSPython',
    message: 'It is not a Python code, it\'s JavaScript and Electron. \n vvuri 2018',
    buttons: ['ok']
};

module.exports = function appMenu(app, appWindow) {
  return (
    [
      {
        label: 'About',
        submenu: [
          {
            label: 'Click me',
            click() {
              dialog.showMessageBox(newShotDialog, function(index) {
              })
             },
          },
        ],
      },
    ]
  );
};