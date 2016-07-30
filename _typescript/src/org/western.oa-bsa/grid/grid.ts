/// <amd-dependency path="bootstrap-sass" />

import { GridDirective } from "./grid.directive";

/**
 * The org.western.oa-bsa.grid.Grid angular module.
 *
 * @class Grid
 */
export class Grid implements wr.IModule {

  public static CLASS_NAME: string = "org.western.oa-bsa.grid.Grid";
  private app: ng.IModule;

  /**
   * Create the module and the necessary controllers, directives, factories, services, etc.
   *
   * @class Module
   * @constructor
   */
  constructor() {
    //log
    console.log("[Grid:constructor] Initializing Grid");

    //initialize module, services, controllers and directives
    this.create().directives();
  }

  /**
   * Create the module.
   *
   * @class Module
   * @method create
   * @return {wr.IModule} Self for chaining.
   */
  public create(): wr.IModule {
    //log
    console.log(`[Grid:create] Creating module "${Grid.CLASS_NAME}"`);

    //create module
    this.app = angular.module(Grid.CLASS_NAME, []);

    return this;
  }

  /**
  * Create the directives.
  *
  * @class Module
  * @method directives
  * @return {wr.IModule} Self for chaining.
  */
  public directives(): wr.IModule {
    console.log("[Grid:directives] Creating GridDirective");
    this.app.directive("isotopeGrid", GridDirective.Factory());

    return this;
  }
}