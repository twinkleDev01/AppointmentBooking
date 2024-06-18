import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PaginationService, pageSelection, tablePageSize } from 'src/app/shared/custom-pagination/pagination.service';
import { DataService } from 'src/app/shared/data/data.service';
import { apiResultFormat, patientProfile,  } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent {
  public routes = routes;
  public tableData: Array<patientProfile> = [];
  public tableData2: Array<patientProfile> = [];
  public tableData3: Array<patientProfile> = [];
  public tableData4: Array<patientProfile> = [];
 
  
  // pagination variables
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<patientProfile>;
  
  public searchDataValue = '';
  
  // pagination variables end

  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private router: Router
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.patientProfile) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.patientProfile) {
        this.getTableData2({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.patientProfile) {
        this.getTableData3({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.patientProfile) {
        this.getTableData4({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
    private getTableData(pageOption: pageSelection): void {
      this.data.getpatientProfile1().subscribe((apiRes: apiResultFormat) => {
        this.tableData = [];
        this.serialNumberArray = [];
        this.totalData = apiRes.totalData;
        apiRes.data.map((res: patientProfile, index: number) => {
          const serialNumber = index + 1;
          if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
            res.id = serialNumber;
            this.tableData.push(res);
            this.serialNumberArray.push(serialNumber);
          }
        });
        this.dataSource = new MatTableDataSource<patientProfile>(this.tableData);
        this.pagination.calculatePageSize.next({
          totalData: this.totalData,
          pageSize: this.pageSize,
          tableData: this.tableData,
          serialNumberArray: this.serialNumberArray,
          tableData2: this.tableData,
          tableData3: [],
          tableData4: []
        });
      });
    }
    private getTableData2(pageOption: pageSelection): void {
      this.data.getpatientProfile2().subscribe((apiRes: apiResultFormat) => {
        this.tableData2 = [];
        this.serialNumberArray = [];
        this.totalData = apiRes.totalData;
        apiRes.data.map((res: patientProfile, index: number) => {
          const serialNumber = index + 1;
          if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
            res.id = serialNumber;
            this.tableData2.push(res);
            this.serialNumberArray.push(serialNumber);
          }
        });
       
        this.pagination.calculatePageSize.next({
          totalData: this.totalData,
          pageSize: this.pageSize,
          tableData2: this.tableData2,
          serialNumberArray: this.serialNumberArray,
          tableData: this.tableData,
          tableData3: [],
          tableData4: []
        });
      });
    }
    private getTableData3(pageOption: pageSelection): void {
      this.data.getpatientProfile3().subscribe((apiRes: apiResultFormat) => {
        this.tableData3 = [];
        this.serialNumberArray = [];
        this.totalData = apiRes.totalData;
        apiRes.data.map((res: patientProfile, index: number) => {
          const serialNumber = index + 1;
          if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
            res.id = serialNumber;
            this.tableData3.push(res);
            this.serialNumberArray.push(serialNumber);
          }
        });
       
        this.pagination.calculatePageSize.next({
          totalData: this.totalData,
          pageSize: this.pageSize,
          tableData2: this.tableData2,
          serialNumberArray: this.serialNumberArray,
          tableData: this.tableData,
          tableData3: [],
          tableData4: []
        });
      });
    }
    private getTableData4(pageOption: pageSelection): void {
      this.data.getpatientProfile4().subscribe((apiRes: apiResultFormat) => {
        this.tableData4 = [];
        this.serialNumberArray = [];
        this.totalData = apiRes.totalData;
        apiRes.data.map((res: patientProfile, index: number) => {
          const serialNumber = index + 1;
          if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
            res.id = serialNumber;
            this.tableData4.push(res);
            this.serialNumberArray.push(serialNumber);
          }
        });
       
        this.pagination.calculatePageSize.next({
          totalData: this.totalData,
          pageSize: this.pageSize,
          tableData2: this.tableData2,
          serialNumberArray: this.serialNumberArray,
          tableData: this.tableData,
          tableData3: [],
          tableData4: []
        });
      });
    }
   


    public sortData(sort: Sort) {
      const data = this.tableData.slice();
  
      if (!sort.active || sort.direction === '') {
        this.tableData = data;
      } else {
        this.tableData = data.sort((a, b) => {
          const aValue = (a as never)[sort.active];
          const bValue = (b as never)[sort.active];
          return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
        });
      }
    }
    public sortData2(sort: Sort) {
      const data = this.tableData2.slice();
    
      if (!sort.active || sort.direction === '') {
        this.tableData2 = data;
      } else {
        this.tableData2 = data.sort((a, b) => {
          const aValue = (a as never)[sort.active];
          const bValue = (b as never)[sort.active];
          return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
        });
      }
    }
    public sortData3(sort: Sort) {
      const data = this.tableData2.slice();
    
      if (!sort.active || sort.direction === '') {
        this.tableData2 = data;
      } else {
        this.tableData2 = data.sort((a, b) => {
          const aValue = (a as never)[sort.active];
          const bValue = (b as never)[sort.active];
          return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
        });
      }
    }
    public sortData4(sort: Sort) {
      const data = this.tableData2.slice();
    
      if (!sort.active || sort.direction === '') {
        this.tableData2 = data;
      } else {
        this.tableData2 = data.sort((a, b) => {
          const aValue = (a as never)[sort.active];
          const bValue = (b as never)[sort.active];
          return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
        });
      }
    }
  

}
