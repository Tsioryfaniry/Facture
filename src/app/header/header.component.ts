import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  adresse:string="Adresse: "
  nif:string = 'NIF: '
  stat:string= 'STAT N°: '
  rcs:string = 'RCS: '
  nom:string='Nom: '
}
