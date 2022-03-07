import { Post } from "./post.interface";

export interface User {
    id: number;
    username: string;
    fullname: string;
    password: string;
    avatar: string;
    postsList: Post[];
    followers: User[];
    myFollows: User[];
    createdAt: Date;
    lastEdit: Date;
    isPublic: Boolean;
    isAdmin: Boolean;
}

export interface UserResponse {
    username: string;
    fullname: string;
    avatar: string;
    isPublic: Boolean;
    postList: Post[];
    followers: User[];
    myFollows: User[];
}
