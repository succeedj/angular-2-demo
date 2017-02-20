import {Component, OnInit, Input, ViewChild, ElementRef, Inject} from '@angular/core';
import {JQ_TOKEN} from "../jQuery.service";

@Component({
  selector: 'result-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.css']
})
export class AppModalComponent {
  @Input() title: string;
  @Input() elementId: string;
  @ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) { }

  closeModal() {
    this.$(this.containerEl.nativeElement).modal('hide');
  }

}
