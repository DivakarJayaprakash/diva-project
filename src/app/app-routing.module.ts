import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './feature/component/users/users.component';
import { WinnersComponent } from './feature/component/winners/winners.component';
import { ToppersComponent } from './feature/component/toppers/toppers.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'winners', component:WinnersComponent },
  { path: 'toppers', component: ToppersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
