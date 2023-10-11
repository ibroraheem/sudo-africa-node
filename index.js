const axios = require('axios')

class SudoAfrica {
    constructor(apiKey, baseUrl) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }
    async createCustomer(data) {
        const options = {
            method: 'POST',
            url: `${this.baseUrl}/customers`,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${this.apiToken}`
            },
            data
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
            method: 'GET',
            url: `${this.baseUrl}/customers?page=${page}&limit=${limit}`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${this.apiToken}`
            }
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
            method: 'GET',
            url: `${this.baseUrl}/customers/${customerId}`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${this.apiToken}`
            }
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
            method: 'PUT',
            url: `${this.baseUrl}/customers/${customerId}`,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${this.apiToken}`
            },
            data: customerData
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
            method: 'PUT',
            url: `${this.baseUrl}/customers/${customerId}/documents/url`,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${this.apiToken}`
            },
            data: {
                fileName: fileName,
                fileType: fileType
            }
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to update customer document URL: ${error.message}`);
        }
    }
    async createCard(data) {
        const options = {
            method: 'POST',
            url: `${this.baseUrl}/cards`,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            },
            data: data
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to create card: ${error.message}`);
        }
    }

    async getCards(page = 0, limit = 100) {
        const options = {
            method: 'GET',
            url: `${this.baseUrl}/cards?page=${page}&limit=${limit}`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            }
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch cards: ${error.message}`);
        }
    }

    async getCardsByCustomer(customerId, page = 0, limit = 100) {
        const options = {
            method: 'GET',
            url: `${this.baseUrl}/cards/customer/${customerId}?page=${page}&limit=${limit}`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            }
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch cards for customer: ${error.message}`);
        }
    }

    async getCardById(cardId) {
        const options = {
            method: 'GET',
            url: `${this.baseUrl}/cards/${cardId}`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            }
        };
        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch card`)
        }
    }
    async sendDefaultCardPin(cardId) {
        const options = {
            method: 'PUT',
            url: `${this.baseUrl}/cards/${cardId}/send-pin`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            }
        };
        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to send default card pin`)
        }
    }

    async updateCardPin(cardId, oldPin, newPin) {
        const options = {
            method: 'PUT',
            url: `${this.baseUrl}/cards/${cardId}/pin`,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            },
            data: {
                oldPin: oldPin,
                newPin: newPin
            }
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to update card PIN: ${error.message}`);
        }
    }

    async enrollCard2fa(cardId) {
        const options = {
            method: 'PUT',
            url: `${this.baseUrl}/cards/${cardId}/enroll2fa`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            }
        };
        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to enroll card in 2FA: ${error.message}`);
        }
    }

    async updateCard(cardId, updateData) {
        const options = {
            method: 'PUT',
            url: `${this.baseUrl}/cards/${cardId}`,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            },
            data: updateData
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to update card: ${error.message}`);
        }
    }

    async getCardToken(cardId) {
        const options = {
            method: 'GET',
            url: `${this.baseUrl}/cards/${cardId}/token`,
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            }
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to get card token: ${error.message}`);
        }
    }

    async orderCards(orderData) {
        const options = {
            method: 'POST',
            url: `${this.baseUrl}/cards/order`,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            },
            data: orderData
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to order cards: ${error.message}`);
        }
    }


}
module.exports = SudoAfrica