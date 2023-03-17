import { lazy } from "react"

const routes = [
    {
        path: 'home',
        component: lazy(() => import ('./pages/Home')),

    },
]

export default routes;