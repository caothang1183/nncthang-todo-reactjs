export class Task {
    constructor(id, text, description, completed, createdDate) {
        this.id = id;
        this.text = text;
        this.description = description;
        this.completed = completed;
        this.createdDate = createdDate;
    }

    fromJson(json) {
        return Task(json["id"], json["text"], json["description"], json["completed"], json["createdDate"]);
    }

    toJson(instance) {
        JSON.stringify(instance);
    }
}
