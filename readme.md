## Пример написание змейки на JS с Canvas и обернутое в Electron

1. npm init
   после ответа на вопросы получаем package.json
   точкой входа необходимо указать main.js
2. git init
   git add .
   git commit -m "Start"
   git remote add origin https://github.com/vvuri/jspython.git
   git push -u origin master
3. создать .gitignore
   и добавить в него node_modules   
4. пишем все в main.html - он запускается в браузере - получили змейку
5. создаем файлы
    - main.js
    - scripts 
    - renderer.js
6. npm install electron --save-dev
7. в package.json добавим в scripts 
   "start": "electron ."
8. Запуск приложения:
   npm start
9. Добавление консоли отладки
    appWindow.webContents.openDevTools();
10. Добавляем билдер
    npm install electron-builder --save-dev 
11. создаем каталог build
   помещаем туда icon.png для windows min 256x256
   прописываем пункты в package.json
   запускаем сборку    
   npm run dist
12. Итого получаем 37Мбайт exe файл установщика
    Который вешает иконку на рабочий стол
13. добавляем юнит-тесты в Jest
    npm install jest --save-dev
    созадем каталог __tests__
    и прописываем сценарий "scripts": "test": "jest"
14. Добавляем вайл с простым тестом в __tests__
15. Запуск тестов 
    npm test
    jest --coverage  что бы посмотреть на покрытие кода тестами
16. Ставим Spectron - ChromeDriver testing framework for Electron 
    npm install --save-dev spectron    
    добавляем тест try_septron.js
    запуск аналогично npm test
    - пока вариант не разаботал -
17. Еще один вариант   
    npm install selenium-webdriver

   

### План
- Добавить тесты - Jest
- Можно ли в тестах использовать webdrive  
    https://electronjs.org/docs/tutorial/using-selenium-and-webdriver

      
        
