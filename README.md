# Showdown

This is the monorepo for the tournament bracket management app, Brackets.

## Environment

.env file contents:
DATABASE_URL=mongodb+srv://&lt;username>:&lt;userpassword>@cluster0-cez0a.mongodb.net/&lt;dbname>?retryWrites=true&w=majority  
PORT=&lt;port>  
ISPRODUCTION=&lt;boolean>

## Deploy to Production

If the server is up and the app is already running, run the following command in ./server on your local machine

npm run deploy-production
