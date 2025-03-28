import { verbwireGet, verbwirePost, formatSuccess } from './utils.js';

// Utility tools for the Verbwire API
export const UTILITY_TOOLS = [
  /*{
    name: "testConnection",
    description: "Test the connection to the Verbwire API",
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    },
    handler: async (args, apiKey) => {
      try {
        // Try a simple endpoint that should work
        const result = await verbwireGet('/nft/utility/getSupportedChains', {}, apiKey);
        return formatSuccess({
          status: "success",
          message: "Successfully connected to the Verbwire API",
          apiVersion: "v1",
          supportedChains: result.chains || result
        });
      } catch (error) {
        throw new Error(`API connection test failed: ${error.message}`);
      }
    }
  },
  {
    name: "getSupportedChains",
    description: "Get a list of all supported blockchains",
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    },
    handler: async (args, apiKey) => {
      const result = await verbwireGet('/nft/utility/getSupportedChains', args, apiKey);
      return formatSuccess(result);
    }
  },
  
  {
    name: "getGasPrice",
    description: "Get current gas price for a specific blockchain",
    inputSchema: {
      type: "object",
      properties: {
        chain: {
          type: "string",
          enum: ["ethereum", "goerli", "polygon", "mumbai", "avalanche", "fuji", "optimism", "optimism-goerli", "arbitrum", "arbitrum-goerli", "fantom", "fantom-testnet", "bsc", "bsc-testnet"],
          description: "Blockchain to query"
        }
      },
      required: ["chain"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwireGet('/nft/utility/getGasPrice', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "getFees",
    description: "Get estimated fees for a transaction on a specific blockchain",
    inputSchema: {
      type: "object",
      properties: {
        chain: {
          type: "string",
          enum: ["ethereum", "goerli", "polygon", "mumbai", "avalanche", "fuji", "optimism", "optimism-goerli", "arbitrum", "arbitrum-goerli", "fantom", "fantom-testnet", "bsc", "bsc-testnet"],
          description: "Blockchain to query"
        },
        transactionType: {
          type: "string",
          enum: ["deploy", "mint", "transfer"],
          description: "Type of transaction"
        }
      },
      required: ["chain", "transactionType"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwireGet('/nft/utility/getFees', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "estimateGas",
    description: "Estimate gas for a transaction on a specific blockchain",
    inputSchema: {
      type: "object",
      properties: {
        chain: {
          type: "string",
          enum: ["ethereum", "goerli", "polygon", "mumbai", "avalanche", "fuji", "optimism", "optimism-goerli", "arbitrum", "arbitrum-goerli", "fantom", "fantom-testnet", "bsc", "bsc-testnet"],
          description: "Blockchain to query"
        },
        to: {
          type: "string",
          description: "Target address for the transaction"
        },
        from: {
          type: "string",
          description: "Source address for the transaction"
        },
        data: {
          type: "string",
          description: "Transaction data in hex format"
        },
        value: {
          type: "string",
          description: "Transaction value in wei (optional)"
        }
      },
      required: ["chain", "to", "from", "data"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/utility/estimateGas', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "getTokensInCollection",
    description: "Get all tokens in a specific collection",
    inputSchema: {
      type: "object",
      properties: {
        contractAddress: {
          type: "string",
          description: "Address of the NFT contract"
        },
        chain: {
          type: "string",
          enum: ["ethereum", "goerli", "polygon", "mumbai", "avalanche", "fuji", "optimism", "optimism-goerli", "arbitrum", "arbitrum-goerli", "fantom", "fantom-testnet", "bsc", "bsc-testnet"],
          description: "Blockchain to query"
        }
      },
      required: ["contractAddress", "chain"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwireGet('/nft/utility/getTokensInCollection', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "verifyContract",
    description: "Verify a smart contract on a blockchain explorer",
    inputSchema: {
      type: "object",
      properties: {
        contractAddress: {
          type: "string",
          description: "Address of the contract to verify"
        },
        chain: {
          type: "string",
          enum: ["goerli", "mumbai", "fuji", "optimism-goerli", "arbitrum-goerli", "fantom-testnet", "bsc-testnet"],
          description: "Blockchain where the contract is deployed"
        },
        contractName: {
          type: "string",
          description: "Name of the contract (optional)"
        }
      },
      required: ["contractAddress", "chain"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/utility/verifyContract', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "getVerificationStatus",
    description: "Get the status of a contract verification",
    inputSchema: {
      type: "object",
      properties: {
        verificationId: {
          type: "string",
          description: "ID of the verification to check"
        }
      },
      required: ["verificationId"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/utility/getVerificationStatus', args, apiKey);
      return formatSuccess(result);
    }
  }
    */
]; 