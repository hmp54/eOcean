# eOcean

COSC-280 final mySQL project

## Creating database:

1. Run ./scripts/create.sql and ./scripts/insert.sql first to create the database

## launching the UI:

1. Project was created with Node JS and [React JS](https://reactjs.org/docs/create-a-new-react-app.html).
   -Install node.js: https://nodejs.org/en/

2. Once Node JS is installed, navigate to project directory in terminal

3. Navigate into `client` directory:
   `cd client`

4. Run `npm install` to ensure all required dependencies + libraries are properly installed.

5. To launch the app use command: `npm start`
   -If the app launches succesfully, it should open up a web browser with the app at some localhost address (typically localhost:3000).

## launching the server/database side:

1. Run create.sql and insert.sql to ensure an updated version of the database is on your system first.
2. Once the UI is running, open a new terminal instance separate from the one that is being used to run the UI.
3. Navigate into the 'server' directory: `cd server`
4. Run the command: `node index.js`
5. If successful, should get a message from console: `Running server on port 3001.`
6. Now good to start using the UI!

## What's in each folder:

1. **Client:** UI implementation - created with Javascript + React JS
2. **Server:** Code that connects the UI to the MySQL database - created with Javascript, Node JS, MySql JS 2 (A library that allows SQL queries to be made in Javascript)
3. **Scripts:** all of the .sql files live here.
