import Schema, { SchemaDefinition } from "validate"
import { Register } from "./register"
export class RegisterModel {
    public user: any = {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            length: { min: 5, max: 32 }
        },
        email: {
            type: String,
            required: true,
            match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        },
        password: {
            type: String,
            required: true,
            length: { min: 5, max: 15 }
        }
    };
    public registerModel: any = {}

    constructor() {
        this.registerModel = new Schema(this.user);
    }
    validate = (data: Register) => {
        return this.registerModel.validate(data)
    }
}
