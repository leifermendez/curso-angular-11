import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appSoloMobile]'
})
export class SoloMobileDirective implements OnInit {

  constructor(private renderer2: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {

  }

}
