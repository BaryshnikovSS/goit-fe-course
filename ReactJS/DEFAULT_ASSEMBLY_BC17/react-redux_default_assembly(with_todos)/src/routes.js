import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        exact: true,
        component: About
    },
    {
        path: '/profile',
        exact: true,
        component: Profile
    }
];