import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoriesListComponent } from './categories-list.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { MainAppComponent } from 'src/app/pages/main-app/main-app.component';
import { AppSearchComponent } from '../app-search/app-search.component';
import { FormsModule } from '@angular/forms';
import { AppDetailComponent } from '../app-detail/app-detail.component';

describe('CategoriesListComponent', () => {
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
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

/*   it('should navigate to All', () => {
    const allLink = fixture.debugElement.queryAll(By.css('a'))[0];
    console.log(allLink.nativeElement);
    allLink.nativeElement.click();

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/main']);
    });
  }); */

});
