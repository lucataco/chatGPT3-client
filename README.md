## Getting started with Next.js and Banana

This is a [Next.js](https://nextjs.org/) template project that's preconfigured to work with Banana's API.

You can use this as a quick jumping-off point to build a web app using Banana's API

## Noteworthy files

- [pages/index.js](pages/index.js) - The React frontend that renders the home page in the browser
- [pages/api/models.js](pages/api/models.js) - The backend API endpoint that calls the list of available Models tied to the OpenAI Key
- [pages/api/chat.js](pages/api/chat.js) - The backend API endpoint that calls OpenAI to get a chat response

## Usage

Install dependencies(npm install):

```console
npm i
```

Add your model's [Banana API keys](https://banana.dev) to `.env.local`:

```
OPEN_AI_ORG = <your_open_ai_org_here>
OPEN_AI_KEY = <your_open_ai_key_here>
```

Run the development server:

```console
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

![chatGPT3-sandbox](https://user-images.githubusercontent.com/3483170/215376142-f1809dcc-971b-45d0-986e-f7e348ef7cf5.jpg)
