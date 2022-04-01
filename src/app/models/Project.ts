export class Project{
    title: string;
    description: string;
    category: string;
    shortTitle: string;
    cover: string;
    files: string[];

    constructor(title: string, description: string, category: string, shortTitle: string, cover: string, files: string[]) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.shortTitle = shortTitle;
        this.cover = cover;
        this.files = files
    }
}