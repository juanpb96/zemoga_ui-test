var firebase = require('firebase/app').default;
require('firebase/database');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuW0Tq_I6028SUV3oowb0NHUgvjMqtjZY",
    authDomain: "zemoga-uitest.firebaseapp.com",
    databaseURL: "https://zemoga-uitest-default-rtdb.firebaseio.com",
    projectId: "zemoga-uitest",
    storageBucket: "zemoga-uitest.appspot.com",
    messagingSenderId: "689229304441",
    appId: "1:689229304441:web:81edcf89365e80d4e7baa8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const Firebase = {
    updateData( id, obj ) {
        // Update the entire object
        db.ref('data/' + id).set(obj);
    }
}

module.exports = Firebase;