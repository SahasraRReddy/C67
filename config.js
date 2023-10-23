import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyDf5aJGSjHGhPQmdl8KjhNJRLaRdpU2TI4",
        authDomain: "class67-a6397.firebaseapp.com",
        databaseURL: "https://class67-a6397-default-rtdb.firebaseio.com",
        projectId: "class67-a6397",
        storageBucket: "class67-a6397.appspot.com",
        messagingSenderId: "813917027546",
        appId: "1:813917027546:web:0259f385dcf64d9907f9e3"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();