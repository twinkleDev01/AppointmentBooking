export interface pageSelection {
  skip: number;
  limit: number;
}
export interface apiResultFormat {
  data: [];
  totalData: number;
}
export interface url {
  url: string;
}
//  admin pages starts
export interface appointmentList {
  isSelected: boolean;
  id: number;
  doctorName: string;
  speciality: string;
  patientName: string;
  appointmentTime: string;
  appointmentDate: string;
  amount: string;
  img1: string;
  img2: string;
  isStatus: false;
}
export interface specialities {
  id: number;
  specialities: string;
  img: string;
}
export interface doctorList {
  isSelected: boolean;
  id: number;
  doctorName: string;
  speciality: string;
  memberSince: string;
  earned: string;
  time: string;
  img: string;
  isStatus: boolean;
}
export interface patientList {
  id: number;
  patientId: string;
  patientName: string;
  age: string;
  address: string;
  phone: string;
  lastVisit: string;
  paid: string;
  img: string;
}

export interface reviews {
  id: number;
  patientName: string;
  doctorName: string;
  description: string;
  date: string;
  actions: string;
  img1: string;
  img2: string;
}

export interface transactionsList {
  id: number;
  invoiceNumber: string;
  patientId: string;
  patientName: string;
  totalAmount: string;
  status: string;
  actions: string;
  img: string;
}
export interface invoiceReport {
  id: number;
  invoiceNumber: string;
  patientId: string;
  patientName: string;
  totalAmount: string;
  createdDate: string;
  status: string;
  img: string;
  action1: string;
  action2: string;
}

export interface dataTables {
  id: number;
  name: string;
  position: string;
  office: string;
  age: string;
  startDate: string;
  salary: string;
}

//  admin pages ends

//  pharmacy pages starts

export interface productList {
  id: number;
  productName: string;
  category: string;
  price: string;
  quantity: string;
  discount: string;
  expire: string;
  action1: string;
  action2: string;
  img: string;
  quantityCheck: boolean;
}
export interface outstock {
  id: number;
  brandName: string;
  geneticName: string;
  category: string;
  price: string;
  quantity: string;
  discount: string;
  expire: string;
  action1: string;
  action2: string;
  img: string;
}
export interface expired {
  id: number;
  brandName: string;
  geneticName: string;
  category: string;
  price: string;
  quantity: string;
  discount: string;
  expire: string;
  action1: string;
  action2: string;
  img: string;
  quantityCheck: boolean;
}
export interface categories {
  id: number;
  name: string;
  createdDate: string;
  actions1: string;
  actions2: string;
}

export interface purchaseList {
  id: number;
  purchaseDate: string;
  medicineName: string;
  medicineCategory: string;
  purchasePrice: string;
  quantity: string;
  supplier: string;
  expireDate: string;
  action1: string;
  action2: string;
  img: string;
}

export interface order {
  id: number;
  supplierId: string;
  supplierName: string;
  orderBy: string;
  addOrder: string;
  orderList1: string;
  orderList2: string;
  action: string;
}

export interface sales {
  id: number;
  invoiceNo: string;
  medicineName: string;
  totalPrice: string;
  date: string;
  action1: string;
  action2: string;
  action3: string;
}
export interface supplierList {
  id: number;
  product: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  company: string;
  action1: string;
  action2: string;
  img: string;
}
export interface transactionList {
  id: number;
  invoiceNo: string;
  productId: string;
  productName: string;
  totalAmount: string;
  status: string;
  actions: string;
  img: string;
}

export interface invoiceReports {
  id: number;
  invoiceNumber: string;
  medicineName: string;
  totalAmount: string;
  createdDate: string;
  status: string;
  actions1: string;
  actions2: string;
  img: string;
}
//  pharmacy pages ends

// User pages start
export interface accounts {
  date: string;
  time: string;
  patientName: string;
  id: number;
  amount: string;
  status: string;
  action1: string;
  action2: string;
  action3: string;
  img: string;
}
export interface dependentList {
  id: number;
  dependent: string;
  relationship: string;
  gender: string;
  number: string;
  bloodGroup: string;
  action1: string;
  action2: string;
  img: string;
}
export interface doctorDashboard {
  id: number;
  patientId: string;
  patientName: string;
  apptDate: string;
  purpose: string;
  type: string;
  paidAmount: string;
  action1: string;
  action2: string;
  action3: string;
  img: string;
  apptTime: string;
}
export interface medicalrecords {
  id: number;
  Name: string;
  date: string;
  time: string;
  description: string;
  orderby: string;
  doctor: string;
  img: string;
  group: string;
}
export interface invoice {
  id: number;
  invoiceno: number;
  patientName: string;
  img: string;
  patientid: string;
  amount: string;
  date: string;
}
export interface medicalDetails {
  id: number;
  name: string;
  bmi: string;
  heartRate: number;
  fbcStatus: number;
  weight: string;
  orderDate: string;
  orderTime: string;
}
export interface patientProfile {
  id: number;
  doctor: string;
  appDate: number;
  appTime: number;
  specfication: string;
  bookingDate: string;
  specification: string;
  fbcstatus: number;
  amount: number;
  followup: string;
  status: string;
  date: string;
  name: string;
  createdBy: number;
  description: string;
  attachement: string;
  created: string;
  invoiceNo: string;
  doctorimg: string;
  paidOn: string;
  orderDate: string;
  orderTime: string;
  action1: string;
  action2: string;
  action3: string;
  img: string;
}

export interface ordersList {
  id: number;
  orderId: string;
  pharmacyName: string;
  quantity: string;
  amount: string;
  paymentGateway: string;
  status: string;
  orderDate: string;
  orderTime: string;
}
export interface patientAccounts {
  id: number;
  img: string;
  date: string;
  time: string;
  doctorName: string;
  amount: string;
  specialist: string;
  status: string;
  action1: string;
  action2: string;
  action3: string;
}
export interface patientDashboard {
  id: number;
  img: string;
  doctor: string;
  apptDate: string;
  bookingDate: string;
  amount: string;
  followUp: string;
  status: string;
  action1: string;
  action2: string;
  specialist: string;
  time: string;
  paidOn: string;
  invoiceNo: string;
  created: string;
  attachment: string;
  description: string;
  apptTime: string;
  date: string;
  name: string;
  createdBy: string;
}
export class register {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  img?: string;
  content1?: string;
  content2?: string;
  paragraph?: string;
}
export class passwordResponce {
  passwordResponceText?: string;
  passwordResponceImage?: string;
  passwordResponceKey?: string;
}
export interface newPassword {
  img: string;
  content1: string;
  content2: string;
  paragraph: string;
}
export interface booking2 {
  day: string;
  date: string;
}
export interface aboutUs {
  heading1: string;
  heading2: string;
  content: string;
  name: string;
  location: string;
  img: string;
}
export interface specialitiesSliderOne {
  content: string;
  img: string;
}
export interface doctorSliderOne {
  img: string;
  amount: string;
  name: string;
  content: string;
  rating1: string;
  rating2: string;
  location: string;
}
export interface partnersSlider {
  img: string;
}
export interface nurseSliderOne {
  img: string;
  name: string;
  content: string;
  percentage: string;
  distance: string;
  location: string;
}
export interface nurseSlidertwo {
  img: string;
  name: string;
  content: string;
  percentage: string;
  distance: string;
  location: string;
  day: string;
  fees: string;
  country: string;
}
export interface recommendedBlog {
  img?: string;
  title?: string;
  head?: string;
  para?: string;
  date?: string;
  views?: string;
}
export interface restaurants {
  img?: string;
  title?: string;
  servicedetails?: string;
  mappin?: string;
  details?: string;
  amount?: string;
  rating?: string;
  review?: string;
}
export interface shops {
  img?: string;
  title?: string;
  servicedetails?: string;
  mappin?: string;
  details?: string;
  amount?: string;
  rating?: string;
  review?: string;
}
export interface listingDetails {
  img: string;
}
export interface listingDetails2 {
  img: string;
}

export interface swiperCarousel {
  img: string;
  heading: string;
  span: string;
  newPrice: string;
  oldPrice: string;
  book: string;
}
