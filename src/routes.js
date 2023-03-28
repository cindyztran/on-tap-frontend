import Home from "./components/Home/Home";
import Show from "./pages/Show";

const routes = [
    {
        path: '/home',
        component: Home,

    },
    {
        path: '/beers/:id',
        component: Show,
    }
]

export default routes;