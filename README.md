# RPGBOSS Interface Builder

This project aims for the generation of menus.
Its build on nwjs (former known node-webkit).

## Pre-requisites:
- nodejs

## Instructions:

1. Install project dependencies<br>

The project uses grunt to generate binary packages
so do it enter this code to the command line tool (cmd, terminal)

```
npm install -g grunt-cli
npm install
```

2. Running on OSX

You need to download the newest nwjs and put into your Programs folder in the finder.<br>
https://github.com/nwjs/nw.js#downloads<br>
<br>
After you have done that write that in the project paths with the terminal

```
python start.py
```

## Building the application:

Just run the grunt command in the command line tool.<br>
In the webkitbuilds folder there will be created folders for windows and osx.

```
grunt
```