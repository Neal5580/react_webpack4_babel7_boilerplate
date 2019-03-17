import { observable, action } from "mobx";
class Store {
  @observable title = "Mobx, Bebal 7, WebPack 4, React 16.8";
  @observable isDisplay = true;
  @action updateCheck() {
    this.isDisplay = !this.isDisplay;
  }
}
export default Store;
