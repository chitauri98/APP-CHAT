const init = () => {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA5y7z5vHLPUaSQxQjJp8agm93j-dgHNM0",
    authDomain: "chat-app-aed27.firebaseapp.com",
    databaseURL: "https://chat-app-aed27.firebaseio.com",
    projectId: "chat-app-aed27",
    storageBucket: "chat-app-aed27.appspot.com",
    messagingSenderId: "318133683614",
    appId: "1:318133683614:web:f39b23275de951caf4428f",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.app().name);
  view.setActiveScreen("registerScreen");
};
window.onload = init;
