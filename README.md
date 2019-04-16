# React-Redux, SCSS, Webpack starter template
https://react-webpack-starter.herokuapp.com/

## Installation 
1. Clone this repo by <br>
`git clone https://github.com/taiweituan/react-webpack-quickstart-template.git`
2. Update your npm by <br> `npm update npm`
3. Install npm packages<br>`npm i`
4. Build the web app scrip and styles <br> `npm run build`
5. Lastly, start the dev server<br>`npm start`
6. Voila!

# TODO

1. ~~Update *bable-loader* from 6.24 to version 7.10+~~
2. ~~Update CSS to be able to work with SCSS~~
3. ~~Create grid system (Used Bootstrap)~~
4. Pages
    * ~~Header~~
    * ~~Hero~~
5. Mobile-
    * Header
    * Hero 
6. Webpack production config<br>
    https://webpack.js.org/guides/production/
7. Transform to TypsScript

# Note to Myself
In package.json:
``` 
"heroku-prebuild": "echo This runs before Heroku installs your dependencies.",
"heroku-postbuild": "echo This runs afterwards."
```
Online working example
```
"heroku-postbuild": "webpack -p --config ./webpack.prod.config.js --progress"
```