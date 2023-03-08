 import { create as ipfsHttpClient } from "ipfs-http-client";

const projectId = "-";
const projectSecret = "";
const authorization = "Basic " + btoa(projectId + ":" + projectSecret);


const ipfs = ipfsHttpClient({
    url: "https://ipfs.infura.io:5001/api/v0",
    headers:{
      authorization
    }
  })

// const ipfs = new IPFS({ host: 'ipfs.infura.io', 
//     port: 5001,protocol: 'https' });
export default ipfs;