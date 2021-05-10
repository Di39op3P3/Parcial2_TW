import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombateComponent } from './components/combate/combate.component';
import { RankingComponent } from './components/ranking/ranking.component';

const routes: Routes = [
  { path: 'combate/:numOponent', component: CombateComponent },
  { path: 'ranking/:estado', component: RankingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
