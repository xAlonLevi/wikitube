# Wikitube

Wikitube is a small vanilla JavaScript project that combines **YouTube video search** with **Wikipedia search results**.

The user can search for a topic, watch related YouTube videos, choose from suggested videos, and read related Wikipedia snippets on the same page.

## Demo

Add your GitHub Pages link here after deployment:

```txt
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

## Features

- Search for any topic
- Display related YouTube videos
- Play the first result automatically in an embedded YouTube player
- Click a suggested video to replace the current video
- Display related Wikipedia search results
- Cache previous Wikipedia and YouTube searches to avoid repeated network requests
- Responsive layout for mobile, tablet, and desktop screens
- Built with vanilla HTML, CSS, and JavaScript

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Axios
- Wikipedia API
- YouTube Data API

## Project Structure

```txt
wikitube/
│
├── index.html
│
├── wikitube.css/
│   ├── wikitube-mf.style.css
│   └── wikitube.style.css
│
├── wikitube.js/
│   ├── wikitube.controller.js
│   └── wikitube.service.js
│
└── lib/
    └── axios.js
```

## How It Works

When the page loads, the app searches for a default topic and renders both Wikipedia data and YouTube data.

```js
fetchWikiData('Elden Ring')
fetchYoutubeData('Elden Ring')
```

When the user submits a new search, the app:

1. Prevents the page from refreshing.
2. Reads the value from the search input.
3. Fetches matching Wikipedia results.
4. Fetches matching YouTube videos.
5. Renders the results on the page.

The YouTube results are saved in a suggestions array, so clicking a suggestion changes the embedded video player.

## Setup

No build tools are required.

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```

2. Open the project folder:

```bash
cd YOUR_REPOSITORY_NAME
```

3. Open `index.html` in the browser.

Recommended option: use the **Live Server** extension in VS Code.

## Important API Key Note

This project uses the YouTube Data API.

Before publishing the project publicly, make sure your API key is protected. For a client-side project, the key can still be visible in the browser, so you should at least restrict it in Google Cloud Console by:

- allowed websites / HTTP referrers
- API restrictions
- quota limits

If the key was already pushed to GitHub, it is safest to rotate it and create a new restricted key.

## GitHub Pages Deployment

To publish this project with GitHub Pages:

1. Push the project to GitHub.
2. Go to the repository settings.
3. Open **Pages**.
4. Choose the main branch.
5. Save.
6. Copy the generated GitHub Pages link and add it to the `Demo` section above.

## Future Improvements

- Add loading indicators while data is being fetched
- Add better error messages when an API request fails
- Clear the search input after searching
- Allow the user to open the original YouTube video
- Add a dark mode option
- Improve accessibility with better labels and keyboard support
- Hide or proxy the YouTube API key through a backend service

## Author

Created by **Alon Levi**.
