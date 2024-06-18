export class routes {
  private static Url = '';
  static appointment: string;
  static appointment2: string;
  static url: string;

  public static get baseUrl(): string {
    return this.Url;
  }

  // Admin routes starts

  public static get adminLogin(): string {
    return this.baseUrl + '/admin/admin-login';
  }
  public static get adminRegister(): string {
    return this.baseUrl + '/admin/admin-register';
  }
  public static get adminLockScreen(): string {
    return this.baseUrl + '/admin/lock-screen';
  }
  public static get adminForgotPassword(): string {
    return this.baseUrl + '/admin/admin-forgot-password';
  }
  public static get appointmentList(): string {
    return this.baseUrl + '/admin/appointment-list';
  }
  public static get blankPage(): string {
    return this.baseUrl + '/admin/blank-page';
  }
  public static get calendar(): string {
    return this.baseUrl + '/admin/calendar';
  }
  public static get components(): string {
    return this.baseUrl + '/admin/components';
  }
  public static get doctorList(): string {
    return this.baseUrl + '/admin/doctor-list';
  }
  public static get error404(): string {
    return this.baseUrl + '/admin/errors/error404';
  }
  public static get error500(): string {
    return this.baseUrl + '/admin/errors/error500';
  }
  public static get formBasicInputs(): string {
    return this.baseUrl + 'forms/form-basic-inputs';
  }
  public static get formHorizontal(): string {
    return this.baseUrl + 'forms/form-horizontal';
  }
  public static get formInputGroups(): string {
    return this.baseUrl + 'forms/form-input-groups';
  }
  public static get formMask(): string {
    return this.baseUrl + 'forms/form-mask';
  }
  public static get formValidation(): string {
    return this.baseUrl + 'forms/form-validation';
  }
  public static get formVertical(): string {
    return this.baseUrl + 'forms/form-vertical';
  }
  public static get adminDashboard(): string {
    return this.baseUrl + '/admin/dashboard';
  }
  public static get adminInvoiceReport(): string {
    return this.baseUrl + '/admin/reports/invoice-report';
  }
  public static get patientList(): string {
    return this.baseUrl + '/admin/patient-list';
  }
  public static get adminProfile(): string {
    return this.baseUrl + '/admin/profile';
  }
  public static get reports(): string {
    return this.baseUrl + '/admin/reports';
  }
  public static get reviews(): string {
    return this.baseUrl + '/admin/reviews';
  }
  public static get adminSettings(): string {
    return this.baseUrl + '/admin/settings';
  }
  public static get specialities(): string {
    return this.baseUrl + '/admin/specialities';
  }
  public static get dataTables(): string {
    return this.baseUrl + '/admin/tables/data-tables';
  }
  public static get tablesBasic(): string {
    return this.baseUrl + '/admin/tables/tables-basic';
  }
  public static get adminTransactionsList(): string {
    return this.baseUrl + '/admin/transactions-list';
  }
  public static get adminInvoice(): string {
    return this.baseUrl + '/admin/invoice';
  }
  // Admin routes ends

  // Pharmacy routes starts
  public static get pharmacyLogin(): string {
    return this.baseUrl + '/pharmacy/pharmacy-login';
  }
  public static get pharmacyRegister(): string {
    return this.baseUrl + '/pharmacy/pharmacy-register';
  }
  public static get pharmacyLockScreen(): string {
    return this.baseUrl + '/pharmacy/lock-screen';
  }
  public static get pharmacyForgotPassword(): string {
    return this.baseUrl + '/pharmacy/pharmacy-forgot-password';
  }
  public static get categories(): string {
    return this.baseUrl + '/pharmacy/categories';
  }
  public static get customerOrder(): string {
    return this.baseUrl + '/pharmacy/customer-order';
  }
  public static get pharmacyDashboard(): string {
    return this.baseUrl + '/pharmacy/dashboard';
  }
  public static get pharmacyInvoice(): string {
    return this.baseUrl + '/pharmacy/invoice';
  }
  public static get addProducts(): string {
    return this.baseUrl + '/pharmacy/products/add-product';
  }
  public static get editProducts(): string {
    return this.baseUrl + '/pharmacy/products/edit-product';
  }
  public static get expired(): string {
    return this.baseUrl + '/pharmacy/products/expired';
  }
  public static get outstock(): string {
    return this.baseUrl + '/pharmacy/products/outstock';
  }
  public static get productList(): string {
    return this.baseUrl + '/pharmacy/products/product-list';
  }
  public static get pharmacyProfile(): string {
    return this.baseUrl + '/pharmacy/profile';
  }
  public static get addPurchase(): string {
    return this.baseUrl + '/pharmacy/purchase/add-purchase';
  }
  public static get editPurchase(): string {
    return this.baseUrl + '/pharmacy/purchase/edit-purchase';
  }
  public static get order(): string {
    return this.baseUrl + '/pharmacy/purchase/order';
  }
  public static get purchaseList(): string {
    return this.baseUrl + '/pharmacy/purchase/purchase-list';
  }
  public static get pharmacyInvoiceReport(): string {
    return this.baseUrl + '/pharmacy/reports/invoice-report';
  }
  public static get sales(): string {
    return this.baseUrl + '/pharmacy/sales';
  }
  public static get pharmacySettings(): string {
    return this.baseUrl + '/pharmacy/settings';
  }
  public static get addSupplier(): string {
    return this.baseUrl + '/pharmacy/supplier/add-supplier';
  }
  public static get editSupplier(): string {
    return this.baseUrl + '/pharmacy/supplier/edit-supplier';
  }
  public static get supplierList(): string {
    return this.baseUrl + '/pharmacy/supplier/supplier-list';
  }
  public static get pharmacyTransactionsList(): string {
    return this.baseUrl + '/pharmacy/transactions-list';
  }
  // Pharmacy routes starts

  // User routes starts
  public static get home1(): string {
    return this.baseUrl + '/home1';
  }
  public static get home2(): string {
    return this.baseUrl + '/home2';
  }
  public static get home3(): string {
    return this.baseUrl + '/home3';
  }
  public static get home4(): string {
    return this.baseUrl + '/home4';
  }
  public static get home5(): string {
    return this.baseUrl + '/home5';
  }
  public static get home6(): string {
    return this.baseUrl + '/home6';
  }
  public static get home7(): string {
    return this.baseUrl + '/home7';
  }
  public static get home8(): string {
    return this.baseUrl + '/home8';
  }
  public static get home9(): string {
    return this.baseUrl + '/home9';
  }
  public static get home10(): string {
    return this.baseUrl + '/home10';
  }
  public static get home11(): string {
    return this.baseUrl + '/home11';
  }
  public static get home12(): string {
    return this.baseUrl + '/home12';
  }
  public static get home13(): string {
    return this.baseUrl + '/home13';
  }
  public static get home14(): string {
    return this.baseUrl + '/home14';
  }
  public static get accounts(): string {
    return this.baseUrl + '/doctors/accounts';
  }
  public static get invoice(): string {
    return this.baseUrl + '/pages/invoices/invoice-list';
  }
  public static get medicaldetails(): string {
    return this.baseUrl + '/patients/medical-details';
  }
  public static get medicalrecords(): string {
    return this.baseUrl + '/patients/medical-records';
  }
  public static get patientregister1(): string {
    return this.baseUrl + '/patients/register/patient-register-step1';
  }
  public static get patientregister2(): string {
    return this.baseUrl + '/patients/register/patient-register-step2';
  }
  public static get patientregister3(): string {
    return this.baseUrl + '/patients/register/patient-register-step3';
  }
  public static get patientregister4(): string {
    return this.baseUrl + '/patients/register/patient-register-step4';
  }
  public static get patientregister5(): string {
    return this.baseUrl + '/patients/register/patient-register-step5';
  }
  public static get addBilling(): string {
    return this.baseUrl + '/doctors/add-billing';
  }
  public static get addPrescription(): string {
    return this.baseUrl + '/doctors/add-prescription';
  }
  public static get appointments(): string {
    return this.baseUrl + '/doctors/appointments';
  }
  public static get availableTimings(): string {
    return this.baseUrl + '/doctors/available-timings';
  }
  public static get doctorAddBlog(): string {
    return this.baseUrl + '/doctors/blog/doctor-add-blog';
  }
  public static get doctorBlog(): string {
    return this.baseUrl + '/doctors/blog/doctor-blog';
  }
  public static get doctorPendingBlog(): string {
    return this.baseUrl + '/doctors/blog/doctor-pending-blog';
  }
  public static get editBlog(): string {
    return this.baseUrl + '/doctors/blog/edit-blog';
  }
  public static get chatDoctor(): string {
    return this.baseUrl + '/doctors/chat-doctor';
  }
  public static get doctorChangePassword(): string {
    return this.baseUrl + '/doctors/doctor-change-password';
  }
  public static get doctorDashboard(): string {
    return this.baseUrl + '/doctors/doctor-dashboard';
  }
  public static get Settings(): string {
    return this.baseUrl + '/doctors/settings';
  }
  public static get doctorProfileSettings(): string {
    return this.Settings + '/doctor-profile-settings';
  }
  public static get doctorSearchGrid(): string {
    return this.baseUrl + '/doctors/doctor-search-grid';
  }
  public static get editBilling(): string {
    return this.baseUrl + '/doctors/edit-billing';
  }
  public static get editPrescription(): string {
    return this.baseUrl + '/doctors/edit-prescription';
  }
  public static get myPatients(): string {
    return this.baseUrl + '/doctors/my-patients';
  }
  public static get patientAccounts(): string {
    return this.baseUrl + '/patients/patient-accounts';
  }
  public static get patientDetails(): string {
    return this.baseUrl + '/doctors/patient-details';
  }
  public static get patientProfile(): string {
    return this.baseUrl + '/doctors/patient-profile';
  }
  public static get doctorRegister(): string {
    return this.baseUrl + '/doctors/register/doctor-register';
  }
  public static get doctorRegisterStep1(): string {
    return this.baseUrl + '/doctors/register/doctor-register-step1';
  }
  public static get doctorRegisterStep2(): string {
    return this.baseUrl + '/doctors/register/doctor-register-step2';
  }
  public static get doctorRegisterStep3(): string {
    return this.baseUrl + '/doctors/register/doctor-register-step3';
  }
  public static get userReviews(): string {
    return this.baseUrl + '/doctors/reviews';
  }
  public static get scheduleTimings(): string {
    return this.baseUrl + '/doctors/available-timings';
  }
  public static get doctorSignup(): string {
    return this.baseUrl + '/authentication/doctor-signup';
  }
  public static get emailOtp(): string {
    return this.baseUrl + '/authentication/email-otp';
  }
  public static get forgotPassword(): string {
    return this.baseUrl + '/authentication/forgot-password';
  }
  public static get forgotPassword2(): string {
    return this.baseUrl + '/authentication/forgot-password2';
  }
  public static get userLogin(): string {
    return this.baseUrl + '/authentication/login';
  }
  public static get loginEmail(): string {
    return this.baseUrl + '/authentication/login-email';
  }
  public static get loginEmailOtp(): string {
    return this.baseUrl + '/authentication/login-email-otp';
  }
  public static get loginPhone(): string {
    return this.baseUrl + '/authentication/login-phone';
  }
  public static get loginPhoneOtp(): string {
    return this.baseUrl + '/authentication/login-phone-otp';
  }
  public static get mobileOtp(): string {
    return this.baseUrl + '/authentication/mobile-otp';
  }
  public static get patientSignup(): string {
    return this.baseUrl + '/authentication/patient-signup';
  }
  public static get register(): string {
    return this.baseUrl + '/authentication/register';
  }
  public static get resetPassword(): string {
    return this.baseUrl + '/authentication/reset-password';
  }
  public static get signupSuccess(): string {
    return this.baseUrl + '/authentication/signup-success';
  }
  public static get blogDetails(): string {
    return this.baseUrl + '/blog/blog-details';
  }
  public static get blogGrid(): string {
    return this.baseUrl + '/blog/blog-grid';
  }
  public static get blogList(): string {
    return this.baseUrl + '/blog/blog-list';
  }
  public static get userError404(): string {
    return this.baseUrl + '/error/error404';
  }
  public static get userError500(): string {
    return this.baseUrl + '/error/error500';
  }
  public static get aboutUs(): string {
    return this.baseUrl + '/pages/about-us';
  }
  public static get userBlankPage(): string {
    return this.baseUrl + '/pages/blank-page';
  }
  public static get videoCall(): string {
    return this.baseUrl + '/pages/call/video-call';
  }
  public static get voiceCall(): string {
    return this.baseUrl + '/pages/call/voice-call';
  }
  public static get comingSoon(): string {
    return this.baseUrl + '/pages/coming-soon';
  }
  public static get userComponents(): string {
    return this.baseUrl + '/pages/components';
  }
  public static get contactUs(): string {
    return this.baseUrl + '/pages/contact-us';
  }
  public static get faq(): string {
    return this.baseUrl + '/pages/faq';
  }
  public static get invoiceView(): string {
    return this.baseUrl + '/pages/invoices/invoice-view';
  }
  public static get maintenance(): string {
    return this.baseUrl + '/pages/maintenance';
  }
  public static get pricing(): string {
    return this.baseUrl + '/pages/pricing';
  }
  public static get privacyPolicy(): string {
    return this.baseUrl + '/pages/privacy-policy';
  }
  public static get signup(): string {
    return this.baseUrl + '/pages/signup';
  }
  public static get socialMedia(): string {
    return this.baseUrl + '/pages/social-media';
  }
  public static get termsCondition(): string {
    return this.baseUrl + '/pages/terms-condition';
  }
  public static get bookingSuccess(): string {
    return this.baseUrl + '/patients/booking/booking-success';
  }
  public static get bookingSuccessOne(): string {
    return this.baseUrl + '/patients/booking/booking-success-one';
  }
  public static get booking1(): string {
    return this.baseUrl + '/patients/booking/booking1';
  }
  public static get booking2(): string {
    return this.baseUrl + '/patients/booking/booking2';
  }
  public static get patientsChangePassword(): string {
    return this.baseUrl + '/patients/change-password';
  }
  public static get chat(): string {
    return this.baseUrl + '/patients/chat';
  }
  public static get checkout(): string {
    return this.baseUrl + '/patients/checkout';
  }
  public static get consultation(): string {
    return this.baseUrl + '/patients/consultation';
  }
  public static get addDependent(): string {
    return this.baseUrl + '/patients/dependent/add-dependent';
  }
  public static get dependentList(): string {
    return this.baseUrl + '/patients/dependent/dependent-list';
  }
  public static get editDependent(): string {
    return this.baseUrl + '/patients/dependent/edit-dependent';
  }
  public static get doctorProfile1(): string {
    return this.baseUrl + '/patients/doctor-profile/doctor-profile1';
  }
  public static get doctorProfile2(): string {
    return this.baseUrl + '/patients/doctor-profile/doctor-profile2';
  }
  public static get mapGrid(): string {
    return this.baseUrl + '/patients/doctors/map-grid';
  }
  public static get mapList(): string {
    return this.baseUrl + '/patients/doctors/map-list';
  }
  public static get favourites(): string {
    return this.baseUrl + '/patients/favourites';
  }
  public static get medicalDetails(): string {
    return this.baseUrl + '/patients/medical-details';
  }
  public static get medicalRecords(): string {
    return this.baseUrl + '/patients/medical-records';
  }
  public static get ordersList(): string {
    return this.baseUrl + '/patients/orders-list';
  }
  public static get patientDashboard(): string {
    return this.baseUrl + '/patients/patient-dashboard';
  }
  public static get payment(): string {
    return this.baseUrl + '/patients/payment';
  }
  public static get profileSettings(): string {
    return this.baseUrl + '/patients/profile-settings';
  }
  public static get patientRegisterStep1(): string {
    return this.baseUrl + '/patients/register/patient-register-step1';
  }
  public static get patientRegisterStep2(): string {
    return this.baseUrl + '/patients/register/patient-register-step2';
  }
  public static get patientRegisterStep3(): string {
    return this.baseUrl + '/patients/register/patient-register-step3';
  }
  public static get patientRegisterStep4(): string {
    return this.baseUrl + '/patients/register/patient-register-step4';
  }
  public static get patientRegisterStep5(): string {
    return this.baseUrl + '/patients/register/patient-register-step5';
  }
  public static get search1(): string {
    return this.baseUrl + '/patients/search-doctor/search1';
  }
  public static get search2(): string {
    return this.baseUrl + '/patients/search-doctor/search2';
  }
  public static get cart(): string {
    return this.baseUrl + '/pharmacy/cart';
  }
  public static get paymentSuccess(): string {
    return this.baseUrl + '/pharmacy/payment-success';
  }
  public static get pharmacyDetails(): string {
    return this.baseUrl + '/pharmacy/pharmacy-details';
  }
  public static get pharmacyIndex(): string {
    return this.baseUrl + '/pharmacy/pharmacy-index';
  }
  public static get pharmacySearch(): string {
    return this.baseUrl + '/pharmacy/pharmacy-search';
  }
  public static get productAll(): string {
    return this.baseUrl + '/pharmacy/product-all';
  }
  public static get productCheckout(): string {
    return this.baseUrl + '/pharmacy/product-checkout';
  }
  public static get productDescription(): string {
    return this.baseUrl + '/pharmacy/product-description';
  }
  public static get pharmacyregister(): string {
    return this.baseUrl + '/pharmacy/register/pharmacy-register';
  }
  public static get pharmacyRegisterStep1(): string {
    return this.baseUrl + '/pharmacy/register/pharmacy-register-step1';
  }
  public static get pharmacyRegisterStep2(): string {
    return this.baseUrl + '/pharmacy/register/pharmacy-register-step2';
  }
  public static get pharmacyRegisterStep3(): string {
    return this.baseUrl + '/pharmacy/register/pharmacy-register-step3';
  }
  public static get appointment3(): string {
    return this.baseUrl + '/pharmacy/register/pharmacy-register-step3';
  }
  public static get appointment4(): string {
    return this.baseUrl + '/pharmacy/register/pharmacy-register-step3';
  }
  public static get appointment5(): string {
    return this.baseUrl + '/pharmacy/register/pharmacy-register-step3';
  }
  public static get appointment6(): string {
    return this.baseUrl + '/pharmacy/register/pharmacy-register-step3';
  }
  public static get doctorRequest(): string {
    return this.baseUrl + '/doctors/doctor-request';
  }
  public static get doctorPayment(): string {
    return this.baseUrl + '/doctors/doctor-payment';
  }
  public static get doctorSpecialities(): string {
    return this.baseUrl + '/doctors/doctor-specialities';
  }
  public static get doctorCancelledAppointment(): string {
    return this.appointments + '/doctor-cancelled-appointment';
  }
  public static get doctorCancelledAppointment2(): string {
    return this.appointments + '/doctor-cancelled-appointment2';
  }
  public static get doctorCompletedAppointment(): string {
    return this.appointments + '/doctor-completed-appointment';
  }
  public static get doctorBusinessSettings(): string {
    return this.Settings + '/doctor-business-settings';
  }
  public static get doctorClinicSettings(): string {
    return this.Settings + '/doctor-clinics-settings';
  }
  public static get doctorEducationSettings(): string {
    return this.Settings + '/doctor-education-settings';
  }
  public static get doctorAwardsSettings(): string {
    return this.Settings + '/doctor-awards-settings';
  }
  public static get doctorExperienceSettings(): string {
    return this.Settings + '/doctor-experience-settings';
  }
  public static get doctorInsuranceSettings(): string {
    return this.Settings + '/doctor-insurance-settings';
  }
  public static get patientAppointment(): string {
    return this.baseUrl + '/patients/appointments/patient-appointments';
  }
  public static get patientAppointmentsGrid(): string {
    return this.baseUrl + '/patients/appointments/patient-appointment-grid';
  }
  public static get patientCancelledAppointment(): string {
    return this.baseUrl + '/patients/appointments/patient-cancelled-appointment';
  }
  public static get patientCompletedAppointment(): string {
    return this.baseUrl + '/patients/appointments/patient-completed-appointment';
  }
  public static get patientInvoice(): string {
    return this.baseUrl + '/patients/patient-invoice';
  }
  public static get patientUpcomingAppointment(): string {
    return this.baseUrl + '/patients/appointments/patient-upcoming-appointment';
  }
  public static get appointmentsListUser(): string {
    return this.baseUrl + '/doctors/appointments/appointment-list';
  }
  public static get doctorUpcomingAppointment(): string {
    return this.appointments + '/doctor-upcoming-appointment';
  }
  public static get doctorAppointmentStart(): string {
    return this.appointments + '/doctor-appointment-start';
  }
  public static get doctorAppointmentGrid(): string {
    return this.appointments + '/doctor-appointments-grid';
  }
  public static get doctorAppointmentDetails(): string {
    return this.appointments + '/doctor-appointment-details';
  }
  public static get patientAppointmentDetails(): string {
    return this.baseUrl + '/patients/appointments/patient-appointment-details';
  }
  // User routes ends
}
