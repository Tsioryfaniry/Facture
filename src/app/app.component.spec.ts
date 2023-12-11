import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    })
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    // .compileComponents();
  });

  it('should create the app', () => {
    const title = 'facture'
    component.title= title;
    fixture.detectChanges()
    const compilded = fixture.nativeElement
    expect(compilded.querySelector('h1').textContent).toContain(title)
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;
    // expect(app).toBeTruthy();
  });

  // it(`should have as title 'facture'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('facture');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('facture app is running!');
  // });
});
