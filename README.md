Project Title: **YouTube Videos Flashcards Generator**
======================================================

Table of Contents
-----------------

-   [Overview](#overview)
-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [APIs Used](#apis-used)
-   [Setup Instructions](#setup-instructions)
-   [Running the Application Locally](#running-the-application-locally)
-   [Deployment Instructions](#deployment-instructions)
-   [Challenges and Solutions](#challenges-and-solutions)
-   [Credits](#credits)

* * * * *

Overview
--------

The **YouTube Videos Flashcards Generator** is a web-based application that allows users to generate flashcards from YouTube videos. The flashcards contain summarized content from the video's transcription, along with timestamps for easy reference. This application leverages state-of-the-art APIs for transcription and summarization to simplify content consumption and retention.

* * * * *

Features
--------

-   **Transcription**: Converts the audio of YouTube videos into text.
-   **Summarization**: Generates concise summaries of the transcription to create flashcards.
-   **Timestamps**: Includes timestamps on each flashcard for easy navigation within the video.
-   **User Authentication**: Secure user login and session management using Google OAuth.
-   **Clean-Up**: Automatically removes unnecessary audio files to optimize storage.

* * * * *

Tech Stack
----------

-   **Frontend**: React, TypeScript, TailwindCSS
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB
-   **Task Queue**: BullMQ, Redis
-   **APIs**: AssemblyAI for transcription and summarization
-   **Other Libraries**:
    -   `youtube-dl-exec` for downloading YouTube audio
    -   `fluent-ffmpeg` for audio compression

* * * * *

APIs Used
---------

### 1\. **YouTube API**

-   **Purpose**: Youtube video details.
-   **Features Used**:
    -   YouTube video title.
    -   YouTube video ID.
-   **Official Documentation**: Youtube Developers Documentation

### 2\. **AssemblyAI**

-   **Purpose**: Audio transcription and summarization.
-   **Features Used**:
    -   Audio transcription with auto chapters.
    -   Summarization with structured summaries.
-   **Official Documentation**: AssemblyAI API Documentation

* * * * *

Setup Instructions
------------------

### Prerequisites

1.  Install [Node.js](https://nodejs.org/) (v16+ recommended).
2.  Install [MongoDB](https://www.mongodb.com/) and ensure it is running locally or via a cloud provider.
3.  Install [Redis](https://redis.io/) and ensure it is running.
4.  Create an account with [AssemblyAI](https://www.assemblyai.com/) to get your API key.
5.  Install [ffmpeg](https://ffmpeg.org/) for audio processing.

### Clone the Repository

bash

Copy code

`git clone https://github.com/elvispreakerebi/jotta-app.git
cd your-repo-name`

### Backend Setup

1.  Navigate to the `jotta-app` folder:

    bash

    `cd jotta-app`

2.  Install dependencies:

    bash

    `npm install`

3.  Create a `.env` file in the `jotta-app` directory with the following content:

    env

    `MONGO_URI=mongodb://localhost:27017/your-database-name
    REDIS_URL=redis://localhost:6379
    ASSEMBLYAI_API_KEY=your_assemblyai_api_key
    PORT=3000
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRE=your_google_client_secret
    SESSION_SECRET=your_session_secret
    YOUTUBE_API_KEY=your_youtube_api_key`

4.  Start the backend server:

    bash

    `npm run server`

### Frontend Setup

1.  Navigate to the `frontend` folder:

    bash

    `cd frontend`

2.  Install dependencies:

    bash

    `npm install`

3.  Start the frontend development server:

    bash

    `npm start`

* * * * *

Running the Application Locally
-------------------------------

1.  Start the **backend** server:

    bash

    `npm run server`

2.  Start the **frontend** server:

    bash

    `cd frontend
    npm start`

3.  Open your browser and navigate to `http://localhost:3000`.

* * * * *

Deployment Instructions
-----------------------

### Backend Deployment

1.  Deploy the backend on services like Heroku, AWS, or Render.
2.  Update the environment variables in the deployment settings with your production database and API keys.
3.  Ensure Redis is also deployed and connected.

### Frontend Deployment

1.  Deploy the frontend on platforms like Vercel or Netlify.
2.  Update the API base URL in the frontend to point to the deployed backend server.

* * * * *

Challenges and Solutions
------------------------

### **1\. Handling Large Transcriptions**

-   **Challenge**: Managing large transcriptions without overwhelming the backend.
-   **Solution**: Used AssemblyAI's `auto_chapters` feature to divide the transcription into manageable sections.

### **2\. Timestamp Accuracy**

-   **Challenge**: Ensuring timestamps align with flashcard content.
-   **Solution**: Extracted start and end times for each chapter directly from the API response.

### **3\. Temporary File Management**

-   **Challenge**: Preventing the accumulation of temporary audio files.
-   **Solution**: Implemented file cleanup after processing using `fs.unlinkSync`.

### **4\. Rate Limits and API Delays**

-   **Challenge**: API calls occasionally failed due to rate limits or timeouts.
-   **Solution**: Added retry mechanisms and appropriate delays between API polling.

* * * * *

Credits
-------

-   **APIs**:
    -   [AssemblyAI](https://www.assemblyai.com/) for transcription and summarization.
-   **Libraries and Tools**:
    -   `youtube-dl-exec`
    -   `fluent-ffmpeg`
    -   `BullMQ` and `Redis`
-   **Hosting Platforms**:
    -   MongoDB Atlas
    -   Vercel/Netlify for frontend
    -   Render/Heroku for backend
-   **Mentors and Resources**:
    -   Tutorials and documentation from the above libraries and APIs.
-   **Acknowledgments**:
    -   Special thanks to the AssemblyAI team for their comprehensive API and support.

* * * * *

Feel free to reach out for any clarifications or issues related to the project setup! 😊