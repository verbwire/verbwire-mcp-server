import { verbwireGet, verbwirePost, formatSuccess } from './utils.js';

// User Operations tools for the Verbwire API
export const USER_OPS_TOOLS = [
  {
    name: "getMintedNFTs",
    description: "Retrieve all NFTs minted with your API key",
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    },
    handler: async (args, apiKey) => {
      const result = await verbwireGet('/nft/userOps/nftsMinted', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "getDeployedContracts",
    description: "Retrieve all contracts deployed with your API key",
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    },
    handler: async (args, apiKey) => {
      const result = await verbwireGet('/nft/userOps/deployedContracts', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "getUploadedIPFSFiles",
    description: "Retrieve all files uploaded to IPFS with your API key",
    inputSchema: {
      type: "object",
      properties: {},
      required: []
    },
    handler: async (args, apiKey) => {
      const result = await verbwireGet('/nft/userOps/ipfsUploads', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "getTransactionDetails",
    description: "Retrieve specific transaction details",
    inputSchema: {
      type: "object",
      properties: {
        transactionId: {
          type: "string",
          description: "ID of the transaction to retrieve details for"
        }
      },
      required: ["transactionId"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/userOps/transactionDetails', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "getPayee",
    description: "Get payee information for a contract",
    inputSchema: {
      type: "object",
      properties: {
        contractAddress: {
          type: "string",
          description: "Address of the contract"
        },
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where the contract is deployed"
        },
        index: {
          type: "string",
          description: "Index of the payee to retrieve"
        }
      },
      required: ["contractAddress", "chain", "index"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/userOps/payeeAtIndex', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "getAllowlistShares",
    description: "Get allowlist shares for a contract",
    inputSchema: {
      type: "object",
      properties: {
        contractAddress: {
          type: "string",
          description: "Address of the contract"
        },
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where the contract is deployed"
        },
        allowListAddress: {
          type: "string",
          description: "Address of the allowlist"
        }
      },
      required: ["contractAddress", "chain", "allowListAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/userOps/allowListSharesForAddress', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "getPayeePaymentDetails",
    description: "Get payee payment details for a contract",
    inputSchema: {
      type: "object",
      properties: {
        contractAddress: {
          type: "string",
          description: "Address of the contract"
        },
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where the contract is deployed"
        },
        payeeAddress: {
          type: "string",
          description: "Address of the payee"
        }
      },
      required: ["contractAddress", "chain", "payeeAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/userOps/contractPaymentDetails', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "getContractBalance",
    description: "Get the balance of a contract",
    inputSchema: {
      type: "object",
      properties: {
        contractAddress: {
          type: "string",
          description: "Address of the contract"
        },
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where the contract is deployed"
        }
      },
      required: ["contractAddress", "chain"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwireGet('/nft/userOps/contractBalance', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "getContractDetails",
    description: "Get detailed information about a contract",
    inputSchema: {
      type: "object",
      properties: {
        contractAddress: {
          type: "string",
          description: "Address of the contract"
        },
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where the contract is deployed"
        }
      },
      required: ["contractAddress", "chain"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwireGet('/nft/userOps/contractDetails', args, apiKey);
      return formatSuccess(result);
    }
  }
]; 