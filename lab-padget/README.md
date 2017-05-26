# Lab 24: ngAdventure

## Description
For this lab we wrote a text based adventure game to help learn directives and services.

For more information see:
* [Class 24](https://github.com/codefellows/seattle-javascript-401d15/tree/master/class-24-ng-adventure)
* [Lab 24](https://github.com/codefellows-seattle-javascript-401d15/24-ng-adventure)

## Version
* 0.1.0

## Installation
Please visit the following pages for how to install your project locally.

* [Cloning A Repository](https://help.github.com/articles/cloning-a-repository/)
* [Fork A Repo](https://help.github.com/articles/fork-a-repo/)
* [Forking](https://guides.github.com/activities/forking/)

### Node
You need to have node.js installed.
* [Download Node](https://nodejs.org/en/)

### NPM Packages
* [NPM Docs](https://docs.npmjs.com)
* [NPM package.json](https://docs.npmjs.com/files/package.json)

### JSON Configuration
Initializing package.json
```
npm init

npm install -S angular babel-core babel-loader babel-preset-es2015 css-loader extract-text-webpack-plugin file-loader html-loader html-webpack-plugin node-sass resolve-url-loader sass-loader style-loader url-loader webpack

npm install -D webpack-dev-server
```

Add the following to package.json:
```
"scripts": {
  "test": "karma start",
  "watch": "webpack-dev-server --inline --hot",
  "build": "webpack"
}
```

### Dependencies
The result of installation above.

```
"dependencies": {
  "angular": "^1.6.4",
  "babel-core": "^6.24.1",
  "babel-loader": "^7.0.0",
  "babel-preset-es2015": "^6.24.1",
  "css-loader": "^0.28.3",
  "extract-text-webpack-plugin": "^2.1.0",
  "file-loader": "^0.11.1",
  "html-loader": "^0.4.5",
  "html-webpack-plugin": "^2.28.0",
  "node-sass": "^4.5.3",
  "resolve-url-loader": "^2.0.2",
  "sass-loader": "^6.0.5",
  "style-loader": "^0.18.1",
  "url-loader": "^0.5.8",
  "webpack": "^2.6.1"
},
"devDependencies": {
  "webpack-dev-server": "^2.4.5"
}
```

## Application
In Terminal run `webpack`
In Terminal run `npm run watch`

In your browser visit `http://localhost:8080/`

## Test Setup
```
karma init karma.conf.js

Which testing framework do you want to use ?
> jasmine

Do you want to use Require.js ?
> no

Do you want to capture any browsers automatically ?
> Chrome

What is the location of your source and test files ?
> test/**/*-test.js

Should any of the files included by the previous patterns be excluded ?
> no

Do you want Karma to watch all the files and run the tests on change ?
> no
```

## Running Tests
In [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) (Terminal) enter the command:

karma start
npm run test

## Resources
* [A Practical Guide to AngularJS Directives](https://www.sitepoint.com/practical-guide-angularjs-directives/)
* [Mastering AngularJS Directives](https://code.tutsplus.com/tutorials/mastering-angularjs-directives--cms-22511
)
* [Factory vs Service vs Provider](https://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/)

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/mmpadget/24-ng-adventure/blob/lab-24/lab-padget/LICENSE) file for details.

## Acknowledgments
* Code Fellows
* Scott Schmidt, Instructor
* Cayla Zabel, Teaching Assistant
* Devon Hackley, Teaching Assistant
* Thomas Martinez, Teaching Assistant
* JR Iriarte, Teaching Assistant
