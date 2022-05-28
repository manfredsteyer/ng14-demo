import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
})
export class FlightEditComponent implements OnInit {
  
  id: string | undefined;
  showDetails: string | undefined;
  showWarning = false;

  formGroup = this.fb.nonNullable.group({
    id: [0],
    from: ['Graz'],
    to: ['Hamburg'],
    date: ['']
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute) {

      // Experiment 1
      const formControl1 = new FormControl('');
      // formControl.reset();
      const value1 = formControl1.value; // string | null

      // Experiment 2
      const formControl2 = new FormControl('Hugo', { nonNullable: true });
      formControl2.reset();
      const value2 = formControl2.value; // string
      console.log('value2', value2);

      // Experiment 3
      const value3 = this.formGroup.value; // Partial<{id: number, from: string, to: string, date: string}>
      
      // Legacy: UntypedFormArray, UntypedFormGroup, UntypedFormControl

  }

  ngOnInit() {
    this.route.params.subscribe((p) => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }

}
