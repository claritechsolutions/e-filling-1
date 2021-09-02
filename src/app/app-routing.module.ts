import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardModule } from './dash-board/dash-board.module';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./dash-board/dash-board.module').then(mod=>DashBoardModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
