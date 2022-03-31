import { Observable } from "rxjs";
import { GalleryItem } from "src/app/models/GalleryItem";
import { Project } from "src/app/models/Project";

export abstract class AbstractProjectService {
    public abstract getProjects(): Observable<GalleryItem[]>;
    public abstract getProjectByName(shortName: string): Observable<Project>;
  }