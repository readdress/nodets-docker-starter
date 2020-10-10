Node TS in Docker from Development straight to Production; Include Nodemon, Eslint, Jest
Node, TypeScript in Docker from Dev to Prod workflow that might work for you too.

Create dev.Dockerfile in docker directory

in Docker file, create user

Build the image

Use the image to int project

create .env file at root

create docker-compose.yml at root

run docker-compose build nodets

use the resulting image to run command:
docker run --rm -it -v ${PWD}:/home/${USER}/app nodets:dev npm init -y or npx create-react-app or npx express-generator

A package.json file will be create in you application folder with the correct permissions

I add some application files

Install dependencies
docker run --rm -it -v ${PWD}:/home/${USER}/app nodets:dev npm install express debug dotenv

Dev dependencies;
docker run --rm -it -v ${PWD}:/home/${USER}/app nodets:dev npm install --save-dev typescript ts-node nodemon eslint @types/node @types/express @types/debug @typescript-eslint/eslint-plugin @typescript-eslint/parser

add .gitignore, .dockerignore

Update npm start

Update Dockerfile;
- Install dependencies
- Set PORT
- npm start:developement


docker-compose up -d --build

open localhost:8080

Change the response in the home controller, save and refresh the page in the browser.

Add git;
git init
git add .
git commit

Add jest;
docker-compose exec nodets npm install --save-dev jest ts-jest @types/jest

docker-compose exec nodets npm test



Build production image;
docker-compose exec nodets npm run build
