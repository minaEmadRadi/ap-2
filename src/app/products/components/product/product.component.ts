import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data!: Product;
  @Output() item = new EventEmitter();
  addBtn: boolean = false;
  amount: Number = 1;
  constructor() { }

  ngOnInit(): void {
  }
  add() {
    //  product.amount =this.amountSelected ;
    this.item.emit({ item: this.data, quantity: this.amount });
  }

}
