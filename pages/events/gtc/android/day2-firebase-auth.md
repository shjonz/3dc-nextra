# Day 2: Firebase Auth

In this section, we shall learn to add a login system for our app, so that users can login from other devices, and multiple users can also login from the same device!

Together with Realtime Database (which we cover in another section), we will be able to allow users to save pets online, and access their pets from any Android phone!

## An Introduction

![](/imgs/gtc/android/auth-providers.png)

Firebase Auth allows for many different sign-in methods, including regular email and password sign-in, or accounts from other identity providers (think Google, Facebook, Twitter, Microsoft). Normally, manually enabling sign-ins like that require quite a bit of work. However, Firebase helps to simplify all that with **FirebaseUI**.

## What is FirebaseUI?

Basically, FirebaseUI is a prebuilt authentication UI, that provides whatever Authentication providers we want to specify. It looks something like that on Android:

![](/imgs/gtc/android/firebase_ui.png){: style="height:600px;width:320px"}

All we have to do is to add a button to bring us to this UI, and configure what sign-in options we want the UI to have!

## Understanding the Flow in Technical Terms

For authentication, our technical implementation will be something like this:

1. User clicks on a button in the **startup activity (`MainActivity` in our case)** to sign in
2. `MainActivity` will launch up FirebaseUI to handle the sign-in for us. We just wait for the result.
3. After receiving the sign-in result from FirebaseUI,
   - **If Sign-in Successful**: **Redirect** user to our `ChoosePetActivity1` like normal
   - **If Sign-in Unsuccessful**: **Stay** on `MainActivity`, **display a message (Toast)** telling the user they were unsuccessful in signing in.

To simplify things, we will just enable **Email Sign-in** and **Google Sign-in** for our app.

## Enabling Firebase Auth and Sign-in Methods on Firebase Console Website

1. Enable Firebase Auth and by clicking on the authentication button.

   ![](/imgs/gtc/android/firebase_auth_button.png)

2. Click **Setup Sign-in Method**
3. Various Sign-in providers should be displayed. Choose **Google**
4. Flip the switch to **Enable** Google Sign-in
5. Choose a name of your choice for **Project public-facing name**
6. Select an email for the **Project Support Email**
7. We have already added the `SHA-1` fingerprint during the registration of our Firebase App. Just click **Save**.

   ![](/imgs/gtc/android/firebase_auth_save.png)

8. Do the same for **Email/Password** sign-in

## Adding dependencies for FirebaseUI to our project

1. We'll need to add the following line to our module-level `build.gradle` file.

   ```groovy
   implementation 'com.firebaseui:firebase-ui-auth:6.4.0'
   ```

2. Press **Sync Now** to sync the dependencies

   ![](/imgs/gtc/android/firebase_auth_add_dependency.png)

## Register Google as a Sign-In provider in our Android App

We'll need to modify the code in the activity that contains the `Start` button. Go to `MainActivity.java` and **add google and email/password as a sign-in provider**, by pasting the following code **before** the `onCreate()` function. (Note: `RC_SIGN_IN` is a request code we are using for our request for sign in. When FirebaseUI is done with the sign-in, we will use this request code to identify which is the result for our sign-in)

```java
List<AuthUI.IdpConfig> providers = Arrays.asList(
    new AuthUI.IdpConfig.EmailBuilder().build(),
    new AuthUI.IdpConfig.GoogleBuilder().build());
private static final int RC_SIGN_IN = 0;
```

## Bring up FirebaseUI using the button click

In the `setOnClickListener` function for your button, we will need to:

1. Bring up the FirebaseUI
2. Indicate our intention to know the result of the FirebaseUI sign-in

We will use `startActivityForResult` to bring up the new page. This allows us to request for FirebaseUI to tell us when it is done with the sign-in. Copy the following code into the start the `SetOnClickListener`

```java
startActivityForResult(
    AuthUI.getInstance()
        .createSignInIntentBuilder()
        .setAvailableProviders(providers)
        .build(),
    RC_SIGN_IN);
```

Note that we have used `RC_SIGN_IN` as our request code.

## Listening for the sign-in result of FirebaseUI

We will need to listen for the result of the sign-in from `MainActivity.java`. We can do this by adding a new function in our `MainActivity` class, called `onActivityResult`. This function will be called when FirebaseUI is done with its sign-in. Copy this code into your `MainActivity` class.

```java
if (requestCode == RC_SIGN_IN) {
    // Asserts that this result came from our FirebaseUI

    if (resultCode == RESULT_OK) {
        // Means the user successfully signed in
        // We can now get the details of the Firebase User
        FirebaseUser user = FirebaseAuth.getInstance().getCurrentUser();

        // Get the name of the user
        String userName = user.getDisplayName();

        // Show a message welcoming the user
        Toast.makeText(getApplicationContext(), "Welcome " + userName, Toast.LENGTH_SHORT).show();
    } else {
        Toast.makeText(getApplicationContext(), "Sign in Failed!", Toast.LENGTH_SHORT).show();
    }
}

```

Explanation:

1. First we check that the result indeed came from our FirebaseUI
2. We check the result code, to see if the user successfully signed in, or was rejected
3. If they were successful, we get the username of the user
4. Then using `Toast.makeText()`, we display a message welcoming them.
   - The text to be displayed by Toast is the second parameter
   - The `Toast.LENGTH_SHORT` indicates that the message should only be displayed for a short time
5. If they were unsuccessful, display a message telling them the sign in failed

## Add a Transition to the next Activity for Successful Sign-In

After the first `Toast.makeText`, you will also want to add a transition to the next activity. Move the transition that you originally wrote in onCreate, to after the `Toast.makeText`.

The code in question (if you followed my naming convention):

```java
Intent intent = new Intent(MainActivity.this, ChoosePetActivity1.class);
startActivity(intent);
```

You can test the result by running the app! It should bring up a google sign in page when you press the `Start` button.

You can also see the users of your app (and their user Id) in the Firebase Console Website, in the `Authentication` home screen.

<details>
  <summary>Final Code for MainActivity.java</summary>

```java
package com.example.virtualpets;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;


import com.firebase.ui.auth.AuthUI;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    List<AuthUI.IdpConfig> providers = Arrays.asList(
            new AuthUI.IdpConfig.EmailBuilder().build(),
            new AuthUI.IdpConfig.GoogleBuilder().build());
    private static final int RC_SIGN_IN = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button button = findViewById(R.id.startButton);

        button.setOnClickListener(view -> {
            startActivityForResult(
                    AuthUI.getInstance()
                            .createSignInIntentBuilder()
                            .setAvailableProviders(providers)
                            .build(),
                    RC_SIGN_IN);


        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == RC_SIGN_IN) {
            // Asserts that this result came from our FirebaseUI

            if (resultCode == RESULT_OK) {
                // Means the user successfully signed in
                // We can now get the details of the Firebase User
                FirebaseUser user = FirebaseAuth.getInstance().getCurrentUser();

                // Get the name of the user
                String userName = user.getDisplayName();

                // Show a message welcoming the user
                Toast.makeText(this, "Welcome " + userName, Toast.LENGTH_SHORT).show();

                // Go to the ChoosePetActivity
                Intent intent = new Intent(MainActivity.this, ChoosePetActivity1.class);
                startActivity(intent);
            } else {
                Toast.makeText(this, "Sign in Failed!", Toast.LENGTH_SHORT).show();
            }
        }
    }
}
```

</details>
