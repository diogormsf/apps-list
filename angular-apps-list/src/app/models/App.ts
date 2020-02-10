import { Subscription } from './Subscription';
import { Deserializable } from './deserializable.model';

export class App implements Deserializable {
  id: string;
  name: string;
  description: string;
  categories: Array<string>;
  subscriptions: Array<Subscription>;

  deserialize(input: any) {
    Object.assign(this, input);
    this.subscriptions = [];
    input.subscriptions.forEach(elem => {
      this.subscriptions.push(new Subscription().deserialize(elem));
    });
    return this;
  }
}
