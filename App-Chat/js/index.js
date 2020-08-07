const init = () => {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAicD--tqvYlaZAzUTm1ltUZorW-jtI6MM",
    authDomain: "chat-app-923ca.firebaseapp.com",
    databaseURL: "https://chat-app-923ca.firebaseio.com",
    projectId: "chat-app-923ca",
    storageBucket: "chat-app-923ca.appspot.com",
    messagingSenderId: "514171052128",
    appId: "1:514171052128:web:ff0fd343a5b9c6f4cbe305",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase.app().name);
  // firestoreFuntion();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if(user.emailVerified){
        model.currentUser = {
          displayName: user.displayName,
          email: user.email,
        };
        view.setActiveScreen('chatScreen')
      } else {
        view.setActiveScreen('loginScreen')
        alert('Please verify your email')
      }
    } else {
      view.setActiveScreen("loginScreen");
    }
  });
};
window.onload = init;

firestoreFuntion = async () => {
  //get one document
  const documentId = "tsYc3ON99dvXYZGtQWan";
  const response = await firebase
    .firestore()
    .collection("users")
    .doc(documentId)
    .get();
  const user = getDataFromDoc(response);
  // response.data()
  // user.id = response.id
  console.log(user);
  //get many document
  const response2 = await firebase
    .firestore()
    .collection("users")
    .where("phoneNumber", "array-contains", "091")
    .get();
  // console.log(response2);
  const listUser = getDataFromDocs(response2.docs);
  console.log(listUser);
  // console.log(getDataFromDoc(response2.docs[0]));
  //add document
  const userToAdd = {
    name: "ACE",
    age: 23,
    email: "ace@gmail.com",
  };
  // firebase.firestore().collection('users').add(userToAdd)
  //update document
  documentIdUpdate = "iT3P1pLBvWtMSbxcwJFJ";
  const dataToUpdate = {
    address: "Ha Noi",
    phoneNumber: firebase.firestore.FieldValue.arrayUnion("091"),
  };
  firebase
    .firestore()
    .collection("users")
    .doc(documentIdUpdate)
    .update(dataToUpdate);
  //delete document
  const docToDelete = "ovzKD0NA305QxEhCqk5d";
  firebase.firestore().collection("users").doc(docToDelete).delete();
};
getDataFromDoc = (doc) => {
  const data = doc.data();
  data.id = doc.id;
  return data;
};
getDataFromDocs = (docs) => {
  return (listData = docs.map((item) => getDataFromDoc(item)));
  // for (let index = 0 ; index < docs.length; index++){
  //   const element =getDataFromDoc(docs[index])
  //   console.log(element)
  //   listData.push(element)
  // }
  // return listData
};
