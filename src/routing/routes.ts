type RoutesType = (
    | {
          path: string;
          view: string;
          authRequired?: undefined;
      }
    | {
          path: string;
          view: string;
          authRequired: boolean;
      }
)[];

const routes: RoutesType = [];

export default routes;
