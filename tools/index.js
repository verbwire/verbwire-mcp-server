// Import all tool modules
import { DATA_TOOLS } from './data.js';
import { DEPLOY_TOOLS } from './deploy.js';
import { MINT_TOOLS } from './mint.js';
import { STORAGE_TOOLS } from './storage.js';
import { UTILITY_TOOLS } from './utility.js';
// import { USER_TOOLS } from './user.js'; // Removing this to avoid duplicate tool names
import { USER_OPS_TOOLS } from './userOps.js';
import { UPDATE_TOOLS } from './update.js';
import { BURN_TOOLS } from './burn.js';
import { CROSSCHAIN_TOOLS } from './crosschain.js';
import { TRANSFER_TOOLS } from './transfers.js';

// Combine all tools into a single array
export const TOOLS = [
  ...DATA_TOOLS,
  ...DEPLOY_TOOLS,
  ...MINT_TOOLS,
  ...STORAGE_TOOLS,
  ...UTILITY_TOOLS,
  // ...USER_TOOLS, // Removing this to avoid duplicate tool names
  ...USER_OPS_TOOLS,
  ...UPDATE_TOOLS,
  ...BURN_TOOLS,
  ...CROSSCHAIN_TOOLS,
  ...TRANSFER_TOOLS
]; 