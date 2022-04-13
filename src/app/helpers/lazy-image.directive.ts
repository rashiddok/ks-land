import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive(
  { selector: '[lazyLoad]' }
)
export class LazyImageLoadingDirective
{
  constructor(private renderer:Renderer2, private element:ElementRef<HTMLImageElement>) {
    if ("loading" in HTMLImageElement.prototype) {
      this.renderer.setAttribute(this.element.nativeElement, "loading", "lazy");
    }
  }

}