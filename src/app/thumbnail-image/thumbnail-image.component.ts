import {Component} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';

@Component({
  selector: 'app-thumbnail-image',
  templateUrl: './thumbnail-image.component.html',
  styleUrls: ['./thumbnail-image.component.css']
})
export class ThumbnailImageComponent implements ICellRendererAngularComp {

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
