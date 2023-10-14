
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
apiKey: "AIzaSyDf_-eWK4I35dV2-8JfeFstKe7ap5dML_8",
authDomain: "inha-itc4612.firebaseapp.com",
projectId: "inha-itc4612",
storageBucket: "inha-itc4612.appspot.com",
messagingSenderId: "14252553579",
appId: "1:14252553579:web:6df839c2b0aae6b0ef482e",
measurementId: "G-EPVRKSCJWT"
};
    

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
