import { Routes } from '@angular/router';

// top level component
import { GamesComponent } from './games.component';

// sub components
import { ListComponent } from './list/list.component';

export const GamesRoutes:Routes = [{
  path: 'api',
  component: GamesComponent,
  children: [
    {path: 'games', component: ListComponent}
  ]
}];
