import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GalleryItem } from 'src/app/models/GalleryItem';

import { GalleryItemComponent } from './gallery-item.component';

describe('GalleryItemComponent', () => {
  let component: GalleryItemComponent;
  const item: GalleryItem = new GalleryItem('Project 1', 'projectone', '')
  let fixture: ComponentFixture<GalleryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display', ()=>{
    component.item = item;
    fixture.detectChanges();
    const nameEl = fixture.debugElement.nativeElement.querySelector('.project-name');
    const coverEl = fixture.debugElement.nativeElement.querySelector('.project__cover');
    expect(nameEl.innerHTML).toContain(item.title)
    expect(coverEl.src).toContain(item.cover)
  })
});
