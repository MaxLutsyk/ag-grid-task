import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RequestUrls} from './requestUrls';
import {Observable, Subject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AgServiceService {
  public selectAllStatus = new Subject();
  public checkRowStatus = new Subject();
  public ifAllSelected = new Subject();
  public selectAllStatus$ = this.selectAllStatus.asObservable();
  public checkRowStatus$ = this.checkRowStatus.asObservable();
  public ifAllSelected$ = this.ifAllSelected.asObservable();
  constructor(private http: HttpClient) {
  }

  getTableData(): Observable<any> {
    return this.http.get(RequestUrls.getData);
  }

  selectAll(): void {
    this.selectAllStatus.next(true);
  }
  unSelectAll(): void {
    this.selectAllStatus.next(false);
  }
  checkRow(rowId, selected): void {
    this.checkRowStatus.next({id: rowId, checked: selected});
  }
  checkIfAllSelected(total, selected): void {
    if (selected < total) {
      this.ifAllSelected.next(false);
    } else {
      this.ifAllSelected.next(true);
    }
  }

}
