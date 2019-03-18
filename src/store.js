import { observable, action, computed } from "mobx";
class Store {
  @observable title = "Mobx, Bebal 7, WebPack 4, React 16.8";
  @observable isDisplay = true;

  /**
   * Using @action.bound to bind actions to the targeted object
   */
  @action.bound setIsDisplay() {
    this.isDisplay = !this.isDisplay;
  }

  /**
   * Using arrow function to bind actions to the targeted object
   */
  @action setTitle = value => {
    this.title = value;
  };

  @computed get numberOfWords() {
    return this.title.length;
  }
}
export default Store;
