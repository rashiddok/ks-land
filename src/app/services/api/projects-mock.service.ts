import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GalleryItem } from 'src/app/models/GalleryItem';
import { Project } from 'src/app/models/Project';
import { projecta } from 'src/assets/mocks/projecta';
import { AbstractProjectService } from './projects.abstract-service';

@Injectable()
export class ProjectsMockService implements AbstractProjectService {

  constructor() { }

  public getProjects(): Observable<GalleryItem[]> {
    const galleryItems: GalleryItem[] = []
    galleryItems.push(new GalleryItem('Glare',
    'glare', 
    'https://i.ibb.co/Q88B9Zq/photo-2022-03-31-14-11-58.jpg'))
    galleryItems.push(new GalleryItem('Project 2', 
    'projb', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    galleryItems.push(new GalleryItem('Project 3', 
    'projc', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    galleryItems.push(new GalleryItem('Project 1', 
    'projd', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    galleryItems.push(new GalleryItem('Project 2', 
    'proje', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    galleryItems.push(new GalleryItem('Project 3', 
    'projf', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    galleryItems.push(new GalleryItem('Project 1', 
    'projg', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    galleryItems.push(new GalleryItem('Project 2', 
    'projj', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    galleryItems.push(new GalleryItem('Project 3', 
    'proji', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    return of(galleryItems)
  }

  public getProjectByName(shortName: string): Observable<Project> {
    if(shortName === 'glare'){
      return of(projecta)
    }
    return of(projecta)
  }
}
