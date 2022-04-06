import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsMockService } from 'src/app/services/api/projects-mock.service';
import { AbstractProjectService } from 'src/app/services/api/projects.abstract-service';
import { ProjectsStorageService } from 'src/app/services/storage/projects-storage.service';

import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryComponent ],
      providers: [
        ProjectsStorageService,
        {
        provide: AbstractProjectService,
        useClass: ProjectsMockService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply gallery-small', ()=>{
    component.showAllGalleryItems = false
    fixture.detectChanges();
    const galleryEl = fixture.debugElement.nativeElement.querySelector('.gallery')
    expect(galleryEl.classList).toContain('gallery-small')
  })

  it('should contain three projects', done=>{
    component.showAllGalleryItems = false
    component.projects$.subscribe(data=>{
      expect(data.length).toEqual(3)
      done()
    })
  })
});
