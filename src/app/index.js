import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing} from './routes';

import {AppComponent} from './components/app.component';
import {HeaderComponent} from './components/header.component';
import {FooterComponent} from './components/footer.component';

import {HomeComponent} from './components/home.component';
import {SidebarComponent} from './components/sidebar.component';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() {
    console.log(123456);
  }
}
