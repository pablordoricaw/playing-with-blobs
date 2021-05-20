const core = require("@actions/core");
const { BlobServiceClient } = require("@azure/storage-blob");

// inputs from action metadata
const connectionString = core.getInput("connection-string");
const containerName = core.getInput("container-name");
const branchName = core.getInput("branch-name");
const maxSavedModels = core.getInput("max-saved-models");

const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
const containerClient = blobServiceClient.getContainerClient(containerName);

async function getContainerLength() {
    let count = 0;
    for await (const blob of containerClient.listBlobsFlat({prefix: branchName})) {
        console.log('\t', blob.name);
        blobClient = containerClient.getBlobClient(blob.name);
        console.log('\t\t', blobClient.url);
        count++;
    }
    console.log(`blobList len: ${count}`);
}

getContainerLength();
console.log(`maxSavedModels: ${maxSavedModels}`);
