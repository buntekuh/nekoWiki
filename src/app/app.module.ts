import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from './admin/admin.component';
import { PageComponent } from './page/page.component';

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', component: PageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdminComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
