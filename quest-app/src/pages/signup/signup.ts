import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Api } from '../../services/api'


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUp {
  public submitted: boolean;
  public form: FormGroup = new FormGroup({
    first: new FormControl('First'),
    last: new FormControl('Last')
  });

  constructor(private api: Api) {

  }

  save() {
    this.api.status.get('asdf');
  }

}
