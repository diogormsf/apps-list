import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [],
      providers: [CategoryService]
    });

    service = TestBed.get(CategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
