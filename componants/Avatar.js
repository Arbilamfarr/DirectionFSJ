import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

export default function Avatar(props) {
    const name = props.name.toUpperCase();
    const avatar=name.split(" ");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
           <View style={styles.avatarXL}>
          <Text style={styles.avatarXLText}>{`${avatar[0][0]}${avatar[1][0]}`}</Text>
          
        </View>
        <Text>{props.name}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
    paddingHorizontal: 24,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  avatarXL: {
    width: 64,
    height: 64,
    borderRadius: 9999,
    backgroundColor: '#49de80',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarXLText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#222',
  },
});