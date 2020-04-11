import { Component, OnInit, Input } from '@angular/core';
import { BaseResourceFormComponent } from '../forms/base-resource-form.component';

@Component({
  selector: 'app-server-error-messages',
  templateUrl: './server-error-messages.component.html',
  styleUrls: ['./server-error-messages.component.css']
})
export class ServerErrorMessagesComponent implements OnInit {

  @Input() serverErrorMessages: string[] = null;

  constructor() { }

  ngOnInit(): void {
  }

}
