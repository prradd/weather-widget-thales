import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CardTitleComponent } from './card-title.component';

describe('CardTitleComponent', () => {
  let component: CardTitleComponent;
  let fixture: ComponentFixture<CardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should title be equal "Title" by default`, () => {
    const comp = fixture.componentInstance;
    expect(comp.title).toEqual('Title');
  })

  it ('Should display title as Unit Testing', () => {
    component.title = 'Unit Testing';
    fixture.detectChanges();

    const bannerDe: DebugElement = fixture.debugElement;
    const headingDe = bannerDe.query(By.css('h2'));
    const h2: HTMLElement = headingDe.nativeElement;

    expect(h2.textContent).toEqual('Unit Testing');
  })

});
