// This file must be in root folder of the project: firebase-messaging-sw.js


importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js')


const firebaseConfig = {
    apiKey: "AIzaSyAaHqSGC5JDKwYfjjE_ALQzf2wNraheTAQ",
    authDomain: "laravel-fcm-773f4.firebaseapp.com",
    projectId: "laravel-fcm-773f4",
    storageBucket: "laravel-fcm-773f4.firebasestorage.app",
    messagingSenderId: "671659420390",
    appId: "1:671659420390:web:59a8cc81bdbbba6299a927"
};

// receive messages in background
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// get this type of message in background
messaging.onBackgroundMessage(function (payload) {
    if (!payload.hasOwnProperty('notification')) {
        const notificationTitle = payload.data.title
        const notificationOptions = {
            body: payload.data.body,
            icon: payload.data.icon,
            image: payload.data.image
        }
        self.registration.showNotification(notificationTitle, notificationOptions);
        self.addEventListener('notificationclick', function (event) {
            const clickedNotification = event.notification
            clickedNotification.close();
            event.waitUntil(
                clients.openWindow(payload.data.click_action)
            )
        })
    }
})