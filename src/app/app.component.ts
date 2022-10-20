import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators, AbstractControl }
  from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  empForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });

  countryList: any[] = [];

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.countryList = [
      { id:0, name:"Select" },
      { id:1, name:"India"},
      { id:2, name:"US" },
      { id:3, name:"UK" }
    ]

    //set deafault values and add validatiors

    this.empForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.maxLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        salary: [null, [Validators.required]],
        country: [null, [Validators.required]]
      });
  }

  onSubmit() {
    //get values
    var data = this.empForm.getRawValue();
    console.log(data);
  }
}
