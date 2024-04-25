export const state = () => ({
    breadcrumb: []
})
  
export const getters = {
    getBreadcrumb(state) {
        return state.breadcrumb;
    }
}
  
export const mutations = {
    setBreadcrumb(state, payload) {
        state.breadcrumb = payload
    }
}