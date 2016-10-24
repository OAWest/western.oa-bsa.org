declare var $: JQueryStatic;

/**
 * The isotope-grid directive.
 *
 * @class GridDirective
 */
export class GridDirective implements ng.IDirective {

  public restrict: string = "A";
  private grid: JQuery;

  /**
   * The link function is responsible for registering DOM listeners as well as updating the DOM.
   *
   * @class GridDirective
   * @method link
   * @param scope {ng.IScope} The scope for this directive
   * @param element {ng.IAugmentedJQuery} The JQuery instance members object.
   * @param attributes {ng.IAttributes} An object containing normalized DOM element attributes.
   * @param gridController {GridController} An instance of the controller.
   */
  public link: ng.IDirectiveLinkFn = (
    scope: ng.IScope,
    element: ng.IAugmentedJQuery,
    attributes: ng.IAttributes
  ) => {
    //verify we are not on an extra small screen
    if (this.isDeviceXs()) {
      console.log("[GridDirective:link] Not using isotope grid on extra small device.");
      return;
    }

    //set the options for the grid
    var options: IIsotopeOptions = {
      itemSelector: ".grid-item",
      percentPosition: true
    };

    //load the isotope package
    this.grid = $(element).isotope(options);
  };

  /**
   * Create the directive.
   *
   * @class GridDirective
   * @method Factory
   * @static
   * @return {ng.IDirectiveFactory} A function to create the directive.
   */
  public static Factory(): ng.IDirectiveFactory {
    return () => new GridDirective();
  }

  /**
   * Returns true if the view is extra small.
   *
   * @class GridDirective
   * @method isDeviceXs
   * @return {boolean}
   */
  private isDeviceXs(): boolean {
    return $(".device-xs").is(":visible");
  }
}