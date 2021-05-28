import firebase from 'firebase';

var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket:process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
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
