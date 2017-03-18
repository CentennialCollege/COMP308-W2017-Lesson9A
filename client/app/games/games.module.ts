import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// top level components we want to include
import { GamesRoutes } from './games.routes';
import { GamesComponent } from './games.component';

// sub components
import { ListComponent } from './list/list.component';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    RouterModule.forChild(GamesRoutes)
  ],
  declarations: [
    GamesComponent,
    ListComponent
  ]
})
export class GamesModule {}
