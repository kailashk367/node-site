1. check version on node  js - node -v (tells version)
2. create a folder for site and go to the site.
3. check version of npm - npm -version
4. npm init - to create package json. (we can change index.js to server.js)
5. install depndeces - npm install express --save (--save will save depences within folde so we can add it to git repostry and aslo pacj.json)
6. on window you can use start . command to open current folder in window explore.

--Create a server

//import http module
//handle sending a request and returning responses.
// return string
// create a server.
//start sever and listen on port.

--Create server with express
//import expres 
// express function call and save it to app
//pass port

--use nodemon for work without stop server  again and again
-npm install --save -g (g fro global)
-update packge.json add into script "start": "nodemon FILE.js"
-if any issue set path - DRVIE;> npm config get prifix
-it will print where node installed the DRIVE:> set path=%PATH%;OUTPUTOF ABVOE COMMAND.


-- Folder structure of node file.
in above step we put the router in sever.js which ideal wromg.
so we need keep those router in router folder.
create routes.js file intp ROOT_FOLDER/app/routes.js
create public folder for img and styles. ROOT_FOLDER/public/img ROOT_FOLDER/public/styles/style.css.
on root folder create index.html, about.html, contact.html

now move all router into routes file
need requied exprees.
create object of router express.Router() function
export router object to sever.js file with help of module.exportes = VAR NAME

in server js you need to add require './app/routes'
use above var like app.use('/', router);

--------------------------MEAN-----------------------------

Install node
install bower npm install -g bower // all dependcices of UI manged by this
install grunt-cli npm install -g grunt-cli //
install grunt npm install -g grunt
install yeoman npm install -g yo
install genrator npm install -g generators-meanjs

 

