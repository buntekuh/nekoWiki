import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DomainsComponent } from './domains.component';
import { EditDomainComponent } from './edit-domain/edit-domain.component'
import { FormsModule } from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { Conf } from '../conf';

describe('DomainsComponent', () => {
  let component: DomainsComponent;
  let fixture: ComponentFixture<DomainsComponent>;
  let location, router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainsComponent, EditDomainComponent ],
      imports: [
        FormsModule, AngularFireModule.initializeApp(Conf.firebase)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a add button', async(() => {
    const fixture = TestBed.createComponent(DomainsComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.btn-add').textContent).toContain('Add');
  }));
});
