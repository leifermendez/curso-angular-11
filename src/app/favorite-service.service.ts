import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteServiceService {
  @Output() emitiendoFavorito: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
