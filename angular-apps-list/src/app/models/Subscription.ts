import { Deserializable } from './deserializable.model';

export class Subscription implements Deserializable {
  name: string;
  price: number;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
