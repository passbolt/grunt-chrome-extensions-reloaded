# grunt-chrome-extensions-reloaded

This grunt utility can help reload open chrome extensions (chrome://extensions) and help with chrome extension development.
You will need to install [chrome-cli](https://github.com/prasmussen/chrome-cli) to interface with Chrome.

## How is this different from existing modules?

This work is based on an original idea by freedomflyer, check it out:
https://github.com/freedomflyer/grunt-chrome-extension-reload

Main differences:
- No other grunt task dependencies
- Some killer features such as: opening a tab if you don't have one open already. 😉

## Getting Started

```shell
npm install grunt-chrome-extensions-reloaded --save-dev
```

Once the plugin has been installed, enable inside your Gruntfile.js:

```js
grunt.loadNpmTasks('grunt-chrome-extensions-reloaded');
```

You can then run the task alone:
```js
grunt.loadNpmTasks('grunt-chrome-extensions-reloaded');
```

Or add it to your grunt-contrib-watch task:

grunt-chrome-extension-reload as-is. The recommended use case is as follows:

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
