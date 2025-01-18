# Dictionary Word Lookup React Application
A modern React application that allows users to search for word definitions, phonetics, origins, and meanings using the Free Dictionary API. Built with React and Mantine UI components.

## Features

- Search for any English word
- View detailed word information including:
  - Phonetic pronunciation
  - Audio pronunciation (when available)
  - Word origins
  - Multiple definitions
  - Examples of usage
  - Synonyms
- Recent search history
- Clean and modern UI using Mantine components
- Responsive design
- Error handling and loading states

## Technologies Used

- React ^19.0.0
- Mantine UI v7
- Axios for API requests
- Free Dictionary API
- Tabler Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher then v18.20.5)
- npm (v6 or higher)

### Installation

1. Clone the repository:
    ### git clone <repository-url>
    ### cd dictionary-word-lookup-react-app

2. Install dependencies:
    ### npm install

3. Start the development server:
    ### npm start

The application will open in your default browser at `http://localhost:3000`.

## Project Structure
src/
├── components/
│ ├── SearchBox.jsx # Search input component
│ └── WordDefinition.jsx # Word details display component
├── services/
│ └── dictionaryApi.js # API integration service
├── App.js # Main application component
└── index.js # Application entry point


## API Reference

This project uses the [Free Dictionary API](https://dictionaryapi.dev/) to fetch word definitions and related data.

Endpoint: `https://api.dictionaryapi.dev/api/v2/entries/en/{word}`

## Features Breakdown

### Search Component
- Real-time input handling
- Clear button functionality
- Error handling for invalid searches

### Word Definition Display
- Phonetic pronunciation with audio playback
- Word origin information
- Part of speech categorization
- Multiple definitions with examples
- Synonym listings
- Visual indicators for audio availability

### User Interface
- Loading states
- Error messages
- Recent search history
- Responsive layout
- Clean and intuitive design

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- [Free Dictionary API](https://dictionaryapi.dev/) for providing the dictionary data
- [Mantine](https://mantine.dev/) for the UI components
- [Tabler Icons](https://tabler-icons.io/) for the icons