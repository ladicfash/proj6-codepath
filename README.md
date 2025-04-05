# Recipe Dashboard

This project is a React-based data dashboard that fetches recipe data from the Spoonacular API. The dashboard provides summary statistics and allows users to search and filter the data.

## Features

- **Data Fetching:** Uses the Spoonacular API to fetch recipe data.
- **Search:** Allows users to search for recipes by name.
- **Filter:** Allows users to filter recipes by diet type.
- **Summary Statistics:** Displays total number of recipes and other relevant statistics.
- **Dynamic Updates:** The list of recipes dynamically updates as the user types into the search bar or adjusts the filter.


## Getting Started

### Prerequisites

- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ladicfash/my-recipe-dashboard.git
   cd my-recipe-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project and add your Spoonacular API key:

   ```env
   VITE_SPOONACULAR_API_KEY=your_spoonacular_api_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Use the search bar to find recipes by name.
- Use the filter dropdown to filter recipes by diet type.

## Built With

- [React]
- [Vite]
- [Spoonacular API](https://spoonacular.com/food-api) 

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Spoonacular](https://spoonacular.com/) for providing the API.
## GIF Walkthrough

![GIF Walkthrough](walkthrough.gif)
