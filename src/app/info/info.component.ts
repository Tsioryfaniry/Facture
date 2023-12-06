import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: 'info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  @Input()
  adress!:string
  @Input('nif')
  nif!:string
  @Input()
  stat!:string
  @Input()
  rcs!:string;
  type:string='Name'

}
