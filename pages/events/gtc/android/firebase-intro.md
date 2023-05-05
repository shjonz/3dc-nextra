# Day 2: Introduction to Firebase

## Our App So Far

> Refer to [Firebase Docs](https://firebase.google.com/docs/) for more detailed documentation regarding Firebase

> If you are falling behind in the lesson, missed the first session, or you are encountering some issues with you app, feel free to download the "completed" version of the

Congratulations so far, on creating a basic Android app, in terms of both UI and adding interactivity to it!

However, there are still many things missing from our Android app, which most conventional Android apps have. For example:

1. There is no **login system**
2. We have no way of **storing data online**. All of our pets' data we have input into the app is reset when we close the app.
3. There are no **"online" interactions** in our app. For example, other people can't view our pets, or feed them :(

## Firebase to the Rescue! (Kinda)

Most of the above issues listed above can resolved with Firebase. In a nutshell, Firebase is a cloud platform that can add many online interactivities for your Android application, and is relatively easy to integrate. It is a suite of many services that can be added on individually.

![](/imgs/gtc/android/firebase_services.png)

First, we will need to [**enable Firebase for our Android app**](./day2-firebase-sdk.md). Then, we will focus on just a few core services:

1. [**Auth** to enable a **working login system** for our app](./day2-firebase-auth.md)
2. [**Realtime Database** to allow us to **store app data online** (e.g. pet data)](./day2-firebase-db.md)
3. [**Storage** to let us store more complex files online (e.g. pet photos) ](./day2-firebase-storage.md)
