# ChatWave

ChatWave is a fully-featured messaging application built using modern web technologies. It includes real-time messaging, voice and video calling, and more. The application is designed to be scalable, secure, and user-friendly.

## Features

- **Login with Google using Firebase**: Seamlessly sign in with your Google account via Firebase integration.
- **Switch between multiple databases using Prisma**: Customize your database preferences to suit your needs effortlessly.
- **Send and Receive Messages using Sockets**: Real-time messaging capabilities using Socket.io for instant communication.
- **Voice Call and Video Call Feature**: Enjoy crystal clear voice and video calls within the app.
- **Voice Notes with Live Audio Waveforms**: Send and receive voice notes accompanied by live audio waveforms for an enhanced messaging experience.
- **Support for Emoji**: Express yourself with a wide range of emojis to add fun and emotions to your conversations.
- **Send Images**: Share images with your friends and loved ones effortlessly.
- **Online/Offline Functionality**: Easily identify the online and offline status of your contacts.
- **Search Messages**: Quickly find specific messages using the search functionality.
- **Capture Photo From Camera**: Take instant photos using your device's camera and send them instantly.
- **Message Read Status**: Know when your messages have been read by your recipients.
- **Message Time**: Stay updated with the timestamps of messages for better organization.

## How to Use

### Prerequisites

- Node.js and npm or Yarn installed on your machine.
- PostgreSQL installed and running.
- Firebase Account: Set up Firebase Authentication and Firebase Storage.

### Setup

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/Gurjaipal17/ChatWave.git
    ```

    **Ensure you are in the `ChatWave` directory**. If not, change directory to `ChatWave`:
    ```sh
    cd ChatWave
    ```

2. **Set Up Client**:
    - Navigate to the client directory and install dependencies:
      ```sh
      cd client
      yarn
      ```
    - Create a `.env` file in the `client` directory with the following content:
      ```env
      NEXT_PUBLIC_FIREBASE_API_KEY=<Your Firebase API Key>
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<Your Firebase Auth Domain>
      NEXT_PUBLIC_FIREBASE_PROJECT_ID=<Your Firebase Project ID>
      ```

3. **Set Up Server**:
    - Navigate to the server directory and install dependencies:
      ```sh
      cd ../server
      yarn
      ```
    - Initialize Prisma and generate the client:
      ```sh
      npx prisma init
      npx prisma generate
      ```
    - Create a `.env` file in the `server` directory with the following content:
      ```env
      DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
      ```

4. **Run the Backend Server**:
    - Start the backend server to handle real-time messaging and other backend services:
      ```sh
      yarn start
      ```

5. **Run the Development Server**:
    - Navigate back to the `client` directory and start the development server:
      ```sh
      cd ../client
      yarn dev
      ```
    - The application will be available at [http://localhost:3000](http://localhost:3000).

### Accessing the Application

- After running `yarn dev`, access the application through the provided link in your terminal.
- If you are a new user, register using the registration form.
- Log in to start using the features of ChatWave.

## Additional Information

- **Configuration**: Ensure your environment variables and configuration files are correctly set up for both the backend and frontend.
- **Database Setup**: Make sure your PostgreSQL database is properly configured and connected.
- **Testing**: For running tests, use the following command:
    ```sh
    yarn test
    ```

## Contributing

We welcome contributions to the ChatWave project! If you have suggestions or improvements, please submit issues or pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Special thanks to the open-source community and contributors for their invaluable support and tools.
