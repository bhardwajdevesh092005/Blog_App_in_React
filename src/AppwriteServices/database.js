import conf from "../Conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class DatabaseServices{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    // Creating post creation methods:
    async createPost({title,slug,content,image,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                    title,content,image,status,userId
                }
            )
        } catch (error) {
            console.log("Appwrite Error while Creating the Post",error);
            throw error;
        }
    }
    async updatePost(slug,{title,content,image,status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,content,image,status
            })
        } catch (error) {
            console.log("Error while updating the post: ",error);
            throw error;
        }
    }  
    async delPost(slug)
    {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug); 
        } catch (error) {
            console.log("Appwrite Error while Post Delete: ",error);
            throw error;
        }
        return true;
    } 
    async getPost(slug)
    {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug);
        } catch (error) {
            console.log("Error while post access: ",error);
            throw error;
        }
    }
    async getAllPosts(query = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId,appwriteCollectionId,query);
        } catch (error) {
            console.log("Error while retrieving all the posts: ",error);
        }
        return false;
    }

    // Creating file Upload Options:
    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file);
        } catch (error) {
            console.log("Error while uploading the file: ",error);
            throw error;
        }
    }
    async delFile(id){
        try {
            await this.bucket.deleteFile(id);
        } catch (error) {
            console.log("Error while deleting the file: ",error);
            throw error;
        }
    }
    getFilePreview(id){
        return this.bucket.getFilePreview(conf.appwriteBucketId,id)
    }

}
const databseService = new DatabaseServices();
export default databseService;