import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './modules/components/nav/nav.component';
import { ProductsComponent } from './modules/views/products/products.component';
import { CardComponent } from './modules/components/card/card.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavComponent,
    CardComponent,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [provideHttpClient() ],
  bootstrap: [AppComponent],
})
export class AppModule {}
