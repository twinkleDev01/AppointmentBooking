import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuard  {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const authenticatedAdmin = localStorage.getItem('authenticated-admin');

    if (!authenticatedAdmin) {
      return this.router.createUrlTree(['admin/admin-login']);
    }

    return true;
  }
}

@Injectable({
  providedIn: 'root',
})
export class PharmacyAuthGuard  {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const authenticatedPharmacy = localStorage.getItem('authenticated-pharmacy');

    if (!authenticatedPharmacy) {
      return this.router.createUrlTree(['pharmacy/pharmacy-login']);
    }

    return true;
  }
}