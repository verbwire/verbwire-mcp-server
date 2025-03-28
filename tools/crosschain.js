import { verbwirePost, formatSuccess } from './utils.js';

// Cross-chain send tools for the Verbwire API
export const CROSSCHAIN_TOOLS = [
  {
    name: "sendQuickMintedNFTAcrossChains",
    description: "Send a quick-minted NFT across blockchains",
    inputSchema: {
      type: "object",
      properties: {
        sourceChain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Source blockchain where the NFT currently exists"
        },
        destChain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Destination blockchain where the NFT will be sent"
        },
        sourceWalletAddress: {
          type: "string",
          description: "Source wallet address"
        },
        recipientWalletAddress: {
          type: "string",
          description: "Recipient wallet address"
        },
        tokenId: {
          type: "string",
          description: "ID of the token to send across chains"
        }
      },
      required: ["sourceChain", "destChain", "sourceWalletAddress", "recipientWalletAddress", "tokenId"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/crosschain/sendQuickMintedNFTAcrossChains', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "enableCrossChainSends",
    description: "Enable cross-chain sends for a contract",
    inputSchema: {
      type: "object",
      properties: {
        sourceChain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where the NFT contract is deployed"
        },
        destChain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Destination blockchain where the NFT will be sent"
        },
        sourceContractAddress: {
          type: "string",
          description: "Address of the NFT contract"
        },
        destContractAddress: {
          type: "string",
          description: "Address of the NFT contract on the destination chain"
        }
      },
      required: ["sourceChain", "destChain", "sourceContractAddress", "destContractAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/crosschain/enableCrossChainSends', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "sendNFTAcrossChains",
    description: "Send an NFT across blockchains",
    inputSchema: {
      type: "object",
      properties: {
        sourceChain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Source blockchain where the NFT currently exists"
        },
        destChain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Destination blockchain where the NFT will be sent"
        },
        sourceWalletAddress: {
          type: "string",
          description: "Source wallet address"
        },
        recipientWalletAddress: {
          type: "string",
          description: "Recipient wallet address"
        },
        tokenId: {
          type: "string",
          description: "ID of the token to send across chains"
        }
      },
      required: ["sourceChain", "destChain", "sourceWalletAddress", "recipientWalletAddress", "tokenId"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/crosschain/sendNFTAcrossChains', args, apiKey);
      return formatSuccess(result);
    }
  }
]; 