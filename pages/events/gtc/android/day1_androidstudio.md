# Day 1: Introduction to Android Studio

Welcome to the Android Workshop! For the workshop, we will be going through hands-on activities on how to create an Android App from scratch. We will be creating a "Virtual Pets" app. Our virtual pets app will be a simple app where you have pets on your mobile phone, and you can feed these pets. We will cover the following topics today:

1. Creating Activities (Pages) for our Android App
2. Creating/Designing an Android GUI
3. Android Activity Lifecycle
4. Scripting interactions between user and mobile app

Tomorrow, we will be covering how to use Firebase (a simplified cloud platform) to enable additional interactive functionalities using authentication and online data storage.

## Creating New Project

Welcome to Android Studio! This will be the starting page: click on "Create New Project"

![](/imgs/gtc/android/android_home.png)

Depending on what kind of app/page template you want to start with, you can click on the options, but for the workshop (and in most cases) we will be using "Empty Activity". An activity refers to a single page of your app that it's referring to, so an app is comprised of many activities.

![](/imgs/gtc/android/android_project_template.png)

Rename the file, and under options choose "Java"

![](/imgs/gtc/android/android_create_project.png)

Wait for a while, the bottom should show some processes running on startup. When done, screen looks like this (... started). Dismiss the "What's New" panel.

![](/imgs/gtc/android/android_startup.png)

## Inside Android Studio

Files are on the left, editing in the middle, and the run bar at the top right

![](/imgs/gtc/android/android_startup_clean.png)

AndroidManifest.xml is a special document that summarizes your app: permissions, pages it includes, etc.

![](/imgs/gtc/android/androidmanifest.png)

## Setting up Virtual Device (Simulator)

Setting up Virtual Device (Simulator). Go to the box beside app and click on AVD Manager to download a simulator of your choice.

![](/imgs/gtc/android/avd_setup_1.png)

![](/imgs/gtc/android/avd_setup_2.png)

![](/imgs/gtc/android/avd_setup_3.png)

Download one of the latest releases and click next. It'll take a while to download (about 1.1GB) so just be patient.

![](/imgs/gtc/android/avd_setup_4.png)

![](/imgs/gtc/android/avd_setup_5.png)

Run bar

![](/imgs/gtc/android/android_run_bar.png)

After launching, your simulator should show this (default 'hello world' code)

![](/imgs/gtc/android/android_first_run.png)
