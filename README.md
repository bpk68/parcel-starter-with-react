# Parcel bundler starter kit using React

If you're looking to get started using the Parcel JS bundler as a Webpack alternative, but would like to use the popular React framework, then this is the place for you.

Following on from a recent blog post on [using React with Parcel JS](https://robkendal.co.uk/blog/2019-04-29-using-parcel-bundler-with-react-js/), I've put together this quick and simple starter kit so you can worry less about the setup and configuration and more about developing!

## Getting started

It couldn't be easier to get started. Simply fork or clone the repo into a local folder and run the `yarn` install command:

```
yarn install
```

This will install the following dependencies:

- React (and React Dom)
- Parcel JS bundler
- Babel (including the react preset)

## Running the starter kit

If you checkout the `package.json` file, you'll see two scripts, one for development and one for building a production bundle.

To start the development server, you'll want this command:

```
yarn start
```

This will quickly bundle all of the necessary files and kick off the development server, which is generated at `http://localhost:1234`. 

## How to use the starter kit

Everything is kept quite simple and as unopinionated as possible so that you can start developing quickly and however you choose. 

Included in the project is a link to a kick-off `style.scss` file where you can load in any CSS you want. Also, there is a Title React component, but this is just to highlight Parcel working with a typical React component. 

The important files of note are:

- `/src/index.html` -- this is where the project starts and Parcel looks for its first bundle starting point
- `/src/assets/style.scss` -- as mentioned, the first file where the system looks for CSS information 
- `/src/App.js` -- as you'd epxect in a typical React setup, this is the starting point for the React app, loading in our Title component and rendering to the screen
- `/src/components/Title.jsx` - a simple example of a React component that renders a heading 1 on the page

## Issues, questions, more information?

If you run into any issues, have any questions or would like more information then please see the follow sections:

- **Issues** > please log an issue in the [project issues tab](https://github.com/bpk68/parcel-starter-with-react/issues)
- **Questions** > again, this might be a better place for the issues tab, but you can also email me on me[at]robkendal.co.uk
- **More information or support** > it's worth checking out the official [Parcel JS documenttation](https://parceljs.org/getting_started.html) for more help on adding extra things or customising your build and project setup.
