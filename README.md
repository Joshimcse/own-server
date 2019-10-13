# own-server

A minimalist Zero Configuration local web server for full stack development

* Supports HTTP. But HTTPS and HTTP2 is supported is comming soon 
* Small and 100% personalisable. Load and use only the behaviour required by your project.
* Attach a custom view to personalise how activity is visualised.
* Programmatic and command-line interfaces.

Use this tool to:

* Build any type of front-end web application (static, dynamic, Single Page App, Progessive Web App, React etc).
* Prototype a back-end service (REST API, microservice, websocket, Server Sent Events service etc).
* Monitor activity, analyse performance, experiment with caching strategy etc.

## Synopsis

This package installs the `os` or `own-server` command-line tool (take a look at the [usage guide](https://github.com/joshimcse/own-server/wiki)).

### Static web site

Running `os` or `own-server` without any arguments will host the current directory as a static web site. Navigating to the server will render a directory listing or your `index.html`, if that file exists.

```sh
$ os
Listening on http://localhost:3007, http://127.0.0.1:3007
```


### Single Page Application

Serving a Single Page Application (an app with client-side routing, e.g. a React or Angular app) is as trivial as specifying the name of your single page:

```sh
$ os --spa
or
$ own-server --spa
```


*If a static file is requested (e.g. `/css/style.css`) then serve it, if not (e.g. `/login`) then serve the specified SPA and handle the route client-side.*



## Further Documentation

[See the wiki for plenty more documentation and tutorials](https://github.com/joshimcse/own-server/wiki).

## Install Globally

**Requires node v8 or above**.

```sh
$ npm install -g own-server
```

**if you checkout this repository locally, then follow below**
```sh
$ npm install -D own-server
```
Change package.json scripts
```sh
  "scripts": {
    "start": "./node_modules/.bin/os --spa",
  }
```
`.\node_modules\.bin\{your command}` and finally run `npm start` to the terminal.

```sh
$ npm start
Listening on http://localhost:3007, http://127.0.0.1:3007
```
* * *

&copy; 2019 Joshim Uddin \<joshimcse@gmail.com\>.