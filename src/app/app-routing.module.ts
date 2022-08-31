import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/components/main/main.component';
import { TemtemRouteComponent } from './modules/temtem/components/temtem-route/temtem-route.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'temtem', component: TemtemRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
