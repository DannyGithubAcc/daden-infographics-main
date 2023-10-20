import { Route } from '@angular/router';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

export const APPROUTE: Route[] = [{
  path: "", component: MainNavigationComponent,
  loadChildren: () => import("./main-navigation/main-navigation-route").then((navRoutes) => navRoutes.default),
}];
