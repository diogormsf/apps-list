import { Subscription } from './Subscription';
import { Deserializable } from './deserializable.model';

/**
 * A model class representing an App
 *
 * @export
 * @class App
 * @implements {Deserializable}
 */
export class App implements Deserializable {
  /**
   * The unique id that identifies an app
   *
   * @type {string}
   * @memberof App
   */
  id: string;

  /**
   * The discriptive name of the App
   *
   * @type {string}
   * @memberof App
   */
  name: string;

  /**
   * The text that explains or describes the App
   *
   * @type {string}
   * @memberof App
   */
  description: string;

  /**
   * The list of categories in which the App inserts itself
   *
   * @type {Array<string>}
   * @memberof App
   */
  categories: Array<string>;

  /**
   * The list of subscriptions available for purchasing/subscribing the App
   *
   * @type {Array<Subscription>}
   * @memberof App
   */
  subscriptions: Array<Subscription>;

  /**
   * Method that given some input to an instance of the class
   * App populates its members
   *
   * @param {*} input the data provided
   * @returns the same instance with the correct values
   * @memberof App
   */
  deserialize(input: any) {
    Object.assign(this, input);
    this.subscriptions = [];
    input.subscriptions.forEach(elem => {
      this.subscriptions.push(new Subscription().deserialize(elem));
    });
    return this;
  }
}
