import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let injector: TestBed;
  let service: CategoryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [],
      providers: [CategoryService]
    });

    injector = getTestBed();
    service = injector.get(CategoryService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getApps() should return data', () => {
    service.getAllCategories().subscribe((res) => {
      expect(res.length).toBeGreaterThan(0);
    });

    const appRequest = httpMock.expectOne('http://localhost:3001/getCategories');
    expect(appRequest.request.method).toBe('POST');
    appRequest.flush([]);

  });
});
