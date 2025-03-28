import { verbwirePost, formatSuccess } from './utils.js';

// Update tools for the Verbwire API
export const UPDATE_TOOLS = [
  {
    name: "transferToken",
    description: "Transfer NFT across wallet addresses",
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
        fromAddress: {
          type: "string",
          description: "Address that currently owns the NFT"
        },
        toAddress: {
          type: "string",
          description: "Address to transfer the NFT to"
        },
        quantity: {
          type: "string",
          description: "Quantity to transfer (only for ERC1155)"
        }
      },
      required: ["chain", "contractAddress", "tokenId", "fromAddress", "toAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/update/transferToken', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "updateTokenMetadata",
    description: "Update NFT Metadata",
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
          description: "ID of the token to update"
        },
        newTokenUri: {
          type: "string",
          description: "New metadata URI for the NFT"
        }
      },
      required: ["chain", "contractAddress", "tokenId", "newTokenUri"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/update/updateTokenMetadata', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "freezeMetadata",
    description: "Freeze metadata on the NFT contract",
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
        }
      },
      required: ["chain", "contractAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/update/freezeMetadata', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "setMintPrice",
    description: "Set the mint price for a contract",
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
        mintPriceInWei: {
          type: "string",
          description: "New mint price in native token (e.g., '0.01')"
        }
      },
      required: ["chain", "contractAddress", "mintPriceInWei"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/update/setMintPrice', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "setAllowlistMintPrice",
    description: "Set the mint price for allowlisted addresses",
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
        allowListMintPriceInWei: {
          type: "string",
          description: "New allowlist mint price in native token (e.g., '0.005')"
        }
      },
      required: ["chain", "contractAddress", "allowListMintPriceInWei"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/update/setAllowlistMintPrice', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "withdrawFunds",
    description: "Withdraw funds from a contract",
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
        }
      },
      required: ["chain", "contractAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/update/withdrawFunds', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "withdrawFundsToWallet",
    description: "Withdraw funds from a contract to a specific wallet",
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
        withdrawAddress: {
          type: "string",
          description: "Address to receive the withdrawn funds"
        }
      },
      required: ["chain", "contractAddress", "withdrawAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/update/withdrawFundsToWallet', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "transferOperator",
    description: "Transfer contract operator role to another wallet",
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
        newOperatorAddress: {
          type: "string",
          description: "Address of the new operator"
        }
      },
      required: ["chain", "contractAddress", "newOperatorAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/update/transferOperator', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "addToAllowlist",
    description: "Add addresses to the contract allowlist",
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
        addresses: {
          type: "string",
          description: "Comma-separated list of wallet addresses to add to the allowlist"
        },
        mintSlots: {
          type: "string",
          description: "Number of mint slots to allocate to the addresses (optional)"
        }
      },
      required: ["chain", "contractAddress", "addresses", "mintSlots"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/update/addToAllowlist', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "initCollectionContract",
    description: "Initialize your collection contract",
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
        maxMintPerAddress: {
          type: "string",
          description: "Maximum number of NFTs that can be minted per wallet address"
        },
        totalReserveQty: {
          type: "string",
          description: "Total number of NFTs to be reserved"
        },
        totalAllowlistQty: {
          type: "string",
          description: "Total number of NFTs planned for your allowlist"
        },
        maxSupply: {
          type: "string",
          description: "Maximum number of NFTs to be minted on this contract"
        },
        maxMintableBatchSize: {
          type: "string",
          description: "Maximum number of NFTs that can be minted in one transaction"
        },
        royaltiesInBps: {
          type: "string",
          description: "Royalties, in basis points. Note, 100 basis points is 1 percent"
        },
        royaltiesAddress: {
          type: "string",
          description: "Wallet address for your sales royalties"
        },
        ownerAddress: {
          type: "string",
          description: "Wallet address of contract owner"
        },
        tokenURIPrereveal: {
          type: "string",
          description: "URI of your pre-reveal image, if applicable"
        },
        baseTokenURI: {
          type: "string",
          description: "Base token URI. This gets concatenated with your tokenID to return a tokenURI"
        },
        allowListMintStartTime: {
          type: "string",
          description: "StartTime of allowlist Minting. Time should be in epoch format."
        },
        publicSaleStartTime: {
          type: "string",
          description: "StartTime of public Minting. Time should be in epoch format."
        },
        allowlistMintPriceInWei: {
          type: "string",
          description: "Mint price for your allow list members. Input price in Wei."
        },
        publicPriceInWei: {
          type: "string",
          description: "Mint price for public minting, i.e not on allow-list and not reserved. Input price in Wei."
        },
        metadataFrozen: {
          type: "string",
          description: "Whether metadata is frozen (true/false). Once set to true you can no longer change the NFT metadata."
        }
      },
      required: ["chain", "contractAddress", "maxMintPerAddress", "totalReserveQty", "totalAllowlistQty", "maxSupply", "maxMintableBatchSize", "royaltiesInBps", "royaltiesAddress", "ownerAddress", "baseTokenURI", "allowListMintStartTime", "publicSaleStartTime", "allowlistMintPriceInWei", "publicPriceInWei", "metadataFrozen"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/update/initCollectionContract', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "updateContract",
    description: "Update collection contract settings",
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
        tokenURIPrereveal: {
          type: "string",
          description: "URI of your pre-reveal image, if applicable"
        },
        allowListMintStartTime: {
          type: "string",
          description: "StartTime of allowlist Minting. Time should be in epoch format."
        },
        publicSaleStartTime: {
          type: "string",
          description: "StartTime of public Minting. Time should be in epoch format."
        },
        allowlistMintPriceInWei: {
          type: "string",
          description: "Mint price for allowlist minting. Input price in Wei."
        },
        publicPriceInWei: {
          type: "string",
          description: "Mint price for public minting, i.e not on allow-list and not reserved. Input price in Wei."
        },
        metadataFrozen: {
          type: "string",
          description: "Once set to true you can no longer change the NFT metadata"
        },
        baseTokenURI: {
          type: "string",
          description: "Base token URI. This gets concatenated with your tokenID to return a tokenURI"
        }
      },
      required: ["chain", "contractAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/deploy/updateContract', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "setPaymentPrice",
    description: "Set a payment price for your Commerce Contract",
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
          description: "Address of the commerce contract"
        },
        newPaymentPriceInWei: {
          type: "string",
          description: "Payment price in native token (e.g., '0.01')"
        }
      },
      required: ["chain", "contractAddress", "newPaymentPriceInWei"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/update/setPaymentPrice', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "togglePublicMinting",
    description: "Pause or unpause public minting for a contract",
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
      },
      required: ["chain", "contractAddress"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/update/togglePublicMinting', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "setMaxMintQuantityPerBatch",
    description: "Set the maximum number of tokens that can be minted in a single transaction",
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
        quantity: {
          type: "string",
          description: "Maximum number of tokens that can be minted in one transaction"
        }
      },
      required: ["chain", "contractAddress", "quantity"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/update/setMaxMintQuantityPerBatch', args, apiKey);
      return formatSuccess(result);
    }
  },
  {
    name: "addPayee",
    description: "Add a payee to receive split payments from a commerce contract",
    inputSchema: {
      type: "object",
      properties: {
        chain: {
          type: "string",
          enum: ["sepolia", "mumbai", "fuji", "optimism-sepolia", "arbitrum-sepolia", "base-sepolia", "fantom-testnet", "ethereum", "polygon", "avalanche", "optimism", "arbitrum", "base", "fantom", "bsc", "bsc-testnet", "goerli", "optimism-goerli", "arbitrum-goerli", "base-goerli"],
          description: "Blockchain where the commerce contract is deployed"
        },
        contractAddress: {
          type: "string",
          description: "Address of the commerce contract"
        },
        payeeAddress: {
          type: "string",
          description: "Address of the payee to add"
        },
        payeeShares: {
          type: "string",
          description: "Number of shares to allocate to this payee"
        }
      },
      required: ["chain", "contractAddress", "payeeAddress", "payeeShares"]
    },
    handler: async (args, apiKey) => {
      const result = await verbwirePost('/nft/update/addPayee', args, apiKey);
      return formatSuccess(result);
    }
  }
]; 