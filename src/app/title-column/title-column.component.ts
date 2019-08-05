import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-title-column',
  templateUrl: './title-column.component.html',
  styleUrls: ['./title-column.component.css']
})
export class TitleColumnComponent implements ICellRendererAngularComp {

  constructor() {
  }

  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

}
