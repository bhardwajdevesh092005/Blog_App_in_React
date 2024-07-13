import conf from "../../conf";
import { Client,Account,ID,Databases,Query,Storage} from "appwrite";
export class AuthServices{
    client = new Client();
    account;
    database;
    bucket;
    constructor(){
        this.client.setEndpoint(conf.appwrite_url).setProject(conf.appwrite_projectid);
        this.account = new Account(this.client);
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    
    // Auth Actions
    async createAccount({name,email,password}){ 
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                return this.login({email,password});
            }else{
                return userAccount;
            }
        } catch (error) {
            console.log("Error while creating account",error);
            throw error;
        }
    }
    async login({email,password}){
        try {
            authService.logout();
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.log("Error while login",error);
            throw error;
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Error while checking login",error);
            throw error;
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Error while logging out",error);
            throw error;
        }
    }
    
    // Post Actions
    async createPost({title, slug, content, image, status, userId}){
        try {
            return await this.database.createDocument(conf.appwrite_databaseid,conf.appwrite_collectionid,slug,{
                title,
                content,
                userId,
                image,
                status,
                slug
            })
        } catch (error) {
            console.log("Error while creating post",error);
            throw error;
        }
    }
    async updatePost(slug,{title,content,image,status,userId}){
        try {
            return await this.database.updateDocument(conf.appwrite_databaseid,conf.appwrite_collectionid,slug,{
                title,
                content,
                userId,
                image,
                status
            })
        } catch (error) {
            console.log("Error while updating post",error);
            throw error;
        }
    }
    async removePost(slug){
        try {
            await this.database.deleteDocument(conf.appwrite_databaseid,conf.appwrite_collectionid,slug);
            return true;
        } catch (error) {
            console.log("Error while removing post from the database",error);
            throw error;
        }
    }
    async  getPost(slug){
        try {
            return await this.database.getDocument(conf.appwrite_databaseid,conf.appwrite_collectionid,slug)
        } catch (error) {
            console.log("Error while retrieving the post",error);
        }
    }
    async  getPosts(query = [Query.equal("status","active")]){
        try {
            return await this.database.listDocuments(conf.appwrite_databaseid,conf.appwrite_collectionid,query);
        } catch (error) {
            console.log("Error while retrieving the posts",error);
            throw error;
        }
    }
    
    // File upload Services
    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwrite_bucketid,ID.unique(),file);
        } catch (error) {
            console.log("Error while uploading the file",error);
            throw error;
        }
    }
    async delFile(fileId){
        try {
            return await this.bucket.deleteFileFile(conf.appwrite_bucketid,fileId);
        } catch (error) {
            console.log("Error while delete the file",error);
            throw error;
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwrite_bucketid,fileId);
    }
};
const authService = new AuthServices();
export default authService;