// Collapse western.oa-bsa.org into wr
import wr = westernregion;

/**
 * The westernregion (wr) module
 *
 * @module westernregion
 */
declare module westernregion {

	/**
	 * The module class interface for applications.
	 *
	 * @module westernregion
	 * @interface IModule
	 */
	interface IModule {
		config?(): IModule;
		controllers?(): IModule;
		directives?(): IModule;
		factories?(): IModule;
		module?(): IModule;
		services?(): IModule;
		templates?(): IModule;
	}

	interface IModuleStatic {
		CLASS_NAME: string;
		new(): IModule;
	}

}

/**
 * The Isotope interface.
 */
interface IIsotope {
  new (elem: string, options: {});
  new (elem: HTMLElement, options: {});
  new (elem: JQuery, options: {});
  new (elem: ng.IAugmentedJQuery, options: {});
  filteredItems: Object[];
  addItems(elements: HTMLElement[]);
  appended(elements: HTMLElement[]);
  arrange(options: IIsotopeOptions);
  hide(items: HTMLElement[]);
  insert(elements: HTMLElement[]);
  layout();
  layoutItems(items: HTMLElement[], isStill: boolean);
  on(name: string, listener: (filteredItems: Object[]) => any): Function;
  prepended(elements: HTMLElement[]);
  remove(elements: HTMLElement[]);
  reveal(items: HTMLElement[]);
  shuffle();
  stamp(elements?: HTMLElement[]);
  unstamp(elements?: HTMLElement[]);
  updateSortData(elements?: HTMLElement[]);
}

/**
 * The Isotope options object.
 */
interface IIsotopeOptions {
  filter?: Function;
  getSortData?: { [key: string]: any };
  itemSelector?: string;
  layoutMode?: string;
  percentPosition?: boolean;
  sortBy?: string;
}

/**
 * The Isotope JQuery plugin.
 */
interface JQuery {
    isotope(options?: IIsotopeOptions): JQuery;
}