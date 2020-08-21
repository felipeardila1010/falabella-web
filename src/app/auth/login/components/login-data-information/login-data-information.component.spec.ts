import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDataInformationComponent } from './login-data-information.component';

describe('LoginDataInformationComponent', () => {
  let component: LoginDataInformationComponent;
  let fixture: ComponentFixture<LoginDataInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDataInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDataInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
