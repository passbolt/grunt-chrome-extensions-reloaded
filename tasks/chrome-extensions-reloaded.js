/*
 * Chrome Extensions Reloaded
 *
 * Copyright (c) 2015 Bolt Softwares Pvt Ltd
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var exec = require('child_process').exec;
  var tabId = undefined;

  function reload() {
    // get the chrome tab or open one if needed
    var cmd = "chrome-cli list tabs | grep Extensions | awk '{print $1}' | tr -d '[]'";
    exec(cmd, function(error, stdout, stderr) {
      if(stderr) {
        return console.error(stderr);
      }
      if(stdout === '') {
        openChromeExtensions();
      } else {
        tabId = stdout;
        reloadChromeExtensions();
      }
    });
  }

  function reloadChromeExtensions() {
    var cmd = "chrome-cli reload -t " + tabId;
    exec(cmd, function(error, stdout, stderr) {
    });
  }

  function openChromeExtensions() {
    var cmd = "chrome-cli open chrome://extensions | grep 'Id:' | awk '{print $2}'";
    exec(cmd, function(error, stdout, stderr) {
      tabId = stdout;
      reloadChromeExtensions();
    });
  }

  grunt.registerTask('chrome-extensions-reloaded', 'Reload chrome extensions', function() {
    this.async();
    reload();
  });

};