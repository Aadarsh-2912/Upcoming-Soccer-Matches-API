# Upcoming Soccer Matches Viewer

This is a simple full-stack web application that displays a list of upcoming soccer matches. It fetches live match data from the Football-Data.org API and shows the two competing teams and the scheduled date/time for each match.

### 🌐 Live Demo
**[View Live](https://upcoming-soccer-matches-api.vercel.app/)**

### 📦 Features
- Fetches upcoming soccer matches using the [Football-Data.org API](https://api.football-data.org/v4/matches)
- Displays home and away teams
- Shows match date and time in local format
- Includes error handling and loading states

### 🚀 Tech Stack
- **Frontend**: React + TypeScript
- **Backend**: Node.js + Express (fetches data from Football-Data.org API)

### 📁 Project Structure
```
/frontend   # React frontend
/backend        # Node.js backend
```

### 🔧 Setup Instructions
1. Clone the repository
2. Install dependencies:
   - In each folder (`frontend` and `backend`): `npm install`
3. Run the backend: `node server.js`
4. Run the frontend: `npm start`
5. Open the frontend in the browser to see the match list

### 📄 License
MIT
