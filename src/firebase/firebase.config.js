import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDO6aHsceJcIpc23mowqXxUOT6JCjVwius',
  authDomain: 'dev-8070f.firebaseapp.com',
  projectId: 'dev-8070f',
  storageBucket: 'dev-8070f.appspot.com',
  messagingSenderId: '225938142905',
  appId: '1:225938142905:web:ae4b1702cefb1e45108d68',
  measurementId: 'G-X0N0RXFR2H',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
