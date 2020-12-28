import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Labtask4no2Page } from './labtask4no2.page';

describe('Labtask4no2Page', () => {
  let component: Labtask4no2Page;
  let fixture: ComponentFixture<Labtask4no2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Labtask4no2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Labtask4no2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
