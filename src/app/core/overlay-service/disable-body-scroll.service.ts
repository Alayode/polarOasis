/**
 * Utility service that allows you to disable/re-enable
 * scrolling of the viewport.
 *
 * For reference see: https://github.com/crisbeto/material2/commit/b7dc32c17feadc567590d0d468dfd5944c120df2
 */

import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

/* tslint:disable:max-line-length */

/* tslint:enable:max-line-length */

@Injectable()
export class DisableBodyScrollService {

  isActive: boolean;

  private bodyStyles: string;
  private htmlStyles: string;
  private previousScrollPosition: number;

  constructor(@Inject(DOCUMENT) private document) {}

  /**
   * Disable scrolling
   */
  activate(): void {
    if (!this.isActive) {
      const body = this.document.body;
      const html = this.document.documentElement;
      const initialBodyWidth = body.clientWidth;

      this.htmlStyles = html.style.cssText || '';
      this.bodyStyles = body.style.cssText || '';
      if (typeof window !== 'undefined') {
        this.previousScrollPosition = window.scrollY || window.pageYOffset || 0;
      }

      body.style.position = 'fixed';
      body.style.width = '100%';
      body.style.top = -this.previousScrollPosition + 'px';
      html.style.overflowY = 'scroll';

      body.style.maxWidth = initialBodyWidth + 'px';

      this.isActive = true;
    }
  }

  /**
   * Re-enable scrolling
   */
  deactivate(): void {
    if (this.isActive) {
      this.document.body.style.cssText = this.bodyStyles;
      this.document.documentElement.style.cssText = this.htmlStyles;
      if (typeof window !== 'undefined') {
        window.scroll(0, this.previousScrollPosition);
      }
      this.isActive = false;
    }
  }
}
