# Bright Bridge Realty

This is a React application created for Bright Bridge Realty. It uses the Zillow API to fetch property data.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## Features

- City-Based Real Estate Search: Allows users to conduct tailored searches for real estate listings based on specific cities.
- Property Details Access: Provides comprehensive property information, including address, pricing, number of bedrooms and bathrooms, and total living area.
- Extensive Property Details: Offers a detailed view of each property, supplemented with interior photographs and other relevant property specifics.
- Mortgage Calculator: Incorporates a user-friendly calculator tool for estimating mortgage payments, taking into account principal, interest, and other related factors.
- Client Feedback Mechanism: Features a contact form for clients to submit feedback or inquiries. Messages are directly routed to your preferred email, facilitating prompt and efficient communication.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Bright-Bridge-Realty.git
```

2. Change to the project directory:

```bash
cd Bright-Bridge-Realty
```

3. Install dependencies:

```bash
npm install
```

## Usage

1. Start the development server:

```bash
npm start
```

The application should now be running on \`http://localhost:3000`.

2. Build for production: (Don't use this unless it's for production)

```bash
npm run build
```

This command will create a \`build\` folder containing the optimized production build.

## Environment Variables

To keep your API key and other sensitive information secure, create a \`.env\` file in the root folder of your project and add the following environment variables:

```bash
REACT_APP_RAPIDAPI_KEY="your_api_key"
REACT_APP_RAPIDAPI_HOST="your_api_host"
REACT_APP_OPENCAGE_KEY="your_api_key"
REACT_APP_RECAPTCHA_KEY="your_api_key"
```

Replace \`your_api_key\` and \`your_api_host\` with your actual values.

**Note:** Do not commit the \`.env\` file to your version control system. Add it to your \`.gitignore\` file to ensure it's excluded.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch with a descriptive name, e.g., \`feature-new-search-functionality\`
3. Make your changes on the new branch
4. Push your changes to your fork
5. Create a pull request

Please make sure your code follows best practices and is well-documented.
