# Notes
## Startup
```ps
C:\Users\...\AG_Web>npm run dev

> ag-web@0.0.0 dev
> vite


  VITE v8.0.0-beta.16  ready in 189 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
h

  Shortcuts
  press r + enter to restart the server
  press u + enter to show server url
  press o + enter to open in browser
  press c + enter to clear console
  press q + enter to quit
```
## Main Components
- `package-lock.json`, `package.json`, and `node_modules\`
  - Represents the configuration and dependencies of the project.
- `vite.config.js`
  - Specific for vite, not React.
- `public\`
  - For assets that are publicly accessable in the app.
- `src\`
  - Main part of the app.
  - Comes with `.css` and `.jsx` files.
## How a React Project works
At its core, a React project is just a single `.html` file. Like `index.html`.

React is what is known as a *client-side* rendered framework. This means what in a React website, the single `.html` page is what is composed for the entire page.
### `index.html` as a Canvas
In `index.html`, there is a `<div>` with the `id="root"`.
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ag-web</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```
In `main.jsx`, there is a `createRoot()` function where it accesses the `index.html`'s div by its ID and inserts the entire app in the `.render()` clause.
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```
## `main.jsx` Components
In most cases, you will not need to touch the `main.jsx` file. That being said, one thing to consider is the `<App />` tag *component* where all of your code exists in.
## `.js` vs `.jsx`
- `.jsx`
  - React's way to render UI
  - HTML in JS.
  - In React, you can use classic HTML text.

It essentially allows you to use JS syntax (*outside* of `return ()` clause) and HTML syntax (*inside* of `return ()` clause) in one single `.jsx` file.
### `App.jsx` Sample
```jsx
import './App.css'

function App() {
  const name     = 'LtUdon'
  const greeting = <h1>Hi, {name} (<i>in classic HTML text</i>)</h1>
  const desc     = <p>wip</p>
  return (
    <>
    <div>
      {greeting}
      {desc}
    </div>
    </>
  )
}

export default App
```
## React Components
- **Components**
  - Functions that return JSX elements.
  - Functions that return otherwise are NOT *components*.

Regarding naming conventions, React Components always start with a capital letter.
### Defining and Calling
With regular functions:
```jsx
// Defining
function getName(){
    return 'LtUdon'
}
// Calling
const name = getName()
```
However with components:
```jsx
// Defining
function App() {
  return (
    <>
    <div>
      <p>Sample JSX</p>
    </div>
    </>
  )
}

// Calling 
```
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
