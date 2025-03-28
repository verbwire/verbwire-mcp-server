import { verbwireGet, verbwirePost, formatSuccess } from './utils.js';
import fs from 'fs';

// Storage tools for the Verbwire API
export const STORAGE_TOOLS = [
  {
    name: "uploadFileToIPFS",
    description: "Upload a local file to IPFS",
    inputSchema: {
      type: "object",
      properties: {
        filePath: {
          type: "string",
          description: "Path to the file to upload (local path)"
        },
        name: {
          type: "string",
          description: "Name for the file (optional)"
        },
        description: {
          type: "string",
          description: "Description for the file (optional)"
        }
      },
      required: ["filePath"]
    },
    handler: async (args, apiKey) => {
      const formData = {};
      Object.keys(args).forEach(key => {
        if (key !== 'filePath') {
          formData[key] = args[key];
        }
      });
      
      // Handle file upload
      if (args.filePath && fs.existsSync(args.filePath)) {
        formData.filePath = {
          filename: args.filePath.split('/').pop(),
          data: args.filePath
        };
      } else {
        throw new Error(`File not found: ${args.filePath}`);
      }
      
      const result = await verbwirePost('/nft/store/uploadFile', formData, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "uploadFileFromUrlToIPFS",
    description: "Upload a file via URL to IPFS",
    inputSchema: {
      type: "object",
      properties: {
        fileUrl: {
          type: "string",
          description: "URL of the file to be uploaded to IPFS"
        }
      },
      required: ["fileUrl"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/store/fileFromUrl', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "uploadMetadataFromImageUrl",
    description: "Upload a URL to IPFS as NFT metadata",
    inputSchema: {
      type: "object",
      properties: {
        fileUrl: {
          type: "string",
          description: "URL of the image to be used for the metadata"
        },
        name: {
          type: "string",
          description: "Name for the NFT"
        },
        description: {
          type: "string",
          description: "Description for the NFT"
        },
      },
      required: ["fileUrl", "name", "description"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/store/metadataFromImageUrl', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "uploadMetadataFromImage",
    description: "Upload local file as metadata to IPFS",
    inputSchema: {
      type: "object",
      properties: {
        filePath: {
          type: "string",
          description: "Path to the image file to upload (local path)"
        },
        name: {
          type: "string",
          description: "Name for the NFT"
        },
        description: {
          type: "string",
          description: "Description for the NFT"
        },
        attributes: {
          type: "string",
          description: "Attributes for the NFT in JSON format: [{\"trait_type\":\"Trait\",\"value\":\"Value\"}]"
        }
      },
      required: ["filePath", "name"]
    },
    handler: async (args, apiKey) => {
      const formData = {};
      Object.keys(args).forEach(key => {
        if (key !== 'filePath') {
          formData[key] = args[key];
        }
      });
      
      // Handle file upload
      if (args.filePath && fs.existsSync(args.filePath)) {
        formData.filePath = {
          filename: args.filePath.split('/').pop(),
          data: args.filePath
        };
      } else {
        throw new Error(`File not found: ${args.filePath}`);
      }
      
      const result = await verbwirePost('/nft/store/uploadMetadata', formData, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "uploadDirectoryToIPFS",
    description: "Upload a directory to IPFS",
    inputSchema: {
      type: "object",
      properties: {
        dirPath: {
          type: "string",
          description: "Path to the directory to upload (local path)"
        }
      },
      required: ["dirPath"]
    },
    handler: async (args, apiKey) => {
      const formData = {};
      
      // Handle directory upload
      if (args.dirPath && fs.existsSync(args.dirPath)) {
        // Create a list of files in the directory
        const files = fs.readdirSync(args.dirPath)
          .filter(file => fs.statSync(`${args.dirPath}/${file}`).isFile());
        
        // Upload each file individually
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          formData[`file${i}`] = {
            filename: file,
            data: `${args.dirPath}/${file}`
          };
        }
      } else {
        throw new Error(`Directory not found: ${args.dirPath}`);
      }
      
      const result = await verbwirePost('/nft/store/uploadDirectory', formData, apiKey);
      return formatSuccess(result);
    }
  },
]; 