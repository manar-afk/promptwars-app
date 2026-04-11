# PulsePoint 🏟️
**Smart Stadium Nav & Real-Time Wait Tracker**

PulsePoint is a React-based functional prototype built to minimize crowd congestion and wait times at large-scale sporting and entertainment venues. By utilizing real-time mock data, an interactive mapping interface, and intelligent routing logic, PulsePoint directs attendees to the fastest services available.

## 🚀 Features

* **Interactive Venue Map**: A custom, lightweight SVG-based stadium map with native pinch-to-zoom support. High-fidelity POI markers live-update based on current queue lengths.
* **Smart Rerouting Engine**: The "Find Shortest Line Near Me" feature. Compares multiple nearby options (Restrooms, Food) and aggregates *Travel Time + Wait Time* to recommend the definitively fastest option.
* **Congestion Nudges**: Real-time push notifications alerting users if their current section is overcrowded, recommending movement to a quieter zone.
* **High-Contrast Aesthetic**: A carefully engineered dark-mode UI utilizing energetic neon accents (Cyan, Yellow, Green) optimized for outdoor sunlight visibility.

## 🛠️ Tech Stack

* **Frontend Framework**: React 18
* **Build Tool**: Vite
* **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid)
* **Routing**: React Router DOM (v7)
* **Icons**: Lucide React
* **Hosting**: Google Cloud Run (via Buildpacks)

---

## 💻 Step-by-Step Execution Journey

This sections breaks down exactly how this app was constructed and brought to the cloud.

### Step 1: Project Initialization
We scaffolded a high-performance React frontend using Vite for instant HMR and optimized production bundling.
```bash
npx create-vite@latest promptwars-app --template react
cd promptwars-app
npm install
npm install lucide-react react-router-dom react-zoom-pan-pinch
```

### Step 2: Styling Engine
Instead of relying on heavy CSS frameworks, we engineered a custom design system in `index.css`. We defined strict CSS variables for the dark athletic theme, ensuring global consistency across all wait-time badges and UI components.

### Step 3: Mock Data Services
Created a centralized data layer (`src/data/mockData.js`) that simulates backend APIs, managing complex state including `MOCK_USER_STATE` (where the user sits) and arrays of POIs containing dynamic `wait_time` attributes colored coded to Green/Yellow/Red severity scales.

### Step 4: Component Architecture
We modularized the UI into heavily reusable blocks:
- `WaitTimeBadge.jsx`: The standardized pill representing wait delays.
- `NudgeAlert.jsx`: A floating system alerting the user of dynamic crowd behaviors.
- `BottomNav.jsx`: App navigation tied via `react-router-dom`.

### Step 5: Screen Construction
- **Dashboard**: Handled dynamic filtering and rendering the primary feature call-to-action cards.
- **RoutingView**: Computed mathematical operations across nearby amenities, sorting the list by overall time investments to highlight the star route.
- **VenueMap**: Embedded SVG coordinates manipulated seamlessly by `react-zoom-pan-pinch`.

### Step 6: Cloud Deployment
Configured a production ready `"start": "serve -s dist -l tcp://0.0.0.0:${PORT:-8080}"` command in `package.json`. 
Deployed natively to **Google Cloud Run** using continuous CI/CD integration directly through the Google Cloud Console.

---

## 🏃 Running Locally

To run the application on your own machine:

1. Clone the repository:
```bash
git clone https://github.com/manar-afk/promptwars-app.git
cd promptwars-app
```
2. Install dependencies:
```bash
npm install
```
3. Boot the local Vite development server:
```bash
npm run dev
```
4. Access the app at `http://localhost:5173/`
