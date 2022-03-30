import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GalleryItem } from 'src/app/models/GalleryItem';
import { AbstractProjectService } from './projects.abstract-service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsMockService implements AbstractProjectService {

  constructor() { }

  public getProjects(): Observable<GalleryItem[]> {
    const galleryItems: GalleryItem[] = []
    galleryItems.push(new GalleryItem('Project 1', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    galleryItems.push(new GalleryItem('Project 2', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    galleryItems.push(new GalleryItem('Project 3', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    galleryItems.push(new GalleryItem('Project 1', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    galleryItems.push(new GalleryItem('Project 2', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    galleryItems.push(new GalleryItem('Project 3', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    galleryItems.push(new GalleryItem('Project 1', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    galleryItems.push(new GalleryItem('Project 2', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    galleryItems.push(new GalleryItem('Project 3', 
    'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'))
    return of(galleryItems)
  }
}
