import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  bookFlag:boolean=false;
  customerStatus:boolean=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addOrder(){
    if(this.bookFlag == false){
      this.bookFlag = true;
    }
  }

  addDetails(){
    if(this.customerStatus == false){
      this.customerStatus = true;
    }
  }

}
