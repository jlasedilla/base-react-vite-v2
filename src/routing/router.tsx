import { Route, RouteProps, Routes } from 'react-router-dom';

import routes from './routes';
import Private from './private';
import Public from './public';

export type RouteType = RouteProps & {
    view: string;
    authRequired?: boolean;
};

const Router = (): JSX.Element => {
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

export default Router;
