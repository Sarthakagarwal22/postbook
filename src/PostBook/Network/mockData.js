// const Post  = (id) => {
//     return {
//     id: id,
//     image_url: "http://placekitten.com/400/300",
//     likes: "2",
//     hasUserLiked: (id % 2 == 0),
//     numberOfComments: "8",
//     comments:[
//         {
//             id: "12345",
//             text: "This is a comment",
//             likes: "1",
//             user: "Abc",
//             hasUserLiked: (id % 3 == 0),
//             hasComments : true
//         },
//         {
//             id:"23456",
//             text:"This is another comment",
//             likes: "6",
//             user: "Abc314",
//             hasComments : true
//         },
//     ]
//}

export const comments1 = [
    {
        id: "123452",
        text: "This is a comment",
        likes: "3",
        user: "Abc",
        hasUserLiked: false,
        hasComments : true,
        parentId:"12345",
    },
    {
        id:"123467",
        text:"This is another comment",
        likes: "1",
        user: "def",
        hasUserLiked: true,
        hasComments : false,
        parentId:"12345",
    },
    {
        id: "123451",
        text: "This is a comment",
        likes: "8",
        user: "Abc",
        hasUserLiked: false,
        hasComments : false,
        parentId:"123452",
    },
    {
        id:"12346",
        text:"This is another comment",
        likes: "41",
        user: "def",
        hasUserLiked: true,
        hasComments : false,
        parentId:"123452",
    },
    {
        id: "123451",
        text: "This is a comment",
        likes: "8",
        user: "Abc",
        hasUserLiked: false,
        hasComments : false,
        parentId:"23456",
    },
    {
        id:"12346",
        text:"This is another comment",
        likes: "41",
        user: "def",
        hasUserLiked: true,
        hasComments : false,
        parentId:"23456",
    },
    {
        id: "12345",
        text: "This is a comment",
        likes: "1",
        user: "Abc",
        hasUserLiked: false,
        hasComments : true,
        postId: "23",
    },
    {
        id:"23456",
        text:"This is another comment",
        likes: "6",
        user: "Abc314",
        hasComments : true,
        hasUserLiked: false,
        postId: "23",
    },
]

export const comments2 = [
    
]

export const posts = [
    {
        id: 23,
        image_url: "http://placekitten.com/400/300",
        likes: "2",
        hasUserLiked: true,
        numberOfComments: "8",
    }
];

// export const createPostsArray = () => {
//     for(let i=0;i<3;i++){
//         posts.push(Post(i*123))
//     }
//     return posts;
// }