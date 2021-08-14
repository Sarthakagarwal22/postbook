interface IComment {
    id: number;
    content: string;
    likes: number;
    comments: IComment[] | null;
}

export interface IPostData {
    id: number;
    image_url: string;
    likes: number;
    comments: IComment[];
}