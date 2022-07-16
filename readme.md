MERN STACK process:
1. There are 2 sub folders. 1 for backend, 1 for frontend
2. package.json file should be on root folder
3. add .gitignore and include node_modules and .env
4. install dependencies: express, dotenv, mongoose, bcryptjs, colors
5. install devDependency nodemon: npm i -D nodemon
6. add script to package.json file:  "server": "nodemon support-backend/server.js". so we can run: npm run server
7. in order to use import syntax, we need to add  "type": . "module" into package.json file.
8. we create new file .env to put env variables. to bring these variables inside the app. we use dotenv package:
   import dotenv from 'dotenv'       dotenv.config()
   const PORT = process.env.PORT    process.env and env var name



