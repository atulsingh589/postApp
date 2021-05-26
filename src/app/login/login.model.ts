
import Schema, { SchemaDefinition } from "validate";
import { Login } from "./login"
export class LoginModel {
    public user: SchemaDefinition = {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }
    public userModel: any = {};
    constructor() {
        this.userModel = new Schema(this.user);
    }
    validate = (data: Login) => {
        return this.userModel.validate(data)
    }
}
