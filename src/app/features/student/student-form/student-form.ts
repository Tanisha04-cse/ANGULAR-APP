import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../../shared/components/table/table';
import { StudentService } from '../../../core/services/student';
import { Student } from '../../../shared/models/student';


@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,TableComponent],
  templateUrl: './student-form.html',
  styleUrls: ['./student-form.scss']
})
export class StudentFormComponent implements OnInit {

  studentForm!: FormGroup;
  isEditMode = false;

 constructor(
  private fb: FormBuilder,
  private studentService: StudentService
) {}

  ngOnInit(): void {
    this.initForm();
     this.loadStudents();
  }

loadStudents() {
  this.studentService.getStudents().subscribe(data => {
    this.students = data;
  });
}

  initForm() {
    this.studentForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required]
    });
  }

students: any[] = [];
currentId = 1;

  onSubmit() {
    if (this.studentForm.invalid) return;

     const data = this.studentForm.value;

    if (this.isEditMode) {
    this.studentService.updateStudent(data).subscribe(() => {
      this.loadStudents();
    });
  } else {
   this.studentService.addStudent(data).subscribe(() => {
      this.loadStudents();
    });
  }

    this.studentForm.reset();
     this.isEditMode = false;
  }

onEdit(student: Student) {
  this.isEditMode = true;
  this.studentForm.patchValue(student);
}

onDelete(id: number) {
  this.studentService.deleteStudent(id).subscribe(() => {
    this.loadStudents();
  });
}

  // For Edit
  setFormData(data: any) {
    this.isEditMode = true;
    this.studentForm.patchValue(data);
  }
}