import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path:"info",component:InfoComponent},
  {path:"quiz", component:QuizComponent},
  {path:"search", component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
