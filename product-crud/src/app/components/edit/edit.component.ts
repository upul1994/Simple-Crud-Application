import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../product.service";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor( private router :ActivatedRoute, private productService :ProductService) {
    this.router.paramMap.subscribe(params=>{
      this.id =params.get('id');
    });
  }

  msg =false;
  id :any;
  editProductsList:any;

  ngOnInit(): void {
    this.productService.showProduct(this.id).subscribe(result=>{
      this.editProductsList =result;
    })
  }

  editNewProduct(){
    this.productService.editProduct(this.editProductsList,this.id).subscribe(result=>{
      this.msg =true;
    })
  }




}
