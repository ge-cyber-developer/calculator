import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-calculator-template',
  templateUrl: './calculator-template.component.html',
  styleUrls: ['./calculator-template.component.css']
})
export class CalculatorTemplateComponent{

  num1: number = 0;
  num2: number = 0;
  result: number = 0;


  sum( )
  {
    let sum = (+this.num1 + +this.num2);
    this.result = sum;
  }

  subtraction()
  {
    let subtraction = (+this.num1 - +this.num2);
    this.result = subtraction;
  }

  times()
  {
    let times = (+this.num1 * +this.num2);
    this.result = times;
  }

  division()
  {
    let division = (+this.num1 /  +this.num2);
    this.result = division;
  }
}

