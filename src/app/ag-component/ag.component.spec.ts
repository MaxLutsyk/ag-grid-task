import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MockComponent} from 'ng2-mock-component';
import {AgServiceService} from '../ag-service.service';

import {AgComponent} from './ag.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('AgComponent', () => {
  let component: AgComponent;
  let fixture: ComponentFixture<AgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgComponent,
        MockComponent({
          selector: 'ag-grid-angular',
          inputs: ['gridOptions', 'enableSorting', 'frameworkComponents', 'suppressMovableColumns', 'rowSelection',
            'suppressRowClickSelection', 'getContextMenuItems']
        }),
      ],
      providers: [AgServiceService],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
