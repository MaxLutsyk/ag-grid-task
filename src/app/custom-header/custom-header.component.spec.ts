import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeaderComponent } from './custom-header.component';
import {HttpClientModule} from '@angular/common/http';
import {AgServiceService} from '../ag-service.service';

describe('CustomHeaderComponent', () => {
  let component: CustomHeaderComponent;
  let fixture: ComponentFixture<CustomHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomHeaderComponent],
      providers: [AgServiceService],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
