import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcfunctsService {
  
  addOp(firstNo:string,secondNo:string){
    let num1 = Number(firstNo);
    let num2 = Number(secondNo);
    console.log(num1 + num2);
    return num1 + num2;
  }
  subOp(firstNo:string,secondNo:string){
    let num1 = Number(firstNo);
    let num2 = Number(secondNo);
    console.log(num1 - num2);
    return num1 - num2;
  }
  mulOp(firstNo:string,secondNo:string){
    let num1 = Number(firstNo);
    let num2 = Number(secondNo);
    console.log(num1 * num2);
    return num1 * num2;
  }
  divOp(firstNo:string,secondNo:string){
    let num1 = Number(firstNo);
    let num2 = Number(secondNo);
    console.log(num1 / num2);
    return num1 / num2;
  }
}
