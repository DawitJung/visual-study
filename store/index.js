// export const dispatch
export const state = () => ({
  lang: 'ko',
  routeTree: undefined,
})

export const mutations = {
  setRouteTree(state, newRouteTree) {
    state.routeTree = newRouteTree
  },
}

export const actions = {
  async updateRouteTree(store, app) {
    const { lang } = store.state
    const routeTree = { localeName: '홈', path: '/', children: new Map() }
    for (const { path, component } of app.router.options.routes) {
      if (path === '/') continue
      const pathArr = path.replace(/^\//, '').split('/')
      const localeName = (await component())[lang]
      addBranch(routeTree.children, pathArr, path, localeName)
    }
    function addBranch(treeMap, pathArr, path, localeName) {
      const branch = pathArr.shift()
      if (!treeMap.has(branch)) {
        treeMap.set(branch, { children: new Map() })
      }
      if (pathArr.length < 1) {
        treeMap.set(branch, {
          children: treeMap.get(branch).children,
          path,
          localeName,
        })
      } else {
        addBranch(treeMap.get(branch).children, pathArr, path, localeName)
      }
    }
    store.commit('setRouteTree', routeTree)
  },
  async nuxtServerInit(store, { app }) {
    await store.dispatch('updateRouteTree', app)
  },
}
