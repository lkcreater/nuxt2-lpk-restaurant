export default (ctx, inject) => {
    inject('nav', (nav) => {
        if(nav){
            ctx.store.commit('breadcrumb/setBreadcrumb', nav);
        }
        return ctx.store.getters['breadcrumb/getBreadcrumb'];
    })
}