# sudo-africa-node# SudoAfrica Node SDK ![Version Badge](https://img.shields.io/badge/version-1.0.0-blue.svg)

A comprehensive Node.js SDK tailored for the SudoAfrica API, enabling seamless integration of your backend systems with functionalities such as managing customers, cards, transactions, and more.

## Table of Contents

- [SudoAfrica Node SDK ](#sudoafrica-node-sdk-)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Initialization](#initialization)
  - [API Methods](#api-methods)
    - [Customers](#customers)
    - [Cards](#cards)
    - [Transactions](#transactions)
  - [Error Handling](#error-handling)
  - [Examples](#examples)
    - [Create a Customer](#create-a-customer)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

To incorporate the SDK into your project, use npm:

```bash
npm install sudoafrica-sdk
```

## Initialization

Start by importing the module:

```javascript
const SudoAfrica = require('sudoafrica-sdk');
```

Initialize a new instance:

```javascript
const sudo = new SudoAfrica('YOUR_API_KEY', 'YOUR_BASE_URL');
```

## API Methods

### Customers

**createCustomer(data)**
- **Purpose:** Creates a new customer.
- **Parameters:**
  - `data`: Object containing customer details.
- **Returns:** Customer object.

... (Description for all other customer-related methods)

### Cards

**createCard(data)**
- **Purpose:** Initiates a new card.
- **Parameters:**
  - `data`: Object containing card details.
- **Returns:** Card object.

... (Description for all other card-related methods)

### Transactions

**listTransactions(page, limit, fromDate, toDate)**
- **Purpose:** Retrieves a list of transactions within a specified date range.
- **Parameters:**
  - `page`: The page number (default: 0)
  - `limit`: The number of results per page (default: 100)
  - `fromDate`: Start of the date range.
  - `toDate`: End of the date range.
- **Returns:** Array of transaction objects.

... (Description for all other transaction-related methods)

## Error Handling

Each method is designed to provide clear error messages. In case of an API error, the method throws an error with a descriptive message.

```javascript
try {
  const customer = sudo.createCustomer(data);
} catch (error) {
  console.error(`API Error: ${error.message}`);
}
```

## Examples

### Create a Customer

```javascript
const data = {
  name: "John Doe",
  email: "john.doe@example.com",
  ...
};
try {
  const customer = sudo.createCustomer(data);
  console.log('Customer created:', customer);
} catch (error) {
  console.error(error.message);
}
```

... (Provide more examples for various methods)

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and write tests when practical.
4. Commit your changes to the branch.
5. Push the branch to your fork.
6. Open a pull request.

For major changes, please open an issue first to discuss what you'd like to change. Ensure you update tests as appropriate.

## License

This project is licensed under the MIT License.
