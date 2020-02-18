# apps_listing v0.1

Apps_listing v0.1 is an app that aims to display information about other apps as well as their subscriptions.

The app can be broke into two major pieces which are the frontend, using Angular, and the backend, using Node.js.

The frontend is responsible for displaying all the information that retrieve from the services. The backend is responsible to get all the data from the data source, and expose the services to the frontend.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install all the packages needed to run apps_listing v0.1.

```bash
npm install
```

## Usage

Firstly start the Node.js server with which the Angular app will comunicate.

```bash
cd node-apps-list
npm run dev
```

After that serve the Angular app to open a browser instance with the app running.

```bash
cd angular-apps-list
npm run dev
```

## Testing
In order to run unit tests developed for the app, first up start the Node.js server...

```bash
cd node-apps-list
npm run dev
```

...and then run the following command

```bash
cd ../angular-apps-list
ng test
```

## Authors
Diogo Fernandes

