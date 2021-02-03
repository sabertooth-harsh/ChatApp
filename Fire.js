import firebase from 'firebase';

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCrws1SKsuDQwSFCBfvaSvVq6jUHXCQWuA",
        authDomain: "chat-app-7a101.firebaseapp.com",
        projectId: "chat-app-7a101",
        storageBucket: "chat-app-7a101.appspot.com",
        messagingSenderId: "876154519857",
        appId: "1:876154519857:web:29d03ac497b951ba417010"

      });
    }
  }

  checkAuth = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  }

  send = messages => {
    console.log('messages: ', messages);
    messages.forEach(item => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user
      }

      this.db.push(message);
    });
  }

  parse = message => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user
    };
  }

  get = callback => {
    this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
  }

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref("messages");
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();