import { Component, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { patientDashboard } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexFill,
  ApexLegend,
  ApexStroke,
} from 'ng-apexcharts';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PatientsService } from 'src/app/shared/Service/patients.service';
import { ToastrService } from 'ngx-toastr';
export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  legend: ApexLegend | any;
  stroke: ApexStroke | any;
};

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.scss'],
})
export class PatientDashboardComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public routes = routes;
  public tableData: Array<patientDashboard> = [];
  public tableData2: Array<patientDashboard> = [];
  public tableData3: Array<patientDashboard> = [];
  public tableData4: Array<patientDashboard> = [];
  public base = '';
  public page = '';
  public last = '';
  Prescriptions:any;
  baseUrlPdf: string = 'https://bookingapi.asptask.in/'
  invoices:any
  public doctorSliderOptions: OwlOptions = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  };
  public patientSliderOptions: OwlOptions = {
    loop: true,
    margin: 5,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 5,
      },
      500: {
        items: 5,
      },

      768: {
        items: 5,
      },
      1000: {
        items: 5,
      },
      1300: {
        items: 5,
      },
    },
  };

  constructor(private router: Router, private renderer: Renderer2,private patientsService:PatientsService,private toastr: ToastrService) {
    if (this.page == 'patient-dashboard') {
      this.renderer.addClass(document.body, 'date-pickers');
    }
    this.chartOptions1 = {
      series: [
        {
          data: [140, 100, 180, 130, 100, 130],
        },
      ],
      chart: {
        height: 300,
        type: 'bar',
      },
      fill: {
        colors: ['#E8F1FF'],
      },

      plotOptions: {
        bar: {
          columnWidth: '45%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [['Mon'], ['Tue'], ['Wed'], ['Thu'], ['Fri'], ['Sat']],
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      legend: {
        show: false,
      },
    };
    this.chartOptions2 = {
      series: [
        {
          data: [90, 60, 30, 60, 90, 70, 70],
        },
        {
          data: [110, 90, 40, 120, 130, 130, 130],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      fill: {
        colors: ['#E8F1FF'],
        opacity: 1,
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      legend: {
        show: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
    };
  }

  appointmentDetails:any
  ngOnInit(){
    this.getAppointment()
    this.getPrescription()
    this.GetInvoices()
  }

  getAppointment(){
    this.patientsService.getAppointment().subscribe((res:any)=>{
      console.log(res,"190")
      this.appointmentDetails = res
    })
  }
  getPrescription(){
    this.patientsService.getPrescription().subscribe((res:any)=>{
      this.Prescriptions=res?.data;
    })
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

  delete(prescriptionID:string){
    this.patientsService.deletePrescription(prescriptionID).subscribe((res)=>{
      console.log(res);
      this.toastr.success('Prescription deleted successfully');
      this.getPrescription();
    })
      }

      formatDate(isoDate: string): string {
        const date = new Date(isoDate);
      
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
      }

      GetInvoices(){
        this.patientsService.getInvoice().subscribe((res:any)=>{
          console.log(res);
          this.invoices=res;
        })
      }
}
