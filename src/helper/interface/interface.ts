export interface IUser{
    role: String,
    email: String,
    Id: String,
    userName: String,
    isAdmin: Boolean,
    isVerified: Boolean,
    createdAt: Date,
    updatedAt: Date,
    accessToken: String,
    refreshToken:String
};

export type ILoginCredentials = {
    email: String,
    password:String
}