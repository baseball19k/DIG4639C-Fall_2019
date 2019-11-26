import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

  const styles = StyleSheet.create( {
    title: {
      color: '#000',
      backgroundColor: '#d8d8d8',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 25,
      textShadowColor: 'black',
      borderRadius: 3
    },
    explanation: {
      color:'#000',
      backgroundColor: '#d8d8d8',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20
    }
  })

class App extends React.Component {
  render(){
    return(
      <View>
        <View style={{height: 45, backgroundColor: 'black'}} />
        <Text style={styles.title}>
        If Pokemon isn't your favorite video game then I don't know if there is hope for humanity.
        </Text>
        <Text style={styles.explanation}>
        The video game of Pokemon for me is the game that I grew up playing throughout my childhood so not only does it make me think of the fun times growing up but my friends also played the game with me. Granted I know that it is a video game but it I had to work hard for a lot of the stuff that I got within the game spending time to get multiple level 100 Pokemon and also just the amount of time it took to actually get those Pokemon was insane. I currently still play Pokemon on the "Pokemon Go" app and this is something that my friends and I like to do together. We will go down to the lakefront park with our longboards and we will play Pokemon for sometimes hours on end because it is a fun, relaxing time.
        </Text>
      </View>
    );
  }
}

export default App;
