import { Client } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.dogetube',
    projectId: '66422389000b33a64803',
    databaseId: '6642254e001748b4f10f',
    userCollectionId: '664225c000258089ec95',
    videoCollectionId: '664225f200213230d54a',
    storageId: '664229a2001591c0fc3d'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

