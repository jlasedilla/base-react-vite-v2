import { lazy, Suspense, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '~/services/utilities/navigation';

import { RouteType } from './router';

const Private = (props: RouteType): JSX.Element => {
    const { view, ...rest } = props;
    const login = true;
    const View = useMemo(() => lazy(() => import(`containers/${view}`)), [view]);

    if (!login) return <Navigate to={ROUTES.ERROR} />;
    return (
        <Suspense fallback={<></>}>
            <View {...rest} />
        </Suspense>
    );
};

export default Private;
