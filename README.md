# New Secret Escapes

[![Netlify Status](https://api.netlify.com/api/v1/badges/c97db292-0732-424d-8cc4-2635f0b9c276/deploy-status)](https://app.netlify.com/sites/melodious-sunburst-c5f722/deploys)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Publicly available:
[here](https://melodious-sunburst-c5f722.netlify.app/)

## About
This simple single page application allows to search for a holiday and view some basic details about it

Application contains three pages
- Home (search location)
- Results (A list of results that match the search performed, and link through to the details page)
- Details (more rich information about selected hotel/sale)

## Installation / Development

This project  requires [Node.js](https://nodejs.org/).
During the development process was used **Node v16.17.0**
- clone this repository
  `git clone https://github.com/artuone83/new-secret-escapes.git`
- install dependencies
  `npm install`
- start local server
  `npm start`
## Technologies
### Frontend
- [React]
- [Create React App]
- [Typescript] ([React Typescript Cheatsheet])
- [Apollo client]
- [Graphql]
- [Material UI]
- [Codegen]
  
### Backend

open API from `https://staging.sparrow.escapes.tech/graphql` (No Authorization Required)
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### `npm run lint`

Finds and list problems with your JavaScript code.

### `npm run format`

Formats code with Prettier.

### `npm run codegen`

Generates TypeScript Types From GraphQL schema to `src/generated/graphql.ts` file.


[React]: <https://react.dev/>
[React Typescript Cheatsheet]: https://react-typescript-cheatsheet.netlify.app/docs/basic/setup

[Create react app]: <https://create-react-app.dev/>
[Typescript]: <https://www.typescriptlang.org/docs/handbook/react.html>
[Apollo client]: <https://www.apollographql.com/docs/react/>
[Graphql]: <https://graphql.org/>
[Material UI]: <https://mui.com/material-ui/getting-started/overview/>
[Codegen]: <https://the-guild.dev/graphql/codegen>