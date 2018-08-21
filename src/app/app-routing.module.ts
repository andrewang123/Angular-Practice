// ng generate module app-module --flat --module=app
// --flat puts the file in src/app instead of its own folder.
// --module=app tells the CLI to register it in the imports array of the AppModule.
// THEN NEED TO SPECIFY THE ROUTE IN THE HTML FILE
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostDetailsComponent } from './components/post-details/post-details.component'

// Getting ready 
// 0. import the app-routing module in the app.module
// 1.import router module and routes from @angular/router
// 2.create a variable for the rotues and make it of type Routes
// 3. in the NgModule make a exports: [RouterModule] to make it visible everywhere in main app
// 4. in the imports put RouterModule.forRoot(routes) to take in the router module and specify routes
// 5. Add router-outlet tag to the main html page

// Making custom Routes:
// 1.Import the componenets
// 2. add the components to the routes variable and specify the route to the componenet
// 3. Profit

// Redirect using links
// 1. put this in the html tag      routerLink="/users"
const routes: Routes = [ // when path is empty that is the home page
  {path : '', component: HomeComponent},
  {path : 'users', component: UsersComponent},
  {path : 'posts', component: PostsComponent},
  {path : 'posts/:id', component: PostDetailsComponent},
  {path : '**', component: NotFoundComponent}

];


@NgModule({
  exports: [RouterModule], // Make it visible everywhere in the main app
  imports: [ // take in router module, specifically the variable we made
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
