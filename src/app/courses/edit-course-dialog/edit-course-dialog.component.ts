import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ICourse} from '../../../../shared/course';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {CoursesHttpService} from '../services/courses-http.service';

@Component({
  selector: 'course-dialog',
  templateUrl: './edit-course-dialog.component.html',
  styleUrls: ['./edit-course-dialog.component.css']
})
export class EditCourseDialogComponent {

  form: FormGroup;

  dialogTitle: string;

  ICourse: ICourse;

  mode: 'create' | 'update';

  loading$:Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private coursesService: CoursesHttpService) {

    this.dialogTitle = data.dialogTitle;
    this.ICourse = data.ICourse;
    this.mode = data.mode;

    const formControls = {
      description: ['', Validators.required],
      category: ['', Validators.required],
      longDescription: ['', Validators.required],
      promo: [false, []]
    };

    if (this.mode == 'update') {
      this.form = this.fb.group(formControls);
      this.form.patchValue({...data.ICourse});
    }
    else if (this.mode == 'create') {
      this.form = this.fb.group({
        ...formControls,
        url: ['', Validators.required],
        iconUrl: ['', Validators.required]
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {

    const changes: Partial<ICourse> = {
      ...this.form.value
    };

    if (this.mode == 'update') {
      this.coursesService.updateCourse(this.ICourse._id, changes)
        .subscribe(
          ICourse => this.dialogRef.close(ICourse)
        )
    }
    else if (this.mode == "create") {
      this.coursesService.createCourse(changes)
        .subscribe(
          ICourse => this.dialogRef.close(ICourse)
        )

    }



  }


}
