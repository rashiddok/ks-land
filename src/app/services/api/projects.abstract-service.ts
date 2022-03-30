import { Observable } from "rxjs";
import { GalleryItem } from "src/app/models/GalleryItem";

export abstract class AbstractProjectService {
    public abstract getProjects(): Observable<GalleryItem[]>;
  }