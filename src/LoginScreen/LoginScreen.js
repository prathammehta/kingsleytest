import React, {Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    StatusBar,
    Platform
} from 'react-native'

export default class LoginScreen extends Component{
    render() {
        return (
            <View style={styles.containerView}>
                <StatusBar barStyle='light-content'/>
                <Image style={styles.backgroundImage} source={require('../../assets/images/backgroundImage.png')}/>
                <SafeAreaView style={styles.containerSafeView}>
                    <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior={Platform.OS == 'ios'?"padding":""}>
                        <Image style={styles.backArrowImage} source={require("../../assets/images/backArrow.png")}/>
                        <View style={styles.logoContainer}>
                            <View style={{flex:0.9}}/>
                            <View style={{flex:1, paddingTop:0}}>
                                <Text style={styles.logoText}>LOGO</Text>
                            </View>
                        </View>
                        <View style={styles.formContainer}>
                            <Text style={styles.titleText}>What's your Phone Number?</Text>
                            <Text style={styles.subTitleText}>Please confirm your country code and enter your phone number</Text>
                            <View style={styles.textInputContainer}>
                                <TextInput 
                                    selectionColor='white' 
                                    style={{...styles.textInput, flex:1}}
                                    value={'+0'}
                                    returnKeyType='next'
                                />
                                <TextInput 
                                    placeholderTextColor='rgba(255,255,255,0.5)' 
                                    placeholder='Phone Number' 
                                    selectionColor= 'white' 
                                    style={{...styles.textInput, flex:5, marginLeft:20}}
                                    returnKeyType='next'
                                />
                            </View>
                            <TouchableOpacity style={styles.nextTouchable}>
                                <Image style={styles.nextButtonImage} source={require('../../assets/images/nextButton.png')}/>
                                <Text style={styles.nextText}>NEXT</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerView:{
        flex:1
    },
    containerSafeView:{
        flex:1
    },
    keyboardAvoidingView:{
        flex:1,
    },
    backgroundImage:{
        resizeMode:'cover',
        width:'100%',
        height:'100%',
        position:'absolute'
    },
    backArrowImage:{
        width:22,
        height:22,
        resizeMode:'contain',
        margin:10
    },
    logoText:{
        color:'white',
        fontSize:50,
        fontFamily:"Poppins-Bold",
    },
    logoContainer:{
        flex:0.7,
        alignItems:'center',
        justifyContent:'center'
    },
    formContainer:{
        flex:1,
        alignItems:'center',
        padding:50
    },
    titleText:{
        fontSize:18,
        color:'white',
        fontFamily:'Poppins-SemiBold',
        textAlign:'center'
    },
    subTitleText:{
        fontSize:12,
        color:'white',
        opacity:0.9,
        fontFamily:'Poppins-Regular',
        marginTop:20,
        textAlign:'center'
    },
    textInputContainer:{
        flexDirection:'row'
    },
    textInput:{

        marginTop:55,
        fontSize:15,
        width:'100%',
        borderBottomColor:'rgba(255,255,255,0.7)',
        borderBottomWidth:1,
        color:'white',
        fontFamily:'Poppins-Regular'        
    },
    nextTouchable:{
        marginTop:55,
        alignItems:'center',
        justifyContent:'center',
    },
    nextButtonImage:{
        resizeMode:'stretch',
        width:250,
        height:50
    },
    nextText:{
        position:'absolute',
        fontFamily:'Poppins-SemiBold',
        fontSize:16,
        color:'rgba(48,91,255,1)',
        textAlign:'center'
    }
})