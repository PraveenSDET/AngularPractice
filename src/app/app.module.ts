import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookcategoriesComponent } from './bookcategories/bookcategories.component';
import { HistoricalbooksComponent } from './historicalbooks/historicalbooks.component';
import { FictionalbooksComponent } from './fictionalbooks/fictionalbooks.component';
import { ClassicbooksComponent } from './classicbooks/classicbooks.component';
import { PhilosophybooksComponent } from './philosophybooks/philosophybooks.component';
import { KidsbooksComponent } from './kidsbooks/kidsbooks.component';
import { HttpClientModule } from '@angular/common/http';
import { BookdetailsComponent } from './bookdetails/bookdetails.component'
import { ClassicbooksService } from './classicbooks.service';
import { FictionbooksService } from './fictionbooks.service';
import { HistorybooksService } from './historybooks.service';
import { KidsbooksService } from './kidsbooks.service';
import { PhilosophybooksService } from './philosophybooks.service';

@NgModule({
  declarations: [
    AppComponent,
    BookcategoriesComponent,
    HistoricalbooksComponent,
    FictionalbooksComponent,
    ClassicbooksComponent,
    PhilosophybooksComponent,
    KidsbooksComponent,
    BookdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ClassicbooksService, 
    FictionbooksService, 
    HistorybooksService, 
    KidsbooksService, 
    PhilosophybooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
