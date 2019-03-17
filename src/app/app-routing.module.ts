import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from './start-page/start-page.component';
import { GithubPagesDeployComponent } from './github-pages-deploy/github-pages-deploy.component';

export const routes: Routes = [ 
  { path: '', redirectTo: '/start', pathMatch: 'full' }, 
  { path: 'start', component: StartPageComponent },
  { path: 'gh-pages-deploy', component: GithubPagesDeployComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
