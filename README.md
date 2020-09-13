# Send_Text_SMS
//https://aboutreact.com/send-text-sms-in-react-native/

To Make a React Native App for to send SMS
Getting started with React Native will help you to know more about the way you can make a React Native project. We are going to use react-native init to make our React Native App. Assuming that you have node installed, you can use npm to install the react-native-cli command line utility. Open the terminal and go to the workspace and run


$npm install -g react-native-cli

Run the following commands to create a new React Native project


$react-native init ProjectName

If you want to start a new project with a specific React Native version, you can use the --version argument:


$react-native init ProjectName --version X.XX.X

$react-native init ProjectName --version react-native@next

This will make a project structure with an index file named App.js in your project directory.

Installation of Dependency
To use SendSMS we need to install react-native-sms package. To install this

Open the terminal and jump into your project


cd ProjectName

Run the following command


$npm install react-native-sms --save

This command will copy all the dependencies into your node_module directory.


Permission to Send SMS for Android
We are trying to use the SMS feature so we need to add some permission in AndroidManifest.xml file for Android. For more about the permission, you can see this post.
So we are going to add the following permissions in the AndroidMnifest.xml

Copy the >>>>>   uses-permission android:name="android.permission.READ_SMS"   >>>>>   go to paste in >>>>>   android > app > src > main > AndroidManifest.xml

Then use the App.js from githup and react-native run-android
