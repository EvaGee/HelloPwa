importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');
var config = {
apiKey: "AIzaSyCKZVHGF6_EKJ2fpILz2vNJLkxXeq8YTck",
authDomain: "hello-app-3f7c0.firebaseapp.com",
databaseURL: "https://hello-app-3f7c0.firebaseio.com",
projectId: "hello-app-3f7c0",
storageBucket: "hello-app-3f7c0.appspot.com",
messagingSenderId: "50882003366"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'Hello World';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});