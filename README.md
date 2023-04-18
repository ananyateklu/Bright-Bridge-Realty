# Bright Bridge Realty

This is a React application created for Bright Bridge Realty. It uses the Zillow API to fetch property data.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## Features

- Search for real estate listings by city
- View property details such as address, price, bedrooms, bathrooms, and living area
- Responsive design that works on both desktop and mobile devices

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

The application should now be running on \`http://localhost:3000\`.

2. Build for production: (Don't use this unless it's for production)

```bash
npm run build
```

This command will create a \`build\` folder containing the optimized production build.

## Environment Variables

To keep your API key and other sensitive information secure, create a \`.env\` file in the root folder of your project and add the following environment variables:

```bash
REACT_APP_RAPIDAPI_KEY=your_api_key
REACT_APP_RAPIDAPI_HOST=your_api_host
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
