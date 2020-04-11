import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input() pageTitle: string;
  @Input() showButton: boolean;
  @Input() buttonClass: string;
  @Input() buttonText: string;
  @Input() buttonLink: string;

  constructor() {
    this.showButton = true;
  }

  ngOnInit(): void {
  }

}
