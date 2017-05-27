# Counter

## About this Project
This is simple React Redux sample.  
This project use React for view.

## implementation
I am referring to the following project.  
https://github.com/reactjs/redux/tree/master/examples/counter

I implemete Redux objects.
- Reducer
- Store


1. If click increment or decrement button, send Action to the Store by calling dispath().
2. Reducer return the State according to the Action.
3. If change the State, update() is executed.
4. Using subscribe(), if the State is changed, update() is called. Update this.state.value on the update().
5. Pass the this.state.value to the Counter. Couter is rerendered if this.state.value is changed.

## Precondition
- npm is installed

## Environment
Execute the following command.  
$ npm install

## How to start application
Execute the following command.  
$ npm start

Open browser at URL localhost:3000

## Folder Structure
After git clone, project should look like this:

```
Counter/
  README.md
  README_ja.md
  .gitignore
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    Application.js
    Counter.js
    index.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.
* `src/Applicaton.js` is implementation of Redux.
* `src/Counter.js` is implementation of Counter.
