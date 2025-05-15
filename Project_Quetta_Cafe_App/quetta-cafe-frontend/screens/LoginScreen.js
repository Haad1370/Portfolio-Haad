// screens/LoginScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleLogin = () => {
    if (username && password) {
      setOtpSent(true);
    } else {
      Alert.alert('Error', 'Please enter username and password');
    }
  };

  const verifyOtp = () => {
    if (otp === '1234') {
      Alert.alert('Success', 'Login Successful');
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Incorrect OTP');
    }
  };

  const handleGoogleSignIn = () => {
    Alert.alert('Google Sign-In', 'Signed in with Google (mock)');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quetta Café</Text>

      {!otpSent ? (
        <>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput
            placeholder="Enter OTP (1234)"
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={verifyOtp}>
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
          }}
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f3ee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6b705c',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#ff5722',
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 10,
  },
  googleIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  googleText: {
    fontSize: 16,
    color: '#333',
  },
});

export default LoginScreen;
