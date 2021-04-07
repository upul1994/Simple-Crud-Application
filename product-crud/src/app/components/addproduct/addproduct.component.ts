import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private productService :ProductService) { }

 msg =false;

  ngOnInit(): void {
  }

  addNew(addproduct:NgForm){
    const product ={
      id :addproduct.value.pid,
      productName:addproduct.value.pname,
      price :addproduct.value.price

    }
    this.productService.addProduct(product).subscribe(result=>{
      this.msg =true;
    },error => {
      console.log(error)
    })
  }

}
