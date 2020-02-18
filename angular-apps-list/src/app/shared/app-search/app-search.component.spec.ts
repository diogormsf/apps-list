import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppSearchComponent } from './app-search.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { AppDetailComponent } from '../app-detail/app-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from 'src/app/services/app.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('AppSearchComponent', () => {
  let injector: TestBed;
  let service: AppService;
  let httpMock: HttpTestingController;
  let serviceSpy;

  let component: AppSearchComponent;
  let fixture: ComponentFixture<AppSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
      ],
      declarations: [AppSearchComponent, AppDetailComponent],
      providers: [AppService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    service = injector.get(AppService);
    serviceSpy = spyOn(service, 'getApps');
    httpMock = injector.get(HttpTestingController);

    fixture = TestBed.createComponent(AppSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
