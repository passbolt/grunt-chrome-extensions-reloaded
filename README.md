# grunt-chrome-extensions-reloaded

This grunt utility can help reload open chrome extensions (chrome://extensions) and therefore help you if you
are developing a chrome extension. You will need to install [chrome-cli](https://github.com/prasmussen/chrome-cli) to interface with Chrome.

## How is this different from existing modules?

This work is based on an original idea by freedomflyer, [check it out](https://github.com/freedomflyer/grunt-chrome-extension-reload)

Main differences:
- No other grunt task dependencies
- Some killer features such as: opening a tab if you don't have one open already. 😉
- No unit tests, no nothing

## Getting Started
Install [chrome-cli](https://github.com/prasmussen/chrome-cli), something like:

```shell
brew install chrome-cli
```

Add the task to your list of project dependencies:

```shell
npm install grunt-chrome-extensions-reloaded --save-dev
```

Once the plugin has been installed, enable inside your Gruntfile.js:

```js
grunt.loadNpmTasks('grunt-chrome-extensions-reloaded');
```

You can then run the task alone:

```js
grunt chrome-extensions-reloaded
```

Or add it to your grunt-contrib-watch task:

```js
watch: {
  js: {
    files: [
      'js/**/*.js'
    ],
    tasks: [
      'chrome_extensions_reloaded'
    ]
  }
}
```
