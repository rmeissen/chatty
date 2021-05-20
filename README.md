# Working with Firebase

You can see the working website here: 
[https://chatty-d881e.web.app/](https://chatty-d881e.web.app/)

Here's the (somewhat lacking...) tutorial:
[https://css-tricks.com/building-a-real-time-chat-app-with-react-and-firebase/](https://css-tricks.com/building-a-real-time-chat-app-with-react-and-firebase/)

And here's the original repo that I just downloaded and didn't fork:
[https://github.com/ReactTraining/react-router](https://github.com/ReactTraining/react-router)

## Access to Firebase Project
After you get access to the project in the firebase console, in the root directory of your local repo, you'll need to run:

### `npm install -g firebase-tools`
### `firebase init` 

Pick the appropriate project. We're using database, hosting, and auth if it matters. Make sure the BUILD folder is the published one -- not PUBLIC.

You may need to do some kind of firebase login thing -- not sure.

And I just learned through writing this that you can run THIS , although the yarn start works the same way:
### `npm run build-firebase`
### `firebase serve`

In addition to the yarn things below, when you're ready to push the changes to firebase, you can run this command in the root project directory:

### `firebase deploy`

...and if you're making aesthetic changes and don't want it to take forever, you can run:

### `firebase deploy --only hosting`

But before you do that, you'll need access to the firebase project. Feel free to set up a totally different non-firebase backend! But if firebase is your game, you'll want to 


# Getting Started with Create React App (came with the tutorial repo)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
