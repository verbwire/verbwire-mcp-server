import { verbwirePost, formatSuccess } from './utils.js';

// Transfer tools for the Verbwire API
export const TRANSFER_TOOLS = [
  {
    name: "emailDigitalAsset",
    description: "Send a digital asset to an email address",
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
          description: "ID of the token to transfer"
        },
        destinationEmail: {
          type: "string",
          description: "Email address of the recipient"
        },
        metadataUrl: {
          type: "string",
          description: "URL of the metadata file to include in the email (optional)"
        },
        claimType: {
          type: "string",
          enum: ["SINGLE_GASLESS_MINT", "GASLESS_MINT_FROM_TEMPLATE"],
          description: "Type of claim to include in the email (optional)"
        },
        note: {
          type: "string",
          description: "Custom message to include in the email (optional)"
        }
      },
      required: ["chain", "contractAddress", "destinationEmail"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/transfers/userClaim/email/asset', args, apiKey);
      return formatSuccess(result);
    }
  }
]; 