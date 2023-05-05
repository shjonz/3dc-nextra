# Wrapup and Futher Reading

We have taught you the basics of building an Android Application. Some of what we taught you may be simple methods, but not neccessarily the best methods or practices. I will direct you to the following articles if you would like to adopt these better practices.

1. [String Resources](https://developer.android.com/guide/topics/resources/string-resource). Ideally, you want to keep business logic (like the words displayed on your app) and app logic separate. String resources help you to achieve that separation. String resources are also necessary if you would like to create list of strings for say a [Spinner (Dropdown list)](https://developer.android.com/guide/topics/ui/controls/spinner).
2. [Fragments](https://developer.android.com/guide/fragments). Creating multiple activities is not the ideal way to go to creating a dynamic reusable UI. Fragments must live within an activity. Fragments are also part of the core of many [Android Navigation Libraries](https://developer.android.com/guide/navigation) which make designing navigation in your app much more stable.

   ![](/imgsfragments.jpg)

3. [RecyclerView](https://developer.android.com/guide/topics/ui/layout/recyclerview). A major limitation of our android app so far is that it is not very dynamic. We only allow for each user to have 2 pets. Ideally we should have abstraction to allow for more dynamic use cases. RecyclerViews allow you to have a dynamic number of elements in a scrollable view.
4. [Custom View Elements](https://developer.android.com/guide/topics/ui/custom-components). Almost essential if you need to make reusable UI elements, comprising of multiple elements from the standard Android UI library.

Additionally, we focused a lot on adding functionality for our Android App, but did not talk much about beautifying the UI. You may want to consider reading in depth about each UI element on the Android Documentation. Resources and guidelines from [Material Design](https://developer.android.com/guide/topics/ui/layout/recyclerview) helps you to create good UIs for your Android App. You can also use UI prototyping software like [Adobe XD](https://www.adobe.com/sea/products/xd.html) to help you.

![](/imgsxd.jpg)

## Other ways to develop Android Apps

As it turns out, there are many different ways to do Android development. Using Android Studio is considered the “Native” way of doing Android development, the way Google designed it to be, but there are other methods.

![](/imgskotlin.jpg)

For starters, you may choose to use Kotlin instead of Java as a programming language. Kotlin is still a native method to do android development, and is in fact recommended by Google over Java. This is due to features like type-safety that come with the Kotlin programming language. Nowadays, Google prioritises adding features in their Kotlin SDK over their Java SDK, so it is probably worthwhile to learn Kotlin if you are planning to do serious Android Development in the future.

## Cross-Platform Mobile Development

What if your project manager or boss decided that he wanted to develop the app for iOS as well? After all, iOS has a huge market as well, especially in Singapore.
While iOS apps are generally natively developed in XCode and Swift programming language, there are a few ways to develop Android and iOS apps simultaneously.

> Do note they are in languages other than Java

1. [React Native](https://reactnative.dev/)
2. [Flutter](https://flutter.dev/)
3. [Xamarin](https://dotnet.microsoft.com/apps/xamarin)

## Google Tech Challenge (GTC)

Thank you for going through our workshop. If you have completed your application, you may consider adding a few more functionalities and submitting your project to [Google Tech Challenge](https://3dc.opensutd.org/gtc/), for a chance to win prizes (1st prize is a mechanical keyboard)!

Here are some more challenges if you are participating in Google Tech Challenge (list is not exhaustive):

> Note that you may have to do further reading

1. [Do the bonus challenge previously mentioned (feeding others pets)](day2-bonus.md)
2. Make the UI more pleasing to the eye
3. Use Firebase Cloud Functions to periodically decrease pets' hunger
4. Make the number of pets a user can have dynamic
5. Add a friends function
6. Make a page that can display everyone's pets
7. Make different buttons that can add different amounts of hunger points
8. Add a cooldown to the feed button
9. You can make use of Firebase Crashlytics to help you with debugging

## Survey

If you have any feedback, please share them with us using this [anonymous survey](https://forms.office.com/Pages/ResponsePage.aspx?id=drd2NJDpck-5UGJImDFiPUAsn_5SJNhGtJKX10v5lPxUMlVUODQwOUY3UDlYTkcwR001N09HNjRVSS4u).
