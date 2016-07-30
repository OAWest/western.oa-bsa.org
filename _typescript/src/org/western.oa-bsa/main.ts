/// <reference path="../../../typings/index.d.ts" />
/// <reference path="./interfaces.ts" />

import { Grid } from "./grid/grid";

//declare global angular static class.
declare var angular: ng.IAngularStatic;

//start angular application
angular.element(document).ready(function() {
  //module name
  const MODULE_NAME: string = "org.western.oa-bsa";

  //define array of angular module names
  let requires: string[] = [];

  //create modules
  new Grid();

  //wire up modules
  angular.module(MODULE_NAME, [
    Grid.CLASS_NAME
  ]);

  //bootstrap the application
  angular.bootstrap(document, [MODULE_NAME], {
    "strictDi": true
  });
});