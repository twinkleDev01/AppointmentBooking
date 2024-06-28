import { Component } from '@angular/core';
import { LoaderServiceService } from './loader-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  isLoading = true;

  constructor(private loaderService: LoaderServiceService) { }

  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((value:boolean) => {
      this.isLoading = value;
    });
  }
}
