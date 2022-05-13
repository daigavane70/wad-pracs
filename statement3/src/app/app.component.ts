import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'statement3';
  // input from the form
  input1: string
  input2: string

 

  // matrices
  matrix1: any
  matrix2: any
  matrix3: any

  // whether to display matrix or not
  displayMatrices:boolean

  constructor() {
    this.input1 = "";      
    this.input2 = "";
    
    this.matrix1 = [];
    this.matrix2 = [];
    this.matrix3 = [];

    this.displayMatrices = false;
  }

  onSubmit(f:NgForm) {
      this.input1 = f.value.inp1; 
      this.input2 = f.value.inp2;

      let row1 = Number(this.input1.split("#")[0])
      let col1 = Number(this.input1.split("#")[1])
      let row2 = Number(this.input2.split("#")[0])
      let col2 = Number(this.input2.split("#")[1])
      let start1 = Number(this.input1.split("#")[2])
      let start2 = Number(this.input2.split("#")[2])
      // logic part
      if(row1 == row2 && col1 == col2) {
        this.displayMatrices = true
        this.matrix1 = this.generate_matrix(this.input1);       
        this.matrix2 = this.generate_matrix(this.input2);
        if(start1 == start2) {
          //generate the matrix
          this.matrix3 = this.generate_matrix(this.input1);
        }else {
          // multiply the value
          this.matrix3 = this.multiply_matrix(this.input1);
        }       
      } else {
          this.displayMatrices = false;
          this.matrix1 = []
          this.matrix2 = []
          this.matrix3 = []
      }     
  }

  generate_matrix(input:any) {   
    let token1 = input.split("#")
    let r = Number(token1[0])
    let c = Number(token1[1]);

    let ans = []
    let start = Number(token1[2]);
    let temp:any = []
    for(let i = 1; i <= c; ++i) {
      temp.push(start);
      ++start;
    }
    ans.push(temp);
    for(let i = 2; i <= r; ++i) {
      temp = []
      for(let j = 0; j < c; ++j) {
        temp.push(ans[0][j] * i);
      }
      ans.push(temp)
    }
    return ans;    
  }

  // element wise multiplication
  multiply_matrix(input: any) {
    let token1 = input.split("#")
    let r = Number(token1[0])
    let c = Number(token1[1]);
    let temp:any = []
    let ans:any = []
    for(let i = 0; i < r; ++i) {
      temp = []
      for(let j = 0; j < c; ++j) {
        temp.push(this.matrix1[i][j] * this.matrix2[i][j]); 
      }
      ans.push(temp)
    }
    return ans
  }
}
