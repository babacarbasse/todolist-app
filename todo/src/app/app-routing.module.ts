import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    component: TodoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
