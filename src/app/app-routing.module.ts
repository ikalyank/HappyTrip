import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Search/landing-page/landing-page.component';
import { MainLandingComponent } from './Search/main-landing/main-landing.component';
import { ViewflightsComponent } from './Search/viewflights/viewflights.component';

const routes: Routes = [
  {
    path:"mainLandingPage",
    component:LandingPageComponent
  },
  {
  path:"flightResults",
  component:ViewflightsComponent
},
{
  path:"",component:MainLandingComponent,pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
