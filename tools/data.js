import { verbwireGet, formatSuccess } from './utils.js';

// Data tools for the Verbwire API
export const DATA_TOOLS = [
  {
    name: "getNFTOwned",
    description: "Get all NFTs owned by a wallet address",
    inputSchema: {
      type: "object",
      properties: {
        walletAddress: {
          type: "string",
          description: "Wallet address to query"
        },
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain to search (default: ethereum)"
        },
        tokenType: {
          type: "string",
          enum: ["nft721", "nft1155", "erc20"],
          description: "Token type to filter by (optional)"
        },
        sortDirection: {
          type: "string",
          enum: ["ASC", "DESC"],
          description: "Sort direction (optional)"
        },
        limit: {
          type: "number",
          description: "Number of results to return (optional)"
        },
        page: {
          type: "number",
          description: "Page number for pagination (optional)"
        }
      },
      required: ["walletAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwireGet('/nft/data/owned', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "getNFTCreated",
    description: "Get all NFTs created by a wallet address",
    inputSchema: {
      type: "object",
      properties: {
        walletAddress: {
          type: "string",
          description: "Wallet address to query"
        },
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain to search (default: ethereum)"
        },
        sortDirection: {
          type: "string",
          enum: ["ASC", "DESC"],
          description: "Sort direction (optional)"
        },
        limit: {
          type: "number",
          description: "Number of results to return (optional)"
        },
        page: {
          type: "number",
          description: "Page number for pagination (optional)"
        }
      },
      required: ["walletAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwireGet('/nft/data/created', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "getTransactions",
    description: "Get all transactions by a wallet address",
    inputSchema: {
      type: "object",
      properties: {
        walletAddress: {
          type: "string",
          description: "Wallet address to query"
        },
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain to search (default: ethereum)"
        },
        sortDirection: {
          type: "string",
          enum: ["ASC", "DESC"],
          description: "Sort direction (optional)"
        },
        limit: {
          type: "number",
          description: "Number of results to return (optional)"
        },
        page: {
          type: "number",
          description: "Page number for pagination (optional)"
        }
      },
      required: ["walletAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwireGet('/nft/data/transactions', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "getNFTDetails",
    description: "Get detailed information about a specific NFT",
    inputSchema: {
      type: "object",
      properties: {
        contractAddress: {
          type: "string",
          description: "NFT contract address"
        },
        tokenId: {
          type: "string",
          description: "NFT Token ID"
        },
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain to search (default: ethereum)"
        },
        populateMetadata: {
          type: "boolean",
          description: "Whether to populate metadata (optional)"
        }
      },
      required: ["contractAddress", "tokenId"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwireGet('/nft/data/nftDetails', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "isWalletHolderOfToken",
    description: "Check if a wallet address is a holder of a specific token",
    inputSchema: {
      type: "object",
      properties: {
        walletAddress: {
          type: "string",
          description: "Wallet address to query"
        },
        contractAddress: {
          type: "string",
          description: "Contract address to query against"
        },
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain to search (default: ethereum)"
        }
      },
      required: ["walletAddress", "contractAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwireGet('/nft/data/isWalletHolderOfToken', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "getFloorPrice",
    description: "Get the latest floor price for an NFT collection by slug or contract address",
    inputSchema: {
      type: "object",
      properties: {
        slug: {
          type: "string",
          description: "NFT project slug (e.g., 'boredapeyachtclub')"
        },
        contractAddress: {
          type: "string",
          description: "NFT contract address (alternative to slug)"
        },
        chain: {
          type: "string",
          enum: ["ethereum"],
          description: "Blockchain to search (currently only ethereum is supported)"
        }
      },
      required: []
    },
    handler: async (args, apiKey) => {
      // Determine which API to call based on whether slug or contractAddress is provided
      if (args.slug) {
        const result = await verbwireGet('/nft/data/lastFloorPriceForSlug', { slug: args.slug, chain: args.chain || 'ethereum' }, apiKey);
        return formatSuccess(result);
      } else if (args.contractAddress) {
        const result = await verbwireGet('/nft/data/lastFloorPriceForContractAddress', { contractAddress: args.contractAddress, chain: args.chain || 'ethereum' }, apiKey);
        return formatSuccess(result);
      } else {
        throw new Error("Either 'slug' or 'contractAddress' must be provided");
      }
    }
  },
  {
    name: "getContractCollections",
    description: "Search or list NFT collections",
    inputSchema: {
      type: "object",
      properties: {
        searchString: {
          type: "string",
          description: "Search term to find collections (leave empty to get all collections)"
        },
        chain: {
          type: "string",
          enum: ["ethereum"],
          description: "Blockchain to search (currently only ethereum is supported)"
        },
        limit: {
          type: "number",
          description: "Number of results to return (default: 25, max: 1000)"
        },
        page: {
          type: "number",
          description: "Page number for pagination (default: 1)"
        }
      },
      required: []
    },
    handler: async (args, apiKey) => {
      if (args.searchString) {
        const result = await verbwireGet('/nft/data/collections/search', args, apiKey);
        return formatSuccess(result);
      } else {
        const result = await verbwireGet('/nft/data/collections/all', args, apiKey);
        return formatSuccess(result);
      }
    }
  }
]; 