const firebaseConfig = {
  apiKey: "AIzaSyBL0_XkF1euCNJtUNmcEr5Tk-ZWSBBe8Xg",
  authDomain: "my-firebase-project-73596.firebaseapp.com",
  databaseURL:
    "https://my-firebase-project-73596-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-firebase-project-73596",
  storageBucket: "my-firebase-project-73596.appspot.com",
  messagingSenderId: "138994049607",
  appId: "1:138994049607:web:6f47ce983ddaad60eb8762",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();
