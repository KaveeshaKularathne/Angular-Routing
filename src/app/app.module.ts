import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    
    AppRoutingModule,RouterModule.forRoot([
      {path: 'crisis-list', component: CrisisListComponent},
      {path: 'heroes-list', component: HeroesListComponent},
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    
    HeroesListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }