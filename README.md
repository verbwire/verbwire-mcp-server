# Verbwire MCP Server

An MCP server implementation that provides tools for interacting with the [Verbwire API](https://docs.verbwire.com/), allowing for blockchain operations like deploying smart contracts, minting NFTs, and managing IPFS storage.

## Features

* **Data Operations**: Query NFT ownership, collections, and transaction details
* **Smart Contract Deployment**: Deploy and manage different types of NFT contracts
* **NFT Minting**: Create NFTs from files, metadata, or URLs with various options
* **IPFS Storage**: Upload files and metadata to IPFS with reliable storage
* **Cross-Chain Operations**: Send NFTs across multiple blockchains
* **Contract Management**: Update contract settings, add allowlists, manage payments
* **Utility Functions**: Access blockchain data, gas prices, and verification services

## Tools

The server provides over 50 tools across multiple categories:

* **Data Tools**
  * Get NFTs owned/created by a wallet
  * Get transaction details
  * Check token ownership
  * Get collection information
  
* **Deploy Tools**
  * Deploy various NFT contract types
  * Configure deployment parameters
  
* **Mint Tools**
  * Quick mint from files and metadata
  * Mint to specific contracts
  * Create and mint tokens
  
* **Storage Tools**
  * Upload files to IPFS
  * Create and store NFT metadata
  * Upload entire directories
  
* **Update Tools**
  * Transfer tokens between wallets
  * Modify NFT metadata
  * Manage contract settings
  * Handle allowlists and payouts
  
* **Utility Tools**
  * Get chain information
  * Verify smart contracts
  * Estimate transaction costs

## Configuration

### Getting an API Key

1. Sign up for a Verbwire account at [verbwire.com](https://www.verbwire.com/)
2. Obtain your API key from the dashboard

### Usage with Claude Desktop

Add this to your `claude_desktop_config.json`:

#### NPX Method

```json
{
  "mcpServers": {
    "verbwire": {
      "command": "npx",
      "args": [
        "-y",
        "@verbwire/verbwire-mcp-server"
      ],
      "env": {
        "VERBWIRE_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}
```

#### Local Installation

If you've cloned this repository:

```json
{
  "mcpServers": {
    "verbwire": {
      "command": "node",
      "args": [
        "/path/to/verbwire-mcp-server/server.js"
      ],
      "env": {
        "VERBWIRE_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}
```

## Local Development

If you want to develop or modify this MCP server:

1. Clone this repository
2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory:

```
VERBWIRE_API_KEY=your_api_key_here
```

4. Start the server:

```bash
npm start
```

## Example Tool Usage

### Deploying an NFT Contract

```json
{
  "name": "deployContract",
  "arguments": {
    "chain": "mumbai",
    "contractType": "nft721",
    "contractName": "My Collection",
    "contractSymbol": "MC",
    "recipientAddress": "0x..."
  }
}
```

### Minting an NFT from a File

```json
{
  "name": "quickMintFromFile",
  "arguments": {
    "chain": "mumbai",
    "filePath": "/path/to/image.jpg",
    "name": "My NFT",
    "description": "A unique digital asset"
  }
}
```

### Uploading to IPFS

```json
{
  "name": "uploadFileToIPFS",
  "arguments": {
    "filePath": "/path/to/file.png",
    "name": "My Artwork",
    "description": "A beautiful digital artwork"
  }
}
```

## License

MIT 