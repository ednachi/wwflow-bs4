wwflow-bs4 is a folder structure to start with bootstrap4 straight on, only [npm](https://www.npmjs.com/), [gulp](http://gulpjs.com/) and [sass](http://sass-lang.com/install) is required.

### Requirements
- [NPM](https://www.npmjs.com/)
- [GulpJs](http://gulpjs.com/)
- [Sass](http://sass-lang.com/install)

## Time to start
- Clone the wwflow-bs4 repository and navigate with ```cd wwflow-bs4``` into this directory
- First ```npm install```
- ensuing build with ```gulp``` and finish!

## wwflow-bs4 Gulp things
- ```gulp default``` build bootstrap and your theme into ./public/css/style.css
- ```gulp watch``` rebuild your style.css if a file from ./res/sass has been edited
- ```npm serve``` run a webserver on http://localhost:8080
- ```npm clear``` remove all files from css, fonts and js which are in ./public

The best experience is given with ```npm serve watch```, have fun.
