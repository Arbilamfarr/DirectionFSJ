import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function AlertFailed(props) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      
        <View style={styles.alert}>
          <View
            style={[
              styles.alertIcon,
              { backgroundColor: '#fa5855', borderColor: '#fa5855' },
            ]}>
            <FeatherIcon color="#fff" name="x-square" size={30} />
          </View>

          <View style={styles.alertBody}>
            <Text style={styles.alertTitle}>your id invalid!</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
             props.setFailed(false);
            }}>
            <View style={styles.alertClose}>
              <FeatherIcon color="#9a9a9a" name="x" size={24} />
            </View>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   
        padding: 24,
  },
  /** Alert */
  alert: {
    backgroundColor:'white',
    position: 'relative',
    flexDirection: 'row',
    marginBottom: 24,
  },
  alertIcon: {
    padding: 16,
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderLeftWidth: 0,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  alertTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1e1e1e',
    marginBottom: 4,
  },
  alertClose: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});