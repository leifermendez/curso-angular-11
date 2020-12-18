import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewsComponent } from './list-views.component';

describe('ListViewsComponent', () => {
  let component: ListViewsComponent;
  let fixture: ComponentFixture<ListViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
