import {Component} from '@angular/core';
import {AgServiceService} from '../ag-service.service';
import {Column, GridOptions} from 'ag-grid-community';
import {ThumbnailImageComponent} from '../thumbnail-image/thumbnail-image.component';
import {DateColumnComponent} from '../date-column/date-column.component';
import {TitleColumnComponent} from '../title-column/title-column.component';
import {CheckboxComponent} from '../checkbox-component/checkbox.component';
import {CustomHeaderComponent} from '../custom-header/custom-header.component';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-ag-component',
  templateUrl: './ag.component.html',
  styleUrls: ['./ag.component.css']
})
export class AgComponent {
  public gridOptions: GridOptions;
  private initialRowDataLoad$;
  public rowSelection;
  public suppressRowClickSelection;
  public frameworkComponents;
  public defaultColDef;
  public showCheckboxes = false;
  public totalRows: any;
  public selectedRows = 0;

  constructor(private ag: AgServiceService) {
    this.ag.selectAllStatus$.subscribe((status) => {
      if (status) {
        this.gridOptions.api.selectAll();
      } else {
        this.gridOptions.api.deselectAll();
      }
    });
    this.ag.checkRowStatus$.subscribe((data: any) => {
      if (data.checked) {
        const node = this.gridOptions.api.getRowNode(data.id + '');
        node.setSelected(false);
      } else {
        const node = this.gridOptions.api.getRowNode(data.id + '');
        node.setSelected(true);
      }
    });
    this.rowSelection = 'multiple';
    this.suppressRowClickSelection = 'true';
    this.initialRowDataLoad$ = ag.getTableData();
    this.frameworkComponents = {
      thumbNailComponent: ThumbnailImageComponent,
      dateColumnComponent: DateColumnComponent,
      titleColumnComponent: TitleColumnComponent,
      checkboxComponent: CheckboxComponent,
      headerComponent: CustomHeaderComponent
    };
    this.gridOptions = <GridOptions> {
      rowHeight: 100,
      columnDefs: [
        {headerName: '', field: 'snippet.thumbnails.default.url', cellRenderer: 'thumbNailComponent'},
        {headerName: 'Published on', field: 'snippet.publishedAt', cellRenderer: 'dateColumnComponent'},
        {headerName: 'Video Title', field: 'snippet.title', cellRenderer: 'titleColumnComponent'},
        {headerName: 'Description', field: 'snippet.description'}
      ],
      onGridReady: () => {
        this.initialRowDataLoad$.subscribe(
          rowData => {
            if (this.gridOptions.api) {
              this.gridOptions.api.setRowData(rowData.items);
              this.totalRows = this.gridOptions.api.getDisplayedRowCount();
            }
          }
        );
      },
      onFirstDataRendered(params) {
        params.api.sizeColumnsToFit();
      }
    };
  }

  getContextMenuItems(params: any): any {
    let result = [];
    if (params.column.colDef.headerName === 'Video Title') {
      result = [
        {
          name: 'Open in new tab',
          action: function (): void {
            window.open('https://www.youtube.com/watch?v=' + params.node.data.id.videoId, '_blank');
          }
        },
        'copy',
        'paste',
        'copyWithHeaders',
      ];
    }
    return result;
  }

  showCheckboxesFunc(): any {
    this.showCheckboxes = !this.showCheckboxes;
    if (this.showCheckboxes) {
      this.gridOptions.columnDefs.unshift({
        headerName: 'checkbox',
        valueGetter: 'true',
        cellRenderer: 'checkboxComponent',
        headerComponent: 'headerComponent'
      });
    } else {
      this.gridOptions.columnDefs.splice(0, 1);
    }
    this.gridOptions.api.setColumnDefs(this.gridOptions.columnDefs);
  }

  onSelectionChanged() {
    this.selectedRows = this.gridOptions.api.getSelectedRows().length;
    this.ag.checkIfAllSelected(this.totalRows, this.selectedRows);
  }
}
