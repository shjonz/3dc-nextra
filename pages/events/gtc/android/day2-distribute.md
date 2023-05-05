## Day 2: Distributing your App

So far, we have learnt how to create a functioning app, complete with Firebase services support. What's left is to learn how to deploy and distribute our application!

### Google Play Store

The most straightforward way to publish your app is to publish it on the Google Play Store. Publishing your app on the Play Store obviously means that you can target a very broad audience, but the main drawback is that it is not free. You will need to sign up for a Google Developer Account, and that account will cost you 25USD, which may not be worth it, especially if you are planning to make your app free.

### Amazon App Store

An alternative is publish your App on alternative app stores like Amazon App Store. You do not have to pay for publishing on Amazon App Store, but obviously the Amazon App Store is not as popular.

### APK

If however, you just want to package your application nicely so that your friends can install it easily, yon generate an APK file that can be distribute to your own means, such as through Email, messaging, Dropbox etc.

## Creating APKs

### Unsigned APK

> If you are submitting your app for GTC, use this method to build your app

You can simply generate an unsigned apk distribution by going to **Build -> Build APK/Bundles -> Build APK**. Give the APK some time to build, then you can get your APK from app/build/outputs/apk/debug (Usually when the APK finishes building, they will give you the option to directly locate it). Try sending the APK to yourself through e.g. Telegram, and run it!

> Note that the user's phone will probably warn the user that they are installing from an untrusted source. If you want to fix this issue, it is best to generate a Signed APK instead. Unsigned APK's are usually used for testing purposes only.

![](/imgs/gtc/android/build_apk.png)

### Signed APK

Before releasing your app for commercial distribution, such as on an App Store like Google Play Store, you will need to **digitally sign** your APK to prove its authenticity.

To do so, go to **Build -> Generate Signed Bundle / APK**, then select **APK**. You will see something like this.

![](/imgskey_store.jpg)

If you don’t have a key store yet, click on **Create new...**, specify a path for your keystore and fill in the relevant details

![](/imgsnew_key_store.jpg)

When you are done, click **OK**, then **Next**, then select your build to be for **release** and select **V2** for signature version. Then click **Finish**.

![](/imgsgen_apk.jpg)

Your APK will finish building after some time, and it will show a message. Your APK has been created, either click on **Locate**, or go to the **release folder** in your **app** folder. You will find `app-release.apk`.

![](/imgsapk_generated.jpg)

You may proceed to upload this APK to a file-sharing site, App Store, or send it.
Try sending the APK to yourself through e.g. Telegram, and run it! Note that Firebase will not work due to the SHA-1 signature being different. You will probably have to edit the SHA-1 signature on the Firebase Website, based on the SHA1-signature for the release version. (or you can just use the debug version)

## Extra: Publishing your Source Code on Github

> Relevant for GTC people

If you would like to publish your code onto Github, you can easily do it using **VCS -> Import into Version Control -> Share Project on Github**.

![](/imgs/gtc/android/github.png)

If you do it manually, **do not forget to use a .gitignore file**, most importantly do not share your `google-services.json` with others if you are using Firebase.
