import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Loader from '../component/Loader';
import {useDispatch} from 'react-redux';
import {login} from '../redux/actions';
import {Utility} from '../Utility/Index';
import {Avatar, List, Button} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomTextInput from '../component/CustomTextInput';
import Strings from '../Utility/Strings';

const RegisterScreen = () => {
  const [loading, setloading] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setErrorEmail] = useState(false);
  const [mobile, setMobile] = useState();
  const [mobileError, setMobileError] = useState(false);
  const [PIC, setPIC] = useState('');

  const uploadImage = async () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      //   includeBase64: true,
    };
    await launchImageLibrary(options, response => {
      console.log('::::', JSON.stringify(response, null, 2));
      if (response.didCancel) {
        console.log('cancelled');
      } else if (response.errorCode) {
        console.log(response.errorMessage);
      } else {
        setPIC(response.assets[0]);
      }
    });
  };

  let imagePath =
    PIC.uri != '' ? {uri: PIC.uri} : require('../assets/upload.png');

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <KeyboardAwareScrollView>
        <Image
          source={require('../Image/aboutreact.png')}
          style={{
            width: '50%',
            height: 100,
            resizeMode: 'contain',
            margin: 30,
            alignSelf: 'center',
          }}
        />
        <CustomTextInput
          placeholder="Name"
          onChangeText={text => {
            setName(text);
            if (text !== '') {
              setNameError(false);
            } else {
              setNameError(true);
            }
          }}
          value={name}
          isShowValidation={nameError}
          validationErrorMessage={Strings.Register.nameError}
        />
        <CustomTextInput
          placeholder="Email"
          onChangeText={text => {
            setEmail(text);
            if (Utility.email_validation(text)) {
              setErrorEmail(false);
            } else {
              setErrorEmail(true);
            }
          }}
          value={email}
          isShowValidation={emailError}
          autoCapitalize="none"
          keyboardType="email-address"
          validationErrorMessage={
            email == ''
              ? Strings.Register.EmailError
              : Strings.Register.EmailError1
          }
        />
        <CustomTextInput
          placeholder="Mobile"
          onChangeText={text => {
            setMobile(text);
            if (text != '') {
              setMobileError(false);
            } else {
              setMobileError(true);
            }
          }}
          isShowValidation={mobileError}
          validationErrorMessage={Strings.Register.mobileError}
        />
        {/* <CustomTextInput
          placeholder="Password"
          onChangeText={text => {
            setName(text);
            if (text != '') {
              setNameError(false);
            } else {
              setNameError(true);
            }
          }}
          isShowValidation={nameError}
          validationErrorMessage={Strings.Register.nameError}
        /> */}

        <View style={styles.imageUploadSection}>
          <Image
            source={imagePath}
            style={{height: 150, width: 150}}
            resizeMode="contain"
          />
          <Button mode="contained" onPress={uploadImage}>
            upload
          </Button>
        </View>
        <View style={{alignItems: 'center'}}>
          <Button mode="elevated">Submit</Button>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  imageUploadSection: {
    width: '90%',
    marginVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
