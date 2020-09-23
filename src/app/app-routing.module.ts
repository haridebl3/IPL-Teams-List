import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamDetailsComponent } from './Components/team-details/team-details.component';

const routes: Routes = [

{path: 'teamkxip' , component: TeamDetailsComponent},
{path: 'teamcsk' , component: TeamDetailsComponent}

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
