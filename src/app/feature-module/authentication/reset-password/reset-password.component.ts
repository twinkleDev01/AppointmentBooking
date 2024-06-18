import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
import {
  newPassword,
  passwordResponce,
  register,
} from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  public routes = routes;
  public togglePasswordClass = false;
  public togglePasswordClass2 = false;

  public registerForm: register = {
    img: undefined,
    content1: undefined,
    content2: undefined,
    paragraph: undefined,
  };
  public passwordResponce: passwordResponce = {};
  public confirmPasswordResponce: passwordResponce = {};
  public newPassword: newPassword[] = [];

  public newPasswordOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 4,
      },
    },
  };

  constructor(private DataService: DataService) {
    this.newPassword = this.DataService.newPassword;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onChangePassword(password: any, type: string) {
    if (type === 'Password') {
      if (password.match(/^$|\s+/)) {
        this.passwordResponce.passwordResponceText =
          'whitespaces are not allowed';
        this.passwordResponce.passwordResponceImage = '';
        this.passwordResponce.passwordResponceKey = '';
        return;
      }
      if (password.length == 0) {
        this.passwordResponce.passwordResponceText = '';
        this.passwordResponce.passwordResponceImage = '';
        this.passwordResponce.passwordResponceKey = '';
        return;
      }
      if (password.length < 8) {
        this.passwordResponce.passwordResponceText =
          'Weak. Must contain at least 8 characters';
        this.passwordResponce.passwordResponceImage =
          '/assets/img/icons/angry.svg';
        this.passwordResponce.passwordResponceKey = '0';
      } else if (password.search(/[a-z]/) < 0) {
        this.passwordResponce.passwordResponceText =
          'Average. Must contain at least 1 upper case and number';
        this.passwordResponce.passwordResponceImage =
          'assets/img/icons/anguish.svg';
        this.passwordResponce.passwordResponceKey = '1';
      } else if (password.search(/[A-Z]/) < 0) {
        this.passwordResponce.passwordResponceText =
          'Average. Must contain at least 1 upper case and number';
        this.passwordResponce.passwordResponceImage =
          'assets/img/icons/anguish.svg';
        this.passwordResponce.passwordResponceKey = '1';
      } else if (password.search(/[0-9]/) < 0) {
        this.passwordResponce.passwordResponceText =
          'Average. Must contain at least 1 upper case and number';
        this.passwordResponce.passwordResponceImage =
          'assets/img/icons/anguish.svg';
        this.passwordResponce.passwordResponceKey = '1';
      } else if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
        this.passwordResponce.passwordResponceText =
          'Almost. Must contain special symbol';
        this.passwordResponce.passwordResponceImage =
          'assets/img/icons/smile.svg';
        this.passwordResponce.passwordResponceKey = '2';
      } else {
        this.passwordResponce.passwordResponceText =
          'Awesome! You have a secure password.';
        this.passwordResponce.passwordResponceImage =
          'assets/img/icons/smile.svg';
        this.passwordResponce.passwordResponceKey = '3';
      }
    } else {
      if (password.match(/^$|\s+/)) {
        this.confirmPasswordResponce.passwordResponceText =
          'whitespaces are not allowed';
        this.confirmPasswordResponce.passwordResponceImage = '';
        this.confirmPasswordResponce.passwordResponceKey = '';
        return;
      }
      if (password.length == 0) {
        this.confirmPasswordResponce.passwordResponceText = '';
        this.confirmPasswordResponce.passwordResponceImage = '';
        this.confirmPasswordResponce.passwordResponceKey = '';
        return;
      }
      if (password.length < 8) {
        this.confirmPasswordResponce.passwordResponceText =
          'Weak. Must contain at least 8 characters';
        this.confirmPasswordResponce.passwordResponceImage =
          'assets/img/icon/angry.svg';
        this.confirmPasswordResponce.passwordResponceKey = '0';
      } else if (password.search(/[a-z]/) < 0) {
        this.confirmPasswordResponce.passwordResponceText =
          'Average. Must contain at least 1 upper case and number';
        this.confirmPasswordResponce.passwordResponceImage =
          'assets/img/icon/anguish.svg';
        this.confirmPasswordResponce.passwordResponceKey = '1';
      } else if (password.search(/[A-Z]/) < 0) {
        this.confirmPasswordResponce.passwordResponceText =
          'Average. Must contain at least 1 upper case and number';
        this.confirmPasswordResponce.passwordResponceImage =
          'assets/img/icon/anguish.svg';
        this.confirmPasswordResponce.passwordResponceKey = '1';
      } else if (password.search(/[0-9]/) < 0) {
        this.confirmPasswordResponce.passwordResponceText =
          'Average. Must contain at least 1 upper case and number';
        this.confirmPasswordResponce.passwordResponceImage =
          'assets/img/icon/anguish.svg';
        this.confirmPasswordResponce.passwordResponceKey = '1';
      } else if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
        this.confirmPasswordResponce.passwordResponceText =
          'Almost. Must contain special symbol';
        this.confirmPasswordResponce.passwordResponceImage =
          'assets/img/icon/smile.svg';
        this.confirmPasswordResponce.passwordResponceKey = '2';
      } else {
        this.confirmPasswordResponce.passwordResponceText =
          'Awesome! You have a secure password.';
        this.confirmPasswordResponce.passwordResponceImage =
          'assets/img/icon/smile.svg';
        this.confirmPasswordResponce.passwordResponceKey = '3';
      }
    }
  }
  togglePassword() {
    this.togglePasswordClass = !this.togglePasswordClass;
  }
  togglePassword2() {
    this.togglePasswordClass2 = !this.togglePasswordClass2;
  }
}
