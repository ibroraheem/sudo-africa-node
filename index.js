const axios = require("axios");

class SudoAfrica {
  constructor(apiKey, baseUrl) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async createCustomer(data) {
    const options = {
      method: "POST",
      url: `${this.baseUrl}/customers`,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${this.apiToken}`,
      },
      data,
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to create customer: ${error.message}`);
    }
  }
  async getCustomers(page = 0, limit = 100) {
    const options = {
      method: "GET",
      url: `${this.baseUrl}/customers?page=${page}&limit=${limit}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${this.apiToken}`,
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch customers: ${error.message}`);
    }
  }
  async getCustomerById(customerId) {
    const options = {
      method: "GET",
      url: `${this.baseUrl}/customers/${customerId}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${this.apiToken}`,
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch customer: ${error.message}`);
    }
  }
  async updateCustomer(customerId, customerData) {
    const options = {
      method: "PUT",
      url: `${this.baseUrl}/customers/${customerId}`,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${this.apiToken}`,
      },
      data: customerData,
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to update customer: ${error.message}`);
    }
  }
  async updateCustomerDocumentUrl(customerId, fileName, fileType) {
    const options = {
      method: "PUT",
      url: `${this.baseUrl}/customers/${customerId}/documents/url`,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${this.apiToken}`,
      },
      data: {
        fileName: fileName,
        fileType: fileType,
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error(
        `Failed to update customer document URL: ${error.message}`
      );
    }
  }

  async createFundingSource(type, status) {
    const axios = require("axios");

    const options = {
      method: "POST",
      url: `${this.baseUrl}/fundingsources`,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${this.apiToken}`,
      },
      data: { type, status },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to create funding source: ${error.message}`);
    }
  }
  async getFundingSources() {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: `${this.baseUrl}/fundingsources`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${this.apiToken}`,
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to create funding source: ${error.message}`);
    }
  }
  async getFundingSource(id) {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: `${this.baseUrl}/fundingsources/${id}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${this.apiToken}`,
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to create funding source: ${error.message}`);
    }
  }
  async getFundingSource(id, status) {
    const axios = require("axios");

    const options = {
      method: "PUT",
      url: `${this.baseUrl}/fundingsources/${id}`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${this.apiToken}`,
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to create funding source: ${error.message}`);
    }
  }
}

module.exports = SudoAfrica;
