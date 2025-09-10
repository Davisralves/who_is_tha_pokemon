# Who is that Pokémon? 🎮

## Description
A full-stack guessing game where players identify Pokémon based on their characteristics (weight, height, and type). Built with a complete separation of concerns using React TypeScript frontend, Express TypeScript backend, and MySQL database, all containerized with Docker.

## Project Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │    Backend      │    │    Database     │
│   (React TS)    │◄──►│   (Express TS)  │◄──►│    (MySQL)      │
│                 │    │                 │    │                 │
│ • Game Logic    │    │ • CRUD API      │    │ • Pokémon Data  │
│ • Pokédex UI    │    │ • Data Fetching │    │ • User Data     │
│ • Routing       │    │ • Validation    │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                        │                        │
        └────────────────────────┼────────────────────────┘
                                 │
                    ┌─────────────────┐
                    │     Docker      │
                    │   Orchestration │
                    └─────────────────┘
```

## Technologies Used

### Frontend
- **React** (TypeScript) - Component-based UI
- **React Router** - Client-side routing
- **React Testing Library & Jest** - Testing framework
- **CSS** - Styling

### Backend
- **Express** (TypeScript) - RESTful API server
- **Node.js** - Runtime environment
- **Chai, Mocha, Sinon** - Testing suite
- **Cors** - Cross-origin resource sharing
- **Dotenv** - Environment configuration

### Database & DevOps
- **MySQL** - Relational database
- **Docker & Docker Compose** - Containerization
- **Prettier** - Code formatting

### External APIs
- **[PokéAPI](https://pokeapi.co/)** - Pokémon data source

## Features

### 🎯 Game Mode
- Random Pokémon selection from database
- Hint-based guessing (weight, height, type)
- 5 attempts per game
- Real-time feedback system
- Win/lose game states

### 📚 Pokédex Mode
- Browse all available Pokémon
- Search and filter functionality
- Full CRUD operations:
  - ✅ View Pokémon details
  - ✅ Add new Pokémon
  - ✅ Edit existing Pokémon
  - ✅ Delete Pokémon

### 🔄 Data Management
- Automatic database seeding from PokéAPI
- Database reset functionality
- Data persistence across sessions

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Fetch all Pokémon |
| `POST` | `/pokemon` | Add new Pokémon |
| `PUT` | `/pokemon` | Edit existing Pokémon |
| `DELETE` | `/pokemon/:name` | Delete Pokémon by name |
| `PUT` | `/restardb` | Reset database with fresh data |

## Project Structure

```
who_is_tha_pokemon/
├── front-end/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   ├── Pages/              # Route components
│   │   ├── services/           # API service layer
│   │   ├── interfaces/         # TypeScript interfaces
│   │   └── helpers/            # Utility functions
│   ├── public/
│   └── Dockerfile
├── back-end/
│   ├── controller/             # Request handlers
│   ├── models/                 # Database models
│   ├── services/               # Business logic
│   ├── interfaces/             # TypeScript interfaces
│   ├── tests/                  # Unit tests
│   └── Dockerfile
├── interfaces/                 # Shared TypeScript interfaces
└── compose.yaml               # Docker orchestration
```

## Getting Started

### Prerequisites
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone git@github.com:Davisralves/who_is_tha_pokemon.git
   cd who_is_tha_pokemon
   ```

2. **Start all services:**
   ```bash
   docker-compose up
   ```
   This command will:
   - Build and start the frontend container (port 3000)
   - Build and start the backend container (port 8000)  
   - Initialize MySQL database with schema
   - Automatically seed database with Pokémon data

3. **Access the application:**
   - **Frontend:** [http://localhost:3000](http://localhost:3000)
   - **Backend API:** [http://localhost:8000](http://localhost:8000)
   - **Database:** `localhost:3306` (if needed)

### Development Mode

For development with hot reloading:

```bash
# Frontend only
cd front-end && npm start

# Backend only  
cd back-end && npm run dev
```

## Testing

```bash
# Frontend tests
cd front-end && npm test

# Backend tests
cd back-end && npm test
```

## Environment Variables

The project uses environment variables for configuration:

- `REACT_APP_API_URL` - Backend API URL for frontend
- `HOST`, `USERNAME`, `PASSWORD`, `DATA_BASE` - Database connection (backend)
- `PORT` - Server port (backend)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Demo

Check out the game in action: [LinkedIn post with video](https://www.linkedin.com/feed/update/urn:li:activity:7183058927096348673)

---

⭐ **Star this repo if you found it helpful!**
