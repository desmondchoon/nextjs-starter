import {observable, action} from 'mobx'

class TestStore {
  @observable test = "mobx works";
}


const testStore = new TestStore()
export default testStore
