import { createBrowserRouter, Route, RouteProps, RouterProvider, Routes } from 'react-router-dom';

import routes from './routes';
import Private from './private';
import Public from './public';

export type RouteType = RouteProps & {
    view: string;
    authRequired?: boolean;
};

// NOTE: Choose between AppRouterProvider or Router to do the routing
export const Router = (): JSX.Element => {
    return (
        <Routes>
            {routes.map((route: RouteType) => {
                if (route.authRequired) {
                    return <Route key={route.path} {...route} element={<Private {...route} />} />;
                }

                return <Route key={route.path} {...route} element={<Public {...route} />} />;
            })}
        </Routes>
    );
};

const router = createBrowserRouter(
    routes.map((route: RouteType) => ({
        path: route.path,
        element: route.authRequired ? <Private {...route} /> : <Public {...route} />,
    }))
);

export const AppRouterProvider = () => <RouterProvider router={router} />;
