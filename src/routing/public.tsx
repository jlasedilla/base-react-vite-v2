import { lazy, Suspense, useMemo } from 'react';
import { RouteType } from './router';

const Public = (props: RouteType): JSX.Element => {
    const { view, ...rest } = props;

    const View = useMemo(() => lazy(() => import(`containers/${view}`)), [view]);

    return (
        <Suspense fallback={<></>}>
            <View {...rest} />
        </Suspense>
    );
};

export default Public;
