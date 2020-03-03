import React from 'react';
import {View,Text,StyleSheet,TextInput,BackHandler} from 'react-native';
import * as Font from "expo-font";

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fontLoaded:false
        }
        this.BackHandler=null;
    }
    async componentDidMount(){
        await Font.loadAsync({
            Fertigo_PRO: require("../assets/fonts/Fertigo_PRO.otf")
        });
        this.setState({fontLoaded:true});
        this.BackHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.handleBackPress
          );
    }
    componentWillUnmount(){
        this.BackHandler.remove();
    }
    handleBackPress=()=>{
        this.props.navigation.navigate("Login");
        return true;
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                <Text style={{fontFamily: "Fertigo_PRO"}}>
                    Create New Register
                </Text>
                <TextInput style={styles.textInput}>
                    <Text>Mg Aye Win</Text>
                    <Text>Name*</Text>
                </TextInput>
               
                <TextInput style={styles.textInput}>
                    <Text>+95123456789</Text>
                    <Text>Phone Number*</Text>
                </TextInput>
                
                <TextInput style={styles.textInput}>
                    <Text>9/PaMaNa(N)123456</Text>
                    <Text>NRC Number</Text>
                </TextInput>

                <TextInput style={styles.textInput}>
                    <Text>5/2/2020</Text>
                    <Text>Date of Birth</Text>
                </TextInput>

                </View>
               

            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    textInput:{
        flexDirection:"row",
        borderWidth:1,
        margin:10

    }
})