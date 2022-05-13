import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-register',
  templateUrl: './test-register.component.html',
  styleUrls: ['./test-register.component.css']
})
export class TestRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  onPressButton(harshil:any){
    document.writeln(harshil.name);
    document.writeln(harshil.rollno);
  }

}
