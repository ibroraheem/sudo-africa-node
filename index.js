const axios = require("axios");

class SudoAfrica {
    constructor(apiKey, baseUrl) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.getHeaders = () => {
            return {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Bearer ${this.apiKey}`
            };
        }
    }

    async createCustomer(data) {
        const options = {
            method: "POST",
            url: `${this.baseUrl}/customers`,
            headers: this.getHeaders(),
            data,
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to create customer: ${error.message}`);
        }
    }

    async getCustomers(page = 0, limit = 100) {
        const options = {
            method: "GET",
            url: `${this.baseUrl}/customers?page=${page}&limit=${limit}`,
            headers: this.getHeaders(),
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to fetch customers: ${error.message}`);
        }
    }

    async getCustomerById(customerId) {
        const options = {
            method: "GET",
            url: `${this.baseUrl}/customers/${customerId}`,
            headers: this.getHeaders(),
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to fetch customer: ${error.message}`);
        }
    }

    async updateCustomer(customerId, customerData) {
        const options = {
            method: "PUT",
            url: `${this.baseUrl}/customers/${customerId}`,
            headers: this.getHeaders(),
            data: customerData,
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to update customer: ${error.message}`);
        }
    }

    async updateCustomerDocumentUrl(customerId, fileName, fileType) {
        const options = {
            method: "PUT",
            url: `${this.baseUrl}/customers/${customerId}/documents/url`,
            headers: this.getHeaders(),
            data: {
                fileName: fileName,
                fileType: fileType,
            },
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(
                `Failed to update customer document URL: ${error.message}`
            );
        }
    }

    async createFundingSource(type, status) {
        const options = {
            method: "POST",
            url: `${this.baseUrl}/fundingsources`,
            headers: this.getHeaders(),
            data: { type, status },
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to create funding source: ${error.message}`);
        }
    }

    async getFundingSources() {
        const options = {
            method: "GET",
            url: `${this.baseUrl}/fundingsources`,
            headers: this.getHeaders(),
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to create funding source: ${error.message}`);
        }
    }

    async getFundingSource(id) {
        const options = {
            method: "GET",
            url: `${this.baseUrl}/fundingsources/${id}`,
            headers: this.getHeaders(),
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to retrieve funding source: ${error.message}`);
        }
    }

    async updateFundingSource(id, status) {
        const options = {
            method: "PUT",
            url: `${this.baseUrl}/fundingsources/${id}`,
            headers: this.getHeaders(),
            data: { status }
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to update funding source: ${error.message}`);
        }
    }

    async createCard(data) {
        const options = {
            method: "POST",
            url: `${this.baseUrl}/cards`,
            headers: this.getHeaders(),
            data: data,
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to create card: ${error.message}`);
        }
    }

    async getCards(page = 0, limit = 100) {
        const options = {
            method: "GET",
            url: `${this.baseUrl}/cards?page=${page}&limit=${limit}`,
            headers: this.getHeaders(),
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to fetch cards: ${error.message}`);
        }
    }

    async getCardsByCustomer(customerId, page = 0, limit = 100) {
        const options = {
            method: "GET",
            url: `${this.baseUrl}/cards/customer/${customerId}?page=${page}&limit=${limit}`,
            headers: this.getHeaders(),
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to fetch cards for customer: ${error.message}`);
        }
    }

    async getCardById(cardId) {
        const options = {
            method: "GET",
            url: `${this.baseUrl}/cards/${cardId}`,
            headers: this.getHeaders(),
        };
        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to fetch card`);
        }
    }

    async sendDefaultCardPin(cardId) {
        const options = {
            method: "PUT",
            url: `${this.baseUrl}/cards/${cardId}/send-pin`,
            headers: this.getHeaders(),
        };
        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to send default card pin`);
        }
    }

    async updateCardPin(cardId, oldPin, newPin) {
        const options = {
            method: "PUT",
            url: `${this.baseUrl}/cards/${cardId}/pin`,
            headers: this.getHeaders(),
            data: {
                oldPin: oldPin,
                newPin: newPin,
            },
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to update card PIN: ${error.message}`);
        }
    }

    async enrollCard2fa(cardId) {
        const options = {
            method: "PUT",
            url: `${this.baseUrl}/cards/${cardId}/enroll2fa`,
            headers: this.getHeaders(),
        };
        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to enroll card in 2FA: ${error.message}`);
        }
    }

    async updateCard(cardId, updateData) {
        const options = {
            method: "PUT",
            url: `${this.baseUrl}/cards/${cardId}`,
            headers: this.getHeaders(),
            data: updateData,
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to update card: ${error.message}`);
        }
    }

    async getCardToken(cardId) {
        const options = {
            method: "GET",
            url: `${this.baseUrl}/cards/${cardId}/token`,
            headers: this.getHeaders(),
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to get card token: ${error.message}`);
        }
    }

    async orderCards(orderData) {
        const options = {
            method: "POST",
            url: `${this.baseUrl}/cards/order`,
            headers: this.getHeaders(),
            data: orderData,
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to order cards: ${error.message}`);
        }
    }

    async getCardAuthorizations(page = 0, limit = 100, fromDate, toDate) {
        const options = {
            method: "GET",
            url: `${this.baseUrl}/cards/authorizations?page=${page}&limit=${limit}&fromDate=${fromDate}&toDate=${toDate}`,
            headers: this.getHeaders(),
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to fetch card authorizations: ${error.message}`);
        }
    }

    async getCardSpecificAuthorizations(
        cardId,
        page = 0,
        limit = 100,
        fromDate,
        toDate
    ) {
        const options = {
            method: "GET",
            url: `${this.baseUrl}/cards/${cardId}/authorizations?page=${page}&limit=${limit}&fromDate=${fromDate}&toDate=${toDate}`,
            headers: this.getHeaders(),
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            throw new Error(
                `Failed to fetch authorizations for card ${cardId}: ${error.message}`
            );
        }
    }

    async getAuthorizationByAuthorizationId(authorizationId) {
        const options = {
            method: "GET",
            url: `${this.baseUrl}/cards/authorizations/${authorizationId}`,
            headers: this.getHeaders(),
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(
                `Failed to fetch authorization by id ${authorizationId}: ${error.message}`
            );
        }
    }

    async updateAuthorizationMetadata(authorizationId, metadata) {
        const options = {
            method: "PUT",
            url: `${this.baseUrl}/cards/authorizations/${authorizationId}`,
            headers: this.getHeaders(),
            data: { metadata },
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(
                `Failed to update authorization metadata for id ${authorizationId}: ${error.message}`
            );
        }
    }

    async createDispute(reason, transactionId, explanation, metadata = {}) {
        const options = {
            method: "POST",
            url: `${this.baseUrl}/cards/disputes`,
            headers: this.getHeaders(),
            data: {
                reason,
                metadata,
                transactionId,
                explanation,
            },
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to create dispute: ${error.message}`);
        }
    }

    async getDisputes(page = 0, limit = 100) {
        const options = {
            method: "GET",
            url: `${this.baseUrl}/cards/disputes?page=${page}&limit=${limit}`,
            headers: this.getHeaders(),
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to fetch disputes: ${error.message}`);
        }
    }

    async updateDispute(disputeId, updateData) {
        const options = {
            method: "PUT",
            url: `${this.baseUrl}/cards/disputes/${disputeId}`,
            headers: this.getHeaders(),
            data: updateData,
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to update dispute: ${error.message}`);
        }
    }

    async listTransactions(page = 0, limit = 100, fromDate, toDate) {
        const options = {
            method: "GET",
            url: `${this.baseUrl}/cards/transactions?page=${page}&limit=${limit}&fromDate=${fromDate}&toDate=${toDate}`,
            headers: this.getHeaders(),
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to list transactions: ${error.message}`);
        }
    }

    async getTransactionById(transactionId) {
        const options = {
            method: "GET",
            url: `${this.baseUrl}/cards/transactions/${transactionId}`,
            headers: this.getHeaders(),
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to get transaction by ID: ${error.message}`);
        }
    }

    fetchCardTransactions(cardId, page = 0, limit = 100, fromDate, toDate) {
        const options = {
            method: 'GET',
            url: `${this.baseUrl}/cards/${cardId}/transactions/?${page}&${limit}&${fromDate}&${toDate}`,
            headers: this.getHeaders()
        };

        return axios
            .request(options)
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
                throw new Error(`Failed to fetch card transactions: ${error.message}`);
            });
    }

    async updateTransaction(transactionId, updateData) {
        const options = {
            method: "PUT",
            url: `${this.baseUrl}/cards/transactions/${transactionId}`,
            headers: this.getHeaders(),
            data: updateData,
        };

        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(`Failed to update transaction: ${error.message}`);
        }
    }
}
module.exports = SudoAfrica;
