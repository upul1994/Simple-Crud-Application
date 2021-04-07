import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AddproductComponent} from "./components/addproduct/addproduct.component";
import {ProductlistComponent} from "./components/productlist/productlist.component";
import {EditComponent} from "./components/edit/edit.component";

const routes: Routes = [
  {path :'' ,component :HomeComponent},
  {path :'add' ,component :AddproductComponent},
  {path :'productList' ,component :ProductlistComponent},
  {path :'edit/:id' ,component :EditComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
