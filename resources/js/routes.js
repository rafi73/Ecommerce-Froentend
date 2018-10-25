const routes = [
    {
        path: '/',
        component: resolve => require(['./components/layouts/frontend/layout.vue'], resolve),
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: resolve => require(['./components/frontend/home.vue'], resolve),
                meta: {
                    title: 'Overview',
                    key: 'overview',
                    requiresAuth: true
                }
            },
            {
                path: '/restaurant',
                name: 'restaurant',
                component: resolve => require(['./components/backend/restaurant.vue'], resolve),
                meta: {
                    title: 'Restaurant',
                    key: 'restaurant',
                    requiresAuth: true
                }
            },
        ]
    },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: resolve => require(['./components/Login.vue'], resolve),
    //     meta: {
    //         title: 'Login',
    //         key: 'login',
    //     }
    // },
    // {
    //     path: '/forgot-password',
    //     name: 'forgot-password',
    //     component: resolve => require(['./components/ForgotPassword.vue'], resolve),
    //     meta: {
    //         title: 'Forgot Password',
    //         key: 'forgot-password'
    //     }
    // },
    // {
    //     path: '/password/reset/:token',
    //     name: 'reset-password',
    //     component: resolve => require(['./components/ResetPassword.vue'], resolve),
    //     meta: {
    //         title: 'Reset Password',
    //         key: 'reset-password',
    //     }
    // },
    // {
    //     path: '/500',
    //     name: '500',
    //     component: resolve => require(['./components/500.vue'], resolve),
    //     meta: {
    //         title: '500',
    //         key: 500
    //     }
    // },
    // {
    //     path: '*',
    //     component: resolve => require(['./components/404.vue'], resolve),
    //     meta: {
    //         title: '404',
    //         key: 404
    //     }
    // }
]

export default routes
