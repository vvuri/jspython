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
    - scripts - не создавал пока
    - renderer.js
6. npm install electron --save-dev
7. в package.json добавим в scripts 
   "start": "electron ."
8. Запуск приложения:
   npm start


### План
- Добавить простой текст на экране
- Добавить Canvas
- Добавить main.html
- Добавить тесты - Jest
- Провеирть покрытие тестами
- Можно ли в тестах использовать webdrive  
    https://electronjs.org/docs/tutorial/using-selenium-and-webdriver
- убрать рамку, добавить закрытие окна
- оценить объем проекта
- запустить на ноуте - т.к. как это распространять как приложение
    https://electronjs.org/docs/tutorial/application-packaging
- возможность мобильной версии?

      
        
