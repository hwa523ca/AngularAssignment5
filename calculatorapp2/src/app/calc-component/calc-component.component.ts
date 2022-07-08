import { Component } from '@angular/core';
import { CalcfunctsService } from '../services/calcfuncts.service';

@Component({
  selector: 'app-calc-component',
  templateUrl: './calc-component.component.html',
  styleUrls: ['./calc-component.component.css']
})
export class CalcComponentComponent {
  public result:number = 0;
  calfs:any;

  constructor(calcfunct:CalcfunctsService){
    this.calfs = calcfunct;
    // function addMethod1(firstNo:string,secondNo:string) {
    //   this.resultA = calcfunct.addOp(firstNo,secondNo);
    // }
    // function subMethod1(firstNo:string,secondNo:string) {
    //   this.resultS = calcfunct.subOp(firstNo,secondNo);
    // }
    // function mulMethod1(firstNo:string,secondNo:string) {
    //   this.resultM = calcfunct.mulOp(firstNo,secondNo);
    // }
    // function divMethod1(firstNo:string,secondNo:string) {
    //   this.resultD = calcfunct.divOp(firstNo,secondNo);
    // }
  }

  addMethod(firstNo:string,secondNo:string){
    this.result = this.calfs.addOp(firstNo,secondNo);
  }
  subMethod(firstNo:string,secondNo:string){
    this.result = this.calfs.subOp(firstNo,secondNo);
  }
  mulMethod(firstNo:string,secondNo:string){
    this.result = this.calfs.mulOp(firstNo,secondNo);
  }
  divMethod(firstNo:string,secondNo:string){
    this.result = this.calfs.divOp(firstNo,secondNo);
  }
  
  // addOperation(firstNo:string,secondNo:string){
  //     let num1 = Number(firstNo);
  //     let num2 = Number(secondNo);
  //     console.log(num1 + num2);
  //     this.result = num1 + num2;
  // }
  // subOperation(firstNo:string,secondNo:string){
  //     let num1 = Number(firstNo);
  //     let num2 = Number(secondNo);
  //     console.log(num1 - num2);
  //     this.result = num1 - num2;
  // }
  // mulOperation(firstNo:string,secondNo:string){
  //     let num1 = Number(firstNo);
  //     let num2 = Number(secondNo);
  //     console.log(num1 * num2);
  //     this.result = num1 * num2;
  // }
  // divOperation(firstNo:string,secondNo:string){
  //     let num1 = Number(firstNo);
  //     let num2 = Number(secondNo);
  //     console.log(num1 / num2);
  //     this.result = num1 / num2;
  // }
}
