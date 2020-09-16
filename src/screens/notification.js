import React, {Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class notification extends Component{

		render(){

			return(
				<View style={styles.body}>
					<Text>Tela notification</Text>
				</View>
				
		);
		}

}

const styles = StyleSheet.create({
      body:{
       	 flex:1,
       	 backgroundColor:'red'  
      }
      });