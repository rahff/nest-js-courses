import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ICourse} from "../../../../shared/course";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import {EditCourseDialogComponent} from "../edit-course-dialog/edit-course-dialog.component";
import {defaultDialogConfig} from '../shared/default-dialog-config';
import {CoursesHttpService} from '../services/courses-http.service';

@Component({
    selector: 'courses-card-list',
    templateUrl: './courses-card-list.component.html',
    styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

    @Input()
    courses: ICourse[];

    @Output()
    courseChanged = new EventEmitter();

    constructor(
      private dialog: MatDialog,
      private coursesService: CoursesHttpService) {
    }

    ngOnInit() {

    }

    editCourse(ICourse:ICourse) {

        const dialogConfig = defaultDialogConfig();

        dialogConfig.data = {
          dialogTitle:"Edit ICourse",
          ICourse,
          mode: 'update'
        };

        this.dialog.open(EditCourseDialogComponent, dialogConfig)
          .afterClosed()
          .subscribe(() => this.courseChanged.emit());

    }

  onDeleteCourse(ICourse:ICourse) {
      this.coursesService.deleteCourse(ICourse._id)
        .subscribe(
          () => this.courseChanged.emit());
  }

}









