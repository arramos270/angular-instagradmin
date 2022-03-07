import { User } from "./user.interface";

export interface Comment {
    creator: User;
    text: string;
    createdAt: Date;
}
