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


Deployment to Heroku

1. Install Heroku CLI 
2. login to Heroku from a Command Line - heroku login
3. Serve Frontend

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  // FIX: below code fixes app crashing on refresh in deployment
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' })
  })
}

4. add script to a package.json file:  "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix support-frontend && npm run build --prefix support-frontend"

5. push the code to remote repo

