import { Deserializable } from './deserializable.model';

/**
 * A model class representing a subscription
 *
 * @export
 * @class Subscription
 * @implements {Deserializable}
 */
export class Subscription implements Deserializable {
  /**
   * The discriptive name of the subscription
   *
   * @type {string}
   * @memberof Subscription
   */
  name: string;

  /**
   * The price associated with the subscription
   *
   * @type {number}
   * @memberof Subscription
   */
  price: number;

  /**
   * Method that given some input to an instance of the class
   * Subscription populates its members
   *
   * @param {*} input the data provided
   * @returns the same instance with the correct values
   * @memberof Subscription
   */
  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
