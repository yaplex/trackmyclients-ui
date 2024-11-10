import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new-lead',
  standalone: true,
  imports: [RouterLink, MatFormField, MatLabel, MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule,
    ReactiveFormsModule, MatIcon, MatIconModule, MatButtonModule],
  templateUrl: './create-new-lead.component.html',
  styleUrl: './create-new-lead.component.scss'
})
export class CreateNewLeadComponent {
  newLeadForm: FormGroup = new FormGroup('');

  
  constructor(private fb: FormBuilder){
    this.newLeadForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['' ],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [ Validators.pattern('^[- +()0-9]+$')]],
      companyName: [''],
      description: [''],
    });
  }

  onSubmit() {
    if (this.newLeadForm.valid) {
      console.log('Valid form', this.newLeadForm.value);
    }
    else{
      console.log('Invalid form', this.newLeadForm.value);
    }
  }

}
