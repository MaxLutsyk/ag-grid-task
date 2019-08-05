import {Component} from '@angular/core';
import {ILoadingOverlayAngularComp} from 'ag-grid-angular';
import {AgServiceService} from '../ag-service.service';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent implements ILoadingOverlayAngularComp {
  public params;
  public isAllSelected: boolean;

  constructor(private ag: AgServiceService) {
    this.ag.ifAllSelected$.subscribe((status: boolean) => this.isAllSelected = status);
  }

  selectAll(): void {
    if (this.isAllSelected) {
      this.ag.unSelectAll();
    } else {
      this.ag.selectAll();
    }
    this.isAllSelected = !this.isAllSelected;
  }

  agInit(params): void {
    this.params = params;
  }

}
