import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareDialogComponent } from './share-dialog.component';

describe('ShareDialogComponent', () => {
  let component: ShareDialogComponent;
  let fixture: ComponentFixture<ShareDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open', ()=>{
    component.showDialog()
    fixture.detectChanges()
    const dialogEl = fixture.debugElement.nativeElement.querySelector('.share-dialog');
    expect(dialogEl).toBeTruthy()
  })


  it('should generate links', ()=>{
    component.showDialog()
    fixture.detectChanges()
    const socialsEl = fixture.debugElement.nativeElement.querySelectorAll('.share__link');
    expect(socialsEl.length).toEqual(component.shareItems.length)
  })
});
