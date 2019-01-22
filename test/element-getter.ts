import {ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

export type HtmlElement = Pick<HTMLElement, 'innerText'>;

export interface MatList {
    querySelectorAll(matListItem: 'mat-list-item'): Array<HtmlElement>;
}

export interface MatOptionList {
    querySelectorAll(matListItem: 'mat-option'): Array<HtmlElement>;
}

export interface HtmlElementContainer {
    getContainerElement<HTML_ELEMENT_TYPE>(): HTML_ELEMENT_TYPE;
}

export interface ClickableElement {
    click(): void;
}

export function getElementById<ELEMENT_TYPE>(fixture: ComponentFixture<unknown>, id: string): ELEMENT_TYPE {
    return fixture.debugElement.query(By.css(`#${id}`)).nativeElement;
}

export function getElementByClass<ELEMENT_TYPE>(fixture: ComponentFixture<unknown>, className: string): ELEMENT_TYPE {
    return fixture.debugElement.query(By.css(className)).nativeElement;
}
