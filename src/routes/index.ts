export default [
    {
        name: 'home',
        path: '/',
        component: () => import('../pages/Home/Home')
    },
    {
        name: 'typescript',
        path: '/typescript',
        component: () => import('../pages/Home/TypeScriptIntro')
    },
    {
        name: 'vue',
        path: '/vue',
        component: () => import('../pages/Home/VueIntro')
    }
]
