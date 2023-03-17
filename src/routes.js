import { lazy } from "react"

const routes = [
    {
        path: 'home',
        component: lazy(() => import ('./pages/Home')),

    },
    {
        path: ''
    }
]

export default routes;