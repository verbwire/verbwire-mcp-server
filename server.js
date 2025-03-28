#!/usr/bin/env node
import 'dotenv/config';
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema
} from "@modelcontextprotocol/sdk/types.js";
import { TOOLS } from './tools/index.js';
import fs from 'fs';

// Check for API key in environment variables
const VERBWIRE_API_KEY = process.env.VERBWIRE_API_KEY;
if (!VERBWIRE_API_KEY) {
  throw new Error("VERBWIRE_API_KEY not found in environment variables. Please add it to your .env file.");
}

// Simple logging function
const log = (message) => {
  console.error(`[${new Date().toISOString()}] ${message}`);
};

// Create the MCP server
const server = new Server(
  {
    name: "verbwire-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  }
);

// Handle tool calls
async function handleToolCall(name, args) {
  log(`Tool call: ${name}`);
  try {
    const tool = TOOLS.find(t => t.name === name);
    if (!tool) {
      throw new Error(`Tool not found: ${name}`);
    }
    const result = await tool.handler(args, VERBWIRE_API_KEY);
    return {
      content: [{
        type: "text",
        text: result
      }],
      isError: false
    };
  } catch (error) {
    log(`Error in tool call: ${error.message}`);
    return {
      content: [{
        type: "text",
        text: `Error: ${error.message || 'Unknown error'}`
      }],
      isError: true
    };
  }
}

// Set up request handlers
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: TOOLS
}));

server.setRequestHandler(CallToolRequestSchema, async (request) =>
  handleToolCall(request.params.name, request.params.arguments ?? {})
);

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const { uri } = request.params;
  log(`Resource request: ${uri}`);
  
  // Simple resource handling for file uploads
  if (uri.startsWith('file://')) {
    const filePath = uri.slice(7);
    if (fs.existsSync(filePath)) {
      return {
        content: fs.readFileSync(filePath).toString('base64'),
        contentType: 'application/octet-stream',
        encoding: 'base64'
      };
    } else {
      log(`File not found: ${filePath}`);
      throw new Error(`File not found: ${filePath}`);
    }
  }
  
  log(`Resource not found: ${uri}`);
  throw new Error(`Resource not found: ${uri}`);
});

// Run the server
async function run() {
  // Connect to standard input/output for communication
  const transport = new StdioServerTransport();
  await server.connect(transport);
  
  log('Verbwire MCP server is running...');
  
  // Handle shutdown signals
  process.on('SIGINT', () => {
    log('Shutting down...');
    server.close();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    log('Shutting down...');
    server.close();
    process.exit(0);
  });
}

run().catch(error => {
  log(`Error starting server: ${error.message}`);
  process.exit(1);
}); 