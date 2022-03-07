import { Comment } from "./comment.interface";
import { User } from "./user.interface";

export interface Post {
    title: string;
    description: string;
    content: String;
    creator: User;
    isPublic: Boolean;
    createdAt: Date;
    comments: Comment[]
}
