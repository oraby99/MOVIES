import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { TvComponent } from './tv/tv.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
[
  {path:''   ,redirectTo:'home' ,pathMatch:'full'},
  {path:'home'   ,component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'contacts'   ,component:ContactsComponent},
  {path:'tv' , component:TvComponent},
  {path:'people'   ,component:PeopleComponent},
  {path:'moviedetail/:id'   ,component:MoviedetailComponent},
  {path:'movies' , component:MoviesComponent},
  {path:'reviews' ,
  // loadChildren:'./reviews/reviews.module#ReviewsModule'},
  loadChildren: () => import('./reviews/reviews.module').then(x => x.ReviewsModule)
  },
  {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
