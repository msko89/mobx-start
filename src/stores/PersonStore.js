import { observable, makeObservable } from 'mobx';

export default class PersonStore {
  @observable
  name = 'msko';

  @observable
  age = 33;

  constructor() {
    makeObservable(this);
  }

  plus() {
    this.age++;
  }
}
