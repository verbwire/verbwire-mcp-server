import { verbwireGet, verbwirePost, formatSuccess } from './utils.js';
import fs from 'fs';

// Mint tools for the Verbwire API
export const MINT_TOOLS = [
  {
    name: "quickMintFromFile",
    description: "Mint an Omnichain NFT directly from an image file",
    inputSchema: {
      type: "object",
      properties: {
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where to mint the NFT"
        },
        contractAddress: {
          type: "string", 
          description: "Address of the contract"
        },
        recipientAddress: {
          type: "string",
          description: "Address to receive the NFT"
        },
        filePath: {
          type: "string",
          description: "Path to the file to mint (local path)"
        },
        name: {
          type: "string",
          description: "Name of the NFT"
        },
        description: {
          type: "string",
          description: "Description of the NFT"
        },
        data: {
          type: "string",
          description: "Additional data for the NFT (for OpenSea attributes format: [{\"trait_type\":\"Trait\",\"value\":\"Value\"}])"
        },
        tokenId: {
          type: "string",
          description: "Token ID (only for ERC1155)"
        },
        quantity: {
          type: "string",
          description: "Quantity to mint (only for ERC1155)"
        }
      },
      required: ["chain", "description", "filePath", "name"]
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
      
      const result = await verbwirePost('/nft/mint/quickMintFromFile', formData, apiKey);
      return formatSuccess(result);
    }
  },
  
  {
    name: "quickMintFromMetadataUrl",
    description: "Mint an Omnichain NFT directly from a provided metadata file URL",
    inputSchema: {
      type: "object",
      properties: {
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where to mint the NFT"
        },
        contractAddress: {
          type: "string", 
          description: "Address of the contract"
        },
        recipientAddress: {
          type: "string",
          description: "Address to receive the NFT"
        },
        metadataUrl: {
          type: "string",
          description: "URL to the metadata"
        },
        data: {
          type: "string",
          description: "Additional data for the NFT"
        },
        tokenId: {
          type: "string",
          description: "Token ID (only for ERC1155)"
        },
        quantity: {
          type: "string",
          description: "Quantity to mint (only for ERC1155)"
        }
      },
      required: ["chain", "metadataUrl"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/mint/quickMintFromMetadataUrl', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "quickMintFromMetadata",
    description: "Mint an Omnichain NFT from provided metadata",
    inputSchema: {
      type: "object",
      properties: {
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where to mint the NFT"
        },
        recipientAddress: {
          type: "string",
          description: "Address to receive the NFT"
        },
        name: {
          type: "string",
          description: "Name of the NFT"
        },
        description: {
          type: "string",
          description: "Description of the NFT"
        },
        imageUrl: {
          type: "string",
          description: "URL to the image to use for the NFT"
        },
        data: {
          type: "string",
          description: "Additional data for the NFT"
        },
      },
      required: ["chain", "data"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/mint/quickMintFromMetadata', args, apiKey);
      return formatSuccess(result);
    }
  },
  
  {
    name: "mintFromFile",
    description: "Mint an NFT from an image file",
    inputSchema: {
      type: "object",
      properties: {
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where to mint the NFT"
        },
        contractAddress: {
          type: "string", 
          description: "Address of the contract"
        },
        recipientAddress: {
          type: "string",
          description: "Address to receive the NFT"
        },
        filePath: {
          type: "string",
          description: "Path to the file to mint (local path)"
        },
        name: {
          type: "string",
          description: "Name of the NFT"
        },
        description: {
          type: "string",
          description: "Description of the NFT"
        },
        data: {
          type: "string",
          description: "Additional data for the NFT (for OpenSea attributes format: [{\"trait_type\":\"Trait\",\"value\":\"Value\"}])"
        },
        tokenId: {
          type: "string",
          description: "Token ID (only for ERC1155)"
        },
        quantity: {
          type: "string",
          description: "Quantity to mint (only for ERC1155)"
        }
      },
      required: ["chain", "contractAddress", "filePath", "name", "description"]
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
      
      const result = await verbwirePost('/nft/mint/mintFromFile', formData, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "mintFromMetadataUrl",
    description: "Mint an NFT from a metadata URL",
    inputSchema: {
      type: "object",
      properties: {
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where to mint the NFT"
        },
        contractAddress: {
          type: "string", 
          description: "Address of the contract"
        },
        recipientAddress: {
          type: "string",
          description: "Address to receive the NFT"
        },
        metadataUrl: {
          type: "string",
          description: "URL to the metadata"
        },
        data: {
          type: "string",
          description: "Additional data for the NFT"
        },
        tokenId: {
          type: "string",
          description: "Token ID (only for ERC1155)"
        },
        quantity: {
          type: "string",
          description: "Quantity to mint (only for ERC1155)"
        }
      },
      required: ["chain", "contractAddress", "metadataUrl"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/mint/mintFromMetadataUrl', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "mintFromMetadata",
    description: "Mint an NFT from provided metadata",
    inputSchema: {
      type: "object",
      properties: {
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where to mint the NFT"
        },
        contractAddress: {
          type: "string", 
          description: "Address of the contract"
        },
        recipientAddress: {
          type: "string",
          description: "Address to receive the NFT"
        },
        name: {
          type: "string",
          description: "Name of the NFT"
        },
        description: {
          type: "string",
          description: "Description of the NFT"
        },
        imageUrl: {
          type: "string",
          description: "URL to the image to use for the NFT"
        },
        externalUrl: {
          type: "string",
          description: "External URL for the NFT"
        },
        attributes: {
          type: "string",
          description: "Attributes for the NFT in JSON format: [{\"trait_type\":\"Trait\",\"value\":\"Value\"}]"
        },
        data: {
          type: "string",
          description: "Additional data for the NFT"
        },
        tokenId: {
          type: "string",
          description: "Token ID (only for ERC1155)"
        },
        quantity: {
          type: "string",
          description: "Quantity to mint (only for ERC1155)"
        }
      },
      required: ["chain", "contractAddress", "data"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/mint/mintFromMetadata', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "collectionReserveMint",
    description: "Mint an NFT to a wallet address from your collection",
    inputSchema: {
      type: "object",
      properties: {
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where to mint the NFT"
        },
        contractAddress: {
          type: "string", 
          description: "Address of the contract"
        },
        recipientAddress: {
          type: "string",
          description: "Address to receive the NFT"
        },
        tokenId: {
          type: "string",
          description: "Token ID to mint"
        },
        quantity: {
          type: "string",
          description: "Quantity to mint (only for ERC1155)"
        }
      },
      required: ["chain", "contractAddress", "recipientAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/mint/collectionReserveMint', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "createToken1155",
    description: "Create a new token in an ERC-1155 contract",
    inputSchema: {
      type: "object",
      properties: {
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where to create the token"
        },
        contractAddress: {
          type: "string", 
          description: "Address of the ERC-1155 contract"
        },
        tokenId: {
          type: "string",
          description: "Token ID to create (optional, will be auto-generated if not provided)"
        },
        metadataUrl: {
          type: "string",
          description: "URL to the token metadata"
        },
        tokenInitialSupply: {
          type: "string",
          description: "Initial supply of the token"
        }
      },
      required: ["chain", "contractAddress", "tokenInitialSupply"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/mint/createToken1155', args, apiKey);
      return formatSuccess(result);
    }
  },
 
]; 