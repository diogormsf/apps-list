import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppDetailComponent } from './app-detail.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { App } from 'src/app/models/App';

describe('AppDetailComponent', () => {
  let component: AppDetailComponent;
  let fixture: ComponentFixture<AppDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        RouterTestingModule
      ],
      declarations: [ AppDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailComponent);
    component = fixture.componentInstance;
    component.app = new App();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
