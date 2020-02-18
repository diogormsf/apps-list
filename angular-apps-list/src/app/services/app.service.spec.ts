import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let injector: TestBed;
  let service: AppService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [],
      providers: [AppService]
    });

    injector = getTestBed();
    service = injector.get(AppService);
    httpMock = injector.get(HttpTestingController);
  });

  const fakeApp = {
    id: '',
    name: '',
    description: '',
    categories: [],
    subscriptions: []
  };

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getApps() should return data', () => {
    service.getApps().subscribe((res) => {
      expect(res.length).toBeGreaterThan(0);
    });

    const appRequest = httpMock.expectOne('http://localhost:3001/getApps');
    expect(appRequest.request.method).toBe('POST');
    appRequest.flush(fakeApp);

  });

  it('app must have correct structure', () => {
    service.getApps().subscribe((res) => {
      expect(Object.keys(res[0]).sort()).toEqual(Object.keys(fakeApp).sort());
    });

    const appRequest = httpMock.expectOne('http://localhost:3001/getApps');
    expect(appRequest.request.method).toBe('POST');
    appRequest.flush(fakeApp);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
