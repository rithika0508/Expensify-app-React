import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDZtzM-bBsDF5fGflN16SNixQ8eRhGb6Wk",
    authDomain: "expensify-app-edc0a.firebaseapp.com",
    databaseURL: "https://expensify-app-edc0a-default-rtdb.firebaseio.com",
    projectId: "expensify-app-edc0a",
    storageBucket: "expensify-app-edc0a.appspot.com",
    messagingSenderId: "946055446640",
    appId: "1:946055446640:web:18bd5f0e97a60fc8bdf4b5",
    measurementId: "G-HT5Z32DWYG"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.database();

// database.ref('expenses').push({
//     description: 'WaterBill',
//     amount: 300,
//     note: '',
//     createdAt: 234598765
// })

export { firebase };
export default database;
