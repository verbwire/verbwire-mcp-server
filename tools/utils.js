import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

// Base URL for the Verbwire API
const API_BASE_URL = 'https://api.verbwire.com/v1';

/**
 * Helper function to make a GET request to the Verbwire API
 * @param {string} endpoint - API endpoint to call
 * @param {Object} params - URL parameters to include
 * @param {string} apiKey - Verbwire API key
 * @returns {Promise<Object>} - API response
 */
export async function verbwireGet(endpoint, params, apiKey) {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config = {
      method: 'get',
      url,
      headers: {
        'accept': 'application/json',
        'X-API-Key': apiKey,
      },
      params,
    };
    
    const response = await axios(config);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`API Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      throw new Error(`Request Error: No response from server`);
    } else {
      throw new Error(`Error: ${error.message}`);
    }
  }
}

/**
 * Helper function to make a POST request to the Verbwire API with form data
 * @param {string} endpoint - API endpoint to call
 * @param {Object} formData - Form data to include in the request
 * @param {string} apiKey - Verbwire API key
 * @returns {Promise<Object>} - API response
 */
export async function verbwirePost(endpoint, formData, apiKey) {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    
    // Create a FormData instance
    const data = new FormData();
    
    // Add all form fields
    for (const [key, value] of Object.entries(formData)) {
      // Special handling for file uploads provided as objects with filename and data
      if (value && typeof value === 'object' && value.filename && value.data) {
        // If it's a file object (used by mint.js and storage.js)
        if (typeof value.data === 'string' && fs.existsSync(value.data)) {
          // If data is a file path
          const fileBuffer = fs.readFileSync(value.data);
          data.append(key, fileBuffer, { filename: value.filename });
        } else {
          // If data is already a buffer or something else
          data.append(key, value.data, { filename: value.filename });
        }
      } else {
        // Regular form field
        data.append(key, value);
      }
    }
    
    const config = {
      method: 'post',
      url,
      headers: {
        'X-API-Key': apiKey,
        ...data.getHeaders()
      },
      data
    };
    
    const response = await axios(config);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`API Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`);
    } else if (error.request) {
      throw new Error(`Request Error: No response from server`);
    } else {
      throw new Error(`Error: ${error.message}`);
    }
  }
}

/**
 * Helper function to format success responses
 * @param {Object} data - The data to return
 * @returns {string} - Formatted success message
 */
export function formatSuccess(data) {
  // Return JSON string directly, no need to further process
  // The MCP server will handle wrapping it in a content object
  return JSON.stringify(data, null, 2);
}

/**
 * Helper function to format error responses
 * @param {Error} error - The error to return
 * @returns {string} - Formatted error message
 */
export function formatError(error) {
  return `Error: ${error.message}`;
} 