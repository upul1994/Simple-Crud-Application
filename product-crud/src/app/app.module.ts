import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import  {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { EditComponent } from './components/edit/edit.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddproductComponent,
    ProductlistComponent,
    EditComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
