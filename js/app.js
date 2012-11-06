'use strict';

/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
var todomvc = angular.module('todomvc', []);

$("#toggle-all").tooltip({placement: 'right'});

chrome.extension.onConnect.addListener(function(port) {
  var tab = port.sender.tab;
  // This will get called by the content script we execute in
  // the tab as a result of the user pressing the browser action.
  port.onMessage.addListener(function(info) {
//    $("#new-todo").val(info.title);
    var scope = angular.element("#new-todo").scope();
    scope.newTodo = info.title;
    scope.$apply();
  });
});

chrome.tabs.executeScript(null, {file: "content_script.js"});
