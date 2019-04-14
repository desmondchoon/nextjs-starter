import { useStaticRendering } from 'mobx-react'

/**Stores */
import testStore from './test-store'

const isServer = !process.browser
useStaticRendering(isServer)

class Store {
    constructor() {
        this.testStore = testStore;
    }
}

let store = null

export function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData)
  }
  if (store === null) {
    store = new Store(isServer, initialData)
  }
  return store
}