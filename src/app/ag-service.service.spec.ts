import { TestBed, inject } from '@angular/core/testing';

import { AgServiceService } from './ag-service.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('AgServiceService', () => {
  let service: AgServiceService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgServiceService],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule
      ],
    });
    service = TestBed.get(AgServiceService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    service.getTableData().subscribe((data) => {
      console.log(data);
    });
  });
});
