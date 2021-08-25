import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({
  apiKey: 'AIzaSyB8BOqYPH0uedQikjgqx-oapZiOAMjlewI',
  authDomain: 'react-app-3d0d4.firebaseapp.com',
  databaseURL: 'https://react-app-3d0d4-default-rtdb.firebaseio.com',
  projectId: 'react-app-3d0d4',
  storageBucket: 'react-app-3d0d4',
  messagingSenderId: '154484657163',
  appId: '1:154484657163:web:647ad7750653bd83c80b0e',
  measurementId: 'G-YSG6DQVMSE',
})

export const db = firebase.database()
