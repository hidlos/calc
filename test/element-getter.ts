import {ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

export type HtmlElement = Pick<HTMLElement, 'innerText'>;

export interface MatList {
    querySelectorAll: (matListItem: 'mat-list-item') => Array<HtmlElement>;
}

export interface Button {
    click: () => void;
}

export function getElementById<ELEMENT_TYPE>(fixture: ComponentFixture<unknown>, id: string): ELEMENT_TYPE {
    return fixture.debugElement.query(By.css(`#${id}`)).nativeElement;
}

export function getElementByClass<ELEMENT_TYPE>(fixture: ComponentFixture<unknown>, className: string): ELEMENT_TYPE {
    return fixture.debugElement.query(By.css(className)).nativeElement;
}
