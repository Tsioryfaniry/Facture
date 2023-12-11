import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    let adresse = 'adresse: ' 
    component.adresse = adresse
    let nif = 'NIF: '
    component.nif = nif
    let stat= 'STAT N°: '
    component.stat = stat
    let rcs = 'RCS: '
    component.rcs = rcs
    let nom='Nom: '
    component.nom = nom
    const headerComponent = new HeaderComponent()
    expect(headerComponent).toBeTruthy();
  });
});
