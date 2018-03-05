# Basic implementation of a url-shortener
## How to setup the application
- First clone the repo `git clone https://github.com/Davidcreador/url-shortener.git`
- `cd` into server folder and install npm modules `npm install` or `yarn`
- `cd` into client folder and install npm modules `npm install` or `yarn`
- After these steps now in each folder you can run `yarn start` or `npm start` to run the application
- If you want to make changes in the server folder you can use this script `yarn run dev` to run *nodemon* to run restarts in the server automatically
- Provide an `.env` file to add environment variables `HOST` - `PORT` - `DB_URI` are the ones I am using for this app to run properly
- To seed the database you can go to the server `http://localhost:8080/db/seederbot` and it will run and populate the database with data of urls.

## Tec's Stack
### Server
- Using ExpressJs and MongoDB with Mongoose.

### Client
- Using ReactJs using create-react-app and axios to make fetch requests
- Also it is using service workers to work offline
