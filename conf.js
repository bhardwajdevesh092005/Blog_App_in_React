const conf = {
    appwrite_url: String(import.meta.env.VITE_APPWRITE_URL),
    appwrite_projectid:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwrite_databaseid: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwrite_collectionid: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwrite_bucketid: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinymce_api_key : String(import.meta.env.TINY_MCE_API_KEY)
}
export default conf;