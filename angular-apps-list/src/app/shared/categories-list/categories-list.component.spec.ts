import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoriesListComponent } from './categories-list.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { MainAppComponent } from 'src/app/pages/main-app/main-app.component';
import { AppSearchComponent } from '../app-search/app-search.component';
import { FormsModule } from '@angular/forms';
import { AppDetailComponent } from '../app-detail/app-detail.component';
import { CategoryService } from 'src/app/services/category.service';

describe('CategoriesListComponent', () => {
  let injector: TestBed;
  let service: CategoryService;
  let httpMock: HttpTestingController;

  let component: CategoriesListComponent;
  let fixture: ComponentFixture<CategoriesListComponent>;
  let navigateSpy;

  let mockRouter;

  const routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainAppComponent },
    { path: 'main/:category', component: MainAppComponent },
  ];

  beforeEach(async(() => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };

    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        RouterTestingModule.withRoutes(routes),
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule
      ],
      declarations: [
        CategoriesListComponent,
        MainAppComponent,
        AppSearchComponent,
        AppDetailComponent
      ],
      providers: [CategoryService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    service = injector.get(CategoryService);
    httpMock = injector.get(HttpTestingController);

    fixture = TestBed.createComponent(CategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have All tag', () => {
    const allLink = fixture.debugElement.queryAll(By.css('a'))[0];

    expect(allLink.nativeElement.innerText).toContain('All');
  });

  it('should have same number of link as categories + 1', () => {
    const allLink = fixture.debugElement.queryAll(By.css('a'));

    service.getAllCategories().subscribe((res) => {
      expect(res.length + 1).toEqual(allLink.length);
    });

    const appRequest = httpMock.match('http://localhost:3001/getCategories');
    expect(appRequest[0].request.method).toBe('POST');
    appRequest[0].flush([]);
  });

});
