import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppDetailComponent } from './shared/app-detail/app-detail.component';
import { MainAppComponent } from './pages/main-app/main-app.component';
import { CategoriesListComponent } from './shared/categories-list/categories-list.component';
import { AppSearchComponent } from './shared/app-search/app-search.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppDetailComponent,
    MainAppComponent,
    CategoriesListComponent,
    AppSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
