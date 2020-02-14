import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppSearchComponent } from './app-search.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { AppDetailComponent } from '../app-detail/app-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppSearchComponent', () => {
  let component: AppSearchComponent;
  let fixture: ComponentFixture<AppSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      declarations: [ AppSearchComponent, AppDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
