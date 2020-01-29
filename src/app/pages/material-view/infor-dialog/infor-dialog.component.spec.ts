import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InforDialogComponent } from './infor-dialog.component';

describe('InforDialogComponent', () => {
  let component: InforDialogComponent;
  let fixture: ComponentFixture<InforDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InforDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InforDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
