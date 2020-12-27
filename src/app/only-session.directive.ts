import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Directive({
  selector: '[appOnlySession]'
})
export class OnlySessionDirective {

  constructor(private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef, private cookieService: CookieService) { }

  @Input()
  set appOnlySession(val) {
    const cookie = this.cookieService.check('token_access');
    if (cookie === val) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
