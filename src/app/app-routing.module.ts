import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookcategoriesComponent } from './bookcategories/bookcategories.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { ClassicbooksComponent } from './classicbooks/classicbooks.component';
import { FictionalbooksComponent } from './fictionalbooks/fictionalbooks.component';
import { HistoricalbooksComponent } from './historicalbooks/historicalbooks.component';
import { KidsbooksComponent } from './kidsbooks/kidsbooks.component';
import { PhilosophybooksComponent } from './philosophybooks/philosophybooks.component';

const routes: Routes = [
  { path: 'categories/history', component: HistoricalbooksComponent},
  { path: 'categories/fiction', component: FictionalbooksComponent},
  { path: 'categories/classics', component: ClassicbooksComponent},
  { path: 'categories/philosophy', component: PhilosophybooksComponent},
  { path: 'categories/kids', component: KidsbooksComponent},
  { path: 'history/:id', component: BookdetailsComponent},
  { path: 'fiction/:id', component: BookdetailsComponent},
  { path: 'classics/:id', component: BookdetailsComponent},
  { path: 'philosophy/:id', component: BookdetailsComponent},
  { path: 'kids/:id', component: BookdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
