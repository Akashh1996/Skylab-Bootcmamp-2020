import { Component,Input } from '@angular/core';
import { Hero } from '../hero'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() hero: Hero | undefined;
}
