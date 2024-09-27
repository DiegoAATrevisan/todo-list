import { Firestore } from "firebase/firestore";
import { Task } from "./models/todo";
import { Auth } from "firebase/auth";

export class Api {
    auth: Auth;
    task: Task;

    constructor(db: Firestore, auth: Auth) {
        this.auth = auth;
        this.task = new Task(db, 'tasks');
    }
}