import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import {AgServiceService} from '../ag-service.service';

@Component({
  selector: 'app-checkbox-component',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements ICellRendererAngularComp {

  constructor(private ag: AgServiceService) {
  }

  public params: any = {
    rowIndex: '',
    node: {
      selected: false
    }
  };

  agInit(params: any): void {
    if (params) {
      this.params = params;
    }
  }

  refresh(): boolean {
    return false;
  }

  checked(rowId, selected): void {
    this.ag.checkRow(rowId, selected);
  }

}
