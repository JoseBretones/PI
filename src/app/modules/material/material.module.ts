import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule

  ],
  exports: [
    MatFormFieldModule,
    MatTableModule,
    MatInputModule
  ]
})
export class MaterialModule { }
