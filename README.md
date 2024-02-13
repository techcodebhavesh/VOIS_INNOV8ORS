# Catalogue Quality Assessment System

In the dynamic landscape of retail commerce, ensuring the quality of product catalogues is paramount for both Buyer Apps and Seller Apps. This project addresses the challenge of assessing catalogue quality efficiently and objectively.

## Objective
The objective of this project is to develop a transparent and extensible catalogue scoring mechanism to assess compliance, correctness, and completeness at an aggregate level.

## Key Features

- **Streamlined Data Input:** Users can upload CSV catalogues, ensuring vital information such as titles and descriptions are readily accessible.
  
- **Enhanced Image Processing:** Users can effortlessly drag-and-drop images for assessment, ensuring visual appeal is accounted for.
  
- **Intelligent Data Processing with Gemini API:** Utilizing Gemini API, our system efficiently processes catalog data, extracting and analyzing titles, descriptions, features, benefits, and more. Advanced image analysis algorithms assess image quality and relevance.
  
- **Granular Assessment Parameters:** Precise assessment criteria are established, weighting each parameter based on its importance.
  
- **Automated Scoring:** The system automates the scoring process with precision and consistency, generating objective scores for each catalogue.
  
- **Actionable Suggestions for Improvement:** Provides actionable insights for catalogue enhancement, driving improved user experiences and sales.
  
- **Seamless Integration with E-commerce Platforms:** Designed to seamlessly integrate with e-commerce platforms, enabling efficient product filtering based on catalogue scores.

## Installation Steps

1. **Clone the Repository:**
   ```
   git clone <repository_url>
   ```

2. **Navigate to Project Directory:**
   ```
   cd <project_directory>
   ```

3. **Configure Gemini API Credentials:**
   - Copy the `.env.example` file and rename it to `.env`.
   - Update the `.env` file with the Gemini credentials obtained from [Gemini API](https://makersuite.google.com/app/apikey).

4. **Build the Project:**
   ```
   npm run build
   ```

5. **Set up Firebase for Authentication and Firestore:**
   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Follow the instructions provided by Firebase to enable authentication and set up Firestore for your project ([Firebase Firestore Quickstart](https://firebase.google.com/docs/firestore/quickstart)).

6. **Download Firebase Service Key:**
   - Download the Firebase service key from the Firebase Console. This key authenticates your project with Firebase services.
   - Place the downloaded service key in the root directory of your project.
   - Rename the downloaded service key to `firebase-service-key.json`.

7. **Configure Firebase Credentials for Client:**
   - Navigate to the `client` folder of your project.
   - Copy the `.env.example` file and rename it to `.env`.
   - Update the `.env` file with the Web Firebase credentials.

8. **Start the Application:**
   - Within the project's main directory, execute the command:
   ```
   npm run start
   ```

## Contributors
- [Mayur Agarwal](https://github.com/mayuragarwal2004)
- [Vaishnavi Mahindarkar](https://github.com/Vaishnavi4008)
- [Bhavesh Agone](https://github.com/techcodebhavesh)
- [Aryan More](https://github.com/AryanMore)
