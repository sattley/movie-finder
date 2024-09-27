
# Movie Finder 🎥

This is a little movie searching app called Movie Finder built using [Next.js](https://nextjs.org/), bootstrapped with `create-next-app`.

The data is fetched from the OMDB database and I have a hard coded API key in the code that will reliably allow thousands of requests.

## Getting Started

Follow these steps to get the project up and running locally:

### Prerequisites

- Make sure you have [Node.js](https://nodejs.org/en/download/) installed on your system.
- You also need [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) as your package manager.

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:

   ```bash
   cd movie-finder
   ```

3. **Install dependencies**:

   If using npm:

   ```bash
   npm install
   ```

   Or with yarn:

   ```bash
   yarn install
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

This will start the app at `http://localhost:3000` in development mode.

The main page of the app is located at `page.tsx` (or `home`), which is rendered at the base route `/`.

### Building for Production

To build the app for production:

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

This will create an optimized build in the `.next` folder, ready to be deployed.

## UI / UX Choices

- My first consideration was that I wanted the layout to be responsive, so this really dictated my design decisions.
- I initially had just a row for each movie across all screen sizes, however this didn't look good.
- Part of my motivations were that I wanted it to feel sleek and cool like a movie browsing site is, looking for a movie to watch should be fun!
- So I switched to rendering the movies in a grid layout. This looked cool but then I realized that it was constraining when I wanted to show more information.
- Fortunately towards the end I feel like the visual came together nicely to make the app usable enough for a prototype.
- I did make a decision to have a type ahead search for the movie which is very common these days.
- The opposite of this would be that the user explicitly enters the title in and then hits a Search button. That type of paradigm might be ok for older users but I think at this point most people are used to this.
- If I had more time I would firm up that process, ie make it clearer that you can click a result in the type ahead and it will render it in the UI.
- Lastly I added a few animations to make the app seem really joyful and delightful.
- Oh I also want to add in a logo and a sort of empty state since the UI is pretty bare until you actually search and get results back.  
