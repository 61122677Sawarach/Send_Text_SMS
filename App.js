/*This is an Example of Sending Text SMS in React Native*/
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import SendSMS from 'react-native-sms'

export default class App extends React.Component {
  someFunction() {
    SendSMS.send({
        //Message body
        body: 'Please follow https://aboutreact.com',
        //Recipients Number
        recipients: ['0123456789'],
        //An array of types that would trigger a "completed" response when using android
        successTypes: ['sent', 'queued']
    }, (completed, cancelled, error) => {
        if(completed){
          console.log('SMS Sent Completed');
        }else if(cancelled){
          console.log('SMS Sent Cancelled');
        }else if(error){
          console.log('Some error occured');
        }
    });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <TouchableOpacity onPress={this.someFunction.bind(this)}>
        <View>
          <Image
            //We are showing the Image from online
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sms.png',
            }}
            //You can also show the image from you project directory like below
            //source={require('./Images/sms.png')}
            style={styles.ImageStyle}
          />
          <Text style={styles.text}>Send SMS</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
  },
  text: {
    color: 'black',
    textAlign:'center',
    fontSize: 25,
    marginTop:16,
  },
  ImageStyle: {
    height: 150,
    width: 150,
    resizeMode: 'stretch',
  },
});