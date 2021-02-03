import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Header, Button, Input } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

function MainScreen(props) {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');

  const onSignIn = () => {
    navigation.navigate('chat', { username: username });
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <View>
            <Input
              placeholder='Enter your username'
              containerStyle={{
                borderRadius: StyleSheet.hairlineWidth
              }}
              value={username}
              onChangeText={(value) => setUsername(value)}
            />
          </View>
          <View>
            <Button
              title='Sign In'
              titleStyle={{
                fontSize: wp(8),
                fontWeight: 'bold'
              }}
              onPress={onSignIn}
              buttonStyle={{ height: wp(15), width: wp(40) }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default MainScreen;