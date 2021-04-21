export interface User {
    // This is a temporary User interface (model, class) that I will either updare over time or delete
    "id": number;
    "username": string;
    // "password": string;
    "banner": string;
    "photo": string;
    "email": string;
    "desc": string;
    "followers": number;
};

export interface AuthToken {
    "token": string;
}
