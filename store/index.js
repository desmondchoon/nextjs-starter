import { useStaticRendering } from 'mobx-react'

/**Stores */
import TestStore from './test-store'

const isServer = !process.browser
useStaticRendering(isServer)

class Store {
    constructor(props) {
        this.testStore = new TestStore(props);
    }
}

let store = null

export function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(initialData)
  }
  if (store === null) {
    store = new Store(initialData)
  }
  return store
}