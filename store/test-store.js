import {observable, action} from 'mobx'

class TestStore {
  @observable test = "mobx works";

  constructor(props){
    
  }
}

export default TestStore
