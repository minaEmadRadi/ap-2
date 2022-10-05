import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() title: string = "";
  @Output() selectedValue = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  detectChanges(event: any) {
    this.selectedValue.emit(event)

  }

}
