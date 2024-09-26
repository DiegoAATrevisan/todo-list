import { Firestore } from "firebase/firestore";
import { taskProps } from "../../../@types/tasks";
import Crud from "./crud";

export class Task extends Crud<taskProps> {
    constructor(db: Firestore, collection: string) {
        super(db, collection);
    }
}