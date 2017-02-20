import {Directive, Input, Inject, ElementRef} from '@angular/core';
import {JQ_TOKEN} from "./jQuery.service";

@Directive({
  selector: '[appModal]'
})
export class ModalDirective {

  private el: HTMLElement;
  @Input() appModal: string;

  constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$(`#${this.appModal}`).modal({});
    })
  }

}
