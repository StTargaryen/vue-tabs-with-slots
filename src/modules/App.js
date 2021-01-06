import { Layer } from "./Layer";
export class App {
  constructor(container) {
    this.layer = new Layer(container);
  }
}
