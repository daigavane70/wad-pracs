AngularJS - 

npm install -g @angular/cli

ng new { test }

ng g c test_register

Now, go to test/src/app => app.component.html
app.component.html => <h1>Hello</h1>
                        <app-test-register></>

test-register.component.html =>

<form #test="ngForm" (ngSubmit)="onPressButton(test.value)">
    <input type="text" name="name" ngModel>
    <input type="text" name="rollno" ngModel>
    <input type="submit" value="submit">
</form>

IMPORT
app.module.ts =>
import { FormsModule } from '@angular/forms';
imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

test-register.component.ts =>

onPressButton(harshil:any){
    document.writeln(harshil.name);
    document.writeln(harshil.rollno);
  }

(harshil - object created by us)