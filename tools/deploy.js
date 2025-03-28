import { verbwireGet, verbwirePost, formatSuccess } from './utils.js';

// Deploy tools for the Verbwire API
export const DEPLOY_TOOLS = [
  {
    name: "deployContract",
    description: "Deploy your smart contract in seconds, supporting multiple contract types",
    inputSchema: {
      type: "object",
      properties: {
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where to deploy the contract"
        },
        contractType: {
          type: "string",
          enum: ["nft721", "nft1155", "nft721A", "omnichain721", "erc20", "commerce"],
          description: "Type of contract to deploy"
        },
        contractName: {
          type: "string",
          description: "Name of the contract"
        },
        contractSymbol: {
          type: "string",
          description: "Symbol for the contract"
        },
        recipientAddress: {
          type: "string",
          description: "Wallet address that will receive the deployed contract"
        },
        description: {
          type: "string",
          description: "Description of the contract (optional)"
        },
        maxSupply: {
          type: "string",
          description: "Maximum supply of tokens (optional)"
        },
        royaltyRecipient: {
          type: "string",
          description: "Address to receive royalties (optional)"
        },
        royaltyBps: {
          type: "string",
          description: "Royalty amount in basis points, e.g., 250 = 2.5% (optional)"
        },
        deploymentName: {
          type: "string",
          description: "Name for this deployment (optional)"
        },
        baseURI: {
          type: "string",
          description: "Base URI for the token metadata (optional)"
        },
        isRevokable: {
          type: "boolean",
          description: "Whether tokens can be revoked (optional)"
        }
      },
      required: ["chain", "contractType", "contractName", "contractSymbol", "recipientAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/deploy/deployContract', args, apiKey);
      return formatSuccess(result);
    }
  },

]; 