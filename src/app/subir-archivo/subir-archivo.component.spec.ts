import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirArchivoComponent } from './subir-archivo.component';

describe('SubirArchivoComponent', () => {
  let component: SubirArchivoComponent;
  let fixture: ComponentFixture<SubirArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirArchivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
