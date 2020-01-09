import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  number = '';

  constructor() { }

  ngOnInit() {
  }
  select(entered){
     this.number += entered
  }
  equate(){
        let total = this.number
        return this.number = eval(total)
  }
  clear(){
    this.number = ''
  }
}
