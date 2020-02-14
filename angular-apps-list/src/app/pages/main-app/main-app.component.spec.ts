import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MainAppComponent } from './main-app.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { CategoriesListComponent } from 'src/app/shared/categories-list/categories-list.component';
import { AppSearchComponent } from 'src/app/shared/app-search/app-search.component';
import { FormsModule } from '@angular/forms';
import { AppDetailComponent } from 'src/app/shared/app-detail/app-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MainAppComponent', () => {
  let component: MainAppComponent;
  let fixture: ComponentFixture<MainAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        AppMaterialModule,
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
      ],
      declarations: [
        MainAppComponent,
        CategoriesListComponent,
        AppSearchComponent,
        AppDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
