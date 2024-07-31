/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexTooltip,
  ApexResponsive,
  ApexFill,
} from 'ng-apexcharts';
import { PatientsService } from '../shared/Service/patients.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { LoaderServiceService } from '../shared/loader/loader-service.service';
export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  dataLabels: ApexDataLabels | any;
  grid: ApexGrid | any;
  stroke: ApexStroke | any;
  title: ApexTitleSubtitle | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  legend: ApexLegend | any;
  tooltip: ApexTooltip | any;
  responsive: ApexResponsive[] | any;
  fill: ApexFill | any;
  labels: string[] | any;
  colors: any;
  markers: any;
  subtitle: any;
};

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  public routes = routes;
  myDateValue!: Date;
  date = new Date();
  public time1 = [0];
  public time2 = [0];
  public time3 = [0];
  public hours = [0];

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptionsOne!: Partial<ChartOptions>;
  public chartOptionsTwo!: Partial<ChartOptions>;
  public chartOptionsThree!: Partial<ChartOptions>;
  public chartOptionsFour!: Partial<ChartOptions>;
  downloading:boolean=false
  constructor(private patientsService:PatientsService,private loaderServiceService:LoaderServiceService) {
    this.chartOptionsOne = {
      series: [
        {
          name: 'BMI',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        responsive: true,
        zoom: {
          enabled: false,
        },
      },
      responsive: true,
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
    this.chartOptionsTwo = {
      series: [
        {
          name: 'HeartRate',
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: 7,
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '1/11/2000',
          '2/11/2000',
          '3/11/2000',
          '4/11/2000',
          '5/11/2000',
          '6/11/2000',
          '7/11/2000',
          '8/11/2000',
          '9/11/2000',
          '10/11/2000',
          '11/11/2000',
          '12/11/2000',
          '1/11/2001',
          '2/11/2001',
          '3/11/2001',
          '4/11/2001',
          '5/11/2001',
          '6/11/2001',
        ],
        tickAmount: 10,
      },
      title: {
        align: 'left',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#0de0fe'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      markers: {
        size: 4,
        colors: ['#15558d'],
        strokeColors: '#fff',
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
      yaxis: {
        min: -10,
        max: 40,
        title: {},
      },
    };
    this.chartOptionsThree = {
      series: [
        {
          name: 'FBC',
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: string) {
          return val + '%';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },

      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        position: 'top',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#0de0fe',
              colorTo: '#0de0fe',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: string) {
            return val + '%';
          },
        },
      },
      title: {
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444',
        },
      },
    };
    this.chartOptionsFour = {
      series: [
        {
          name: 'Weight',
          data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
        },
      ],
      chart: {
        type: 'line',
        height: 350,
      },
      stroke: {
        curve: 'stepline',
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        align: 'left',
      },
      markers: {
        hover: {
          sizeOffset: 4,
        },
      },
    };
  }
  addTime1() {
    this.time1.push(1);
  }
  addTime2() {
    this.time2.push(1);
  }
  addTime3() {
    this.time3.push(1);
  }
  dltTime1(index: number) {
    this.time1.splice(index, 1);
  }
  dltTime2(index: number) {
    this.time2.splice(index, 1);
  }
  dltTime3(index: number) {
    this.time3.splice(index, 1);
  }
  addHours() {
    this.hours.push(1);
  }
  dltHours(index: number) {
    this.hours.splice(index, 1);
  }
  invoiceDetail:any
  PrescriptionsDetails:any
  ngOnInit() {
    this.myDateValue = new Date();
    this.patientsService.invoiceData.subscribe((res:any)=>{
      this.invoiceDetail = res
    })
    this.patientsService.Prescriptions.subscribe((res:any)=>{
      this.PrescriptionsDetails = res
    })

  }

  prescription: any[] = [{}];
  bill: any[] = [{}];


  addPrescription() {
    this.prescription.push({});
  }
  addBill() {
    this.bill.push({});
  }

  dltPrescription(index: number) {
    this.prescription.splice(index, 1);
  }
  dltBill(index: number) {
    this.bill.splice(index, 1);
  }

  @ViewChild('invoice') invoiceElement!: ElementRef;
  @ViewChild('prescriptions') prescriptionElement!: ElementRef<HTMLDivElement>;

  // downloadPDF() {
  //   const DATA = this.invoiceElement.nativeElement;
  //  // Set the width of the element to 1200px before capturing it
  //  DATA.style.width = '750px';
  
  //  html2canvas(DATA, { scale: 2 }).then(canvas => {
  //    const imgWidth = 208; // A4 width in mm
  //    const pageHeight = 295; // A4 height in mm
  //    const imgHeight = (canvas.height * imgWidth) / canvas.width;
 
  //    const imgData = canvas.toDataURL('image/png');
  //    const pdf = new jsPDF('p', 'mm', 'a4');
  //    let position = 0;
 
  //    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  //    pdf.save('prescription.pdf');
 
  //    // Revert the width of the element to its original value
  //    DATA.style.width = '';
  //  });
  // }
  
  downloadPDF() {
    this.downloading=true
    this.loaderServiceService.show();
    const { clonedElement, hiddenDiv } = this.copyNodeElementinvoice()
    const DATA = clonedElement

    // Set the width of the element to 1200px before capturing it
    DATA.style.width = '750px';
    console.log(DATA)
    html2canvas(DATA, { scale: 2 }).then(canvas => {
      const imgWidth = 208; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      let position = 0;
  
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('invoice.pdf');
      document.body.removeChild(hiddenDiv)
      this.loaderServiceService.hide()
      this.downloading=false
      // Revert the width of the element to its original value
      DATA.style.width = '';
    });
  }
  copyNodeElementinvoice(){
    const clonedElement = (this.invoiceElement.nativeElement).cloneNode(true)
    const hiddenDiv = document.createElement('div');
    hiddenDiv.style.height = '10px';
    hiddenDiv.style.width = '100vw';
    hiddenDiv.style.overflow = 'scroll';
    document.body.appendChild(hiddenDiv);
    hiddenDiv.appendChild(clonedElement);
    return {clonedElement: clonedElement as HTMLDivElement, hiddenDiv};
  }

  downloadPDFPrescription() {
    this.downloading=true
    this.loaderServiceService.show();
    const { clonedElement, hiddenDiv } = this.copyNodeElement()
    const DATA = clonedElement

    DATA.style.width = '750px';
    console.log(DATA)
    html2canvas(DATA, { scale: 2 }).then(canvas => {
      const imgWidth = 208; 
      const pageHeight = 295; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      let position = 0;
  
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('prescription.pdf');
      document.body.removeChild(hiddenDiv)
      this.loaderServiceService.hide();
      this.downloading=false
      DATA.style.width = '';
    });
  }

  copyNodeElement(){
    const clonedElement = (this.prescriptionElement.nativeElement).cloneNode(true)
    const hiddenDiv = document.createElement('div');
    hiddenDiv.style.height = '10px';
    hiddenDiv.style.width = '100vw';
    hiddenDiv.style.overflow = 'scroll';
    document.body.appendChild(hiddenDiv);
    hiddenDiv.appendChild(clonedElement);
    return {clonedElement: clonedElement as HTMLDivElement, hiddenDiv};
  }

 formatDate(dateString:any) {
    const date = new Date(dateString);
    const day = date.getDate();
    const year = date.getFullYear();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const formattedDay = day < 10 ? '0' + day : day;
    return `${formattedDay} ${month} ${year}`;
}
}
