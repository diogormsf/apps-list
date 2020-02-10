import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatInputModule,
          MatButtonModule,
          MatSidenavModule,
          MatFormFieldModule,
          MatIconModule,
          MatCardModule,
          MatPaginatorModule,
          MatListModule
        } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatListModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatListModule
  ]
})
export class AppMaterialModule { }
