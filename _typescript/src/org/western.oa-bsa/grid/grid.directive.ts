declare var $: JQueryStatic;

/**
 * The isotope-grid directive.
 *
 * @class GridDirective
 */
export class GridDirective implements ng.IDirective {

  public restrict: string = "A";

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
    //set the options for the grid
    var options: IIsotopeOptions = {
      itemSelector: ".grid-item",
      percentPosition: true
    };

    //load the isotope package
    $(element).isotope(options);
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
}