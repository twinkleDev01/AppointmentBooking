/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/shared/Service/patients.service';
import { PaginationService, pageSelection, tablePageSize } from 'src/app/shared/custom-pagination/pagination.service';
import { DataService } from 'src/app/shared/data/data.service';
import { apiResultFormat, medicalrecords } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
import { Prescription } from './prescription.modal';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.scss']
})
export class MedicalRecordsComponent {
  public routes = routes;
  public tableData: Array<medicalrecords> = [];
  public tableData2: Array<medicalrecords> = [];
  searchTerm: string = '';
  // pagination variables
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<medicalrecords>;
   baseUrlPdf: string = 'https://bookingapi.asptask.in/'
  public searchDataValue = '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Prescriptions=[]
  // pagination variables end
  filteredPrescriptions: Prescription[] = [];
  baseUrl: string = environment.ImgBaseUrl
  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private router: Router,
    private patientsService:PatientsService,
    private toastr: ToastrService,
  ) {

    this.getPrescription();
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.medicalrecords) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.medicalrecords) {
        this.getTableData2({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
    
  }
  ngOnInit(){
    this.filteredPrescriptions = [...this.Prescriptions];
  }
  private getTableData(pageOption: pageSelection): void {
    this.data.getMedicalRecords1().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: medicalrecords, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<medicalrecords>(this.tableData);
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
    this.data.getMedicalRecords2().subscribe((apiRes: apiResultFormat) => {
      this.tableData2 = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: medicalrecords, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.tableData2.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<medicalrecords>(this.tableData2);
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
  formatDateString(dateString: string): string {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const date = new Date(dateString);
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  
    return `${day} ${month} ${year}, ${hours}:${minutesStr} ${ampm}`;
  }

  fullFilePath(path:string): string {
    return this.baseUrlPdf + path;
  }

  getPrescription(){
    this.patientsService.getPrescription().subscribe((res:any)=>{
      this.Prescriptions=res?.data;
      this.filteredPrescriptions = [...this.Prescriptions];
    })
  }

  delete(prescriptionID:string){
this.patientsService.deletePrescription(prescriptionID).subscribe((res)=>{
  this.toastr.success('Prescription deleted Successfully', "Success");
  this.getPrescription();
})
  }

  

  searchPrescription(){
    const term = this.searchTerm.toLowerCase();
    if(term.length > 0){
      this.filteredPrescriptions = this.Prescriptions.filter((Prescriptions:any) => 
        Prescriptions.customPrescriptionID?.toLowerCase().includes(term) ||
        Prescriptions.doctorName.toLowerCase().includes(term) ||
        Prescriptions.patientId.toLowerCase().includes(term) ||
        Prescriptions.createdDate.toLowerCase().includes(term)
      );
    }
    else{
      this.filteredPrescriptions=this.Prescriptions
    }
  }

  sendData(invoiceObject:any){
    const matchingObj = this.Prescriptions.find((Prescriptions:any)=>Prescriptions.id == Prescriptions.id);
this.patientsService.Prescriptions.next(matchingObj);
  }

  generateImageUrl(imageId:any) {
    return `${this.baseUrl}${imageId}`;
  }
handleImageError(event: Event): void {
  const target = event.target as HTMLImageElement;
  target.src = '../../../../assets/img/dummy/doload.jpg'; // Specify the path to your default image
}
}
