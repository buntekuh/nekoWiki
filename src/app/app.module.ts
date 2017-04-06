import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { Routes, RouterModule } from "@angular/router";
import { DomainsComponent } from './domains/domains.component';
import { PageComponent } from './page/page.component';
import { AngularFireModule} from 'angularfire2';
import { Conf } from './conf';

const appRoutes: Routes = [
  { path: 'domains', component: DomainsComponent },
  { path: '', component: PageComponent }
]

export const firebaseConfig = Conf.firebase;

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DomainsComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
