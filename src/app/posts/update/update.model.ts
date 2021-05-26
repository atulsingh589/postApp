import Schema, { SchemaDefinition } from "validate";
import { Post } from "./update"
export class UpdateModel {
    public post: SchemaDefinition = {
        _id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        media: {
            file_id: {
                type: String,
                required: true
            },
            file_type: {
                type: String,
                required: true
            }
        },
        targetDate: {
            type: String,
            required: true
        },
        scheduleDate: {
            type: String,
            required: true
        },
        accountDetail: {
            type: String,
            required: true
        }

    }
    public postModel: any;
    constructor() {
        this.postModel = new Schema(this.post)
    }
    validate(data: Post) {
        return this.postModel.validate(data)
    }
}
