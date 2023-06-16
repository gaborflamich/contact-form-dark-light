import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IForm } from 'src/app/definitions/form.definitions';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @Input() data?: IForm[];
  contactForm!: FormGroup;
  firstname: any;

  firstnamefocus = false;
  lastnamefocus = false;
  emailfocus = false;
  messagefocus = false;

  firstnamechars = '';
  lastnamechars = '';
  emailchars = '';
  messagechars = '';

  submitted = false;

  firstNamefocus() {
    this.firstnamefocus = true;
  }
  lastNamefocus() {
    this.lastnamefocus = true;
  }
  emailFocus() {
    this.emailfocus = true;
  }
  messageFocus() {
    this.messagefocus = true;
  }

  firstNameBlurred() {
    this.firstnamefocus = false;
  }
  lastNameBlurred() {
    this.lastnamefocus = false;
  }
  emailBlurred() {
    this.emailfocus = false;
  }
  messageBlurred() {
    this.messagefocus = false;
  }

  formData = {
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  };

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [Validators.required]),
    });
    console.log(this.firstnamechars.length);
  }

  public onValueChange(event: Event): void {
    console.log(event.target);
    const value = (event.target as any).value;
    this.messagechars = value;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.contactForm);
  }
}
