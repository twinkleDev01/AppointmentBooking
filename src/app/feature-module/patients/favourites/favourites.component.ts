import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent {
  public isFavourite: boolean[] = Array(10).fill(true);
  public routes = routes;
  toggleFavourite(index: number) {
    if (this.isFavourite[index] !== undefined) {
      this.isFavourite[index] = !this.isFavourite[index];
    }
  }
}
