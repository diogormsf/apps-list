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

/**
 * Module containing all Angular Material imports to maintain
 * the app.module as simple as possible
 *
 * @export AppMaterialModule class
 * @class AppMaterialModule
 */
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
