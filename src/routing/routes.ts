type RoutesType = (
    | {
          path: any;
          view: string;
          authRequired?: undefined;
      }
    | {
          path: any;
          view: string;
          authRequired: boolean;
      }
)[];

const routes: RoutesType = [];

export default routes;
