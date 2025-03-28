import { verbwirePost, formatSuccess } from './utils.js';

// Burn tools for the Verbwire API
export const BURN_TOOLS = [
  {
    name: "burnNFT",
    description: "Burn an NFT token",
    inputSchema: {
      type: "object",
      properties: {
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where the NFT is deployed"
        },
        contractAddress: {
          type: "string",
          description: "Address of the NFT contract"
        },
        tokenId: {
          type: "string",
          description: "ID of the token to burn"
        },
        quantity: {
          type: "string",
          description: "For ERC1155 Only. Quantity to be burned"
        },
        fromAddress: {
          type: "string",
          description: "For ERC1155 Only. Address from which tokens will be burned"
        },
        contractType: {
          type: "string",
          enum: ["nft721", "nft1155", "nft721A", "onft721"],
          description: "Type of contract (ERC721 or ERC1155)"
        }
      },
      required: ["chain", "contractAddress", "tokenId"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/update/burn', args, apiKey);
      return formatSuccess(result);
    }
  }
]; 