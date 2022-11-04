# Infinite Scroll

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Design principle

- Coding Style
  - Manage the coding rules / style by using eslint with Airbnb style and prettier.
- Components And Styling
  - Colocate components and style modules as possible to the component where it's being used.
- Structure
  - Refer to [bulletproof-react](https://github.com/alan2207/bulletproof-react).
- Data Fetching
  - Add api-client which is axios wrapper to handle error globally.
  - Use [React Query](https://github.com/TanStack/query) for fetching and managing asynchronous data.
- Performance
  - [react-window-infinite-loader](https://github.com/bvaughn/react-window-infinite-loader) to implement lazy load data fetching.
  - Large DOM tree can slow down app, so use [react-window](https://github.com/bvaughn/react-window) to virtualize large photo list.
  - Use memo and useCallback to prevent unnecessary rerender.
  - Lazy-loading images.
- Testing
  - Add Cypress End-to-end test to mock user behavior.

## How to use

Run `npm start` to open the app.\
Scroll window to bottom triggers data fetching to get new photos.

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run cypress`

It will open Cypress UI.\
Click E2E Testing button to check the tests.\
Note: You have to run `npm start` before run `npm run cypress`.

### `npm run storybook`

It will automatically open a new browser tab.\
You can check the style and props of components on [http://localhost:6006/](http://localhost:6006/)
