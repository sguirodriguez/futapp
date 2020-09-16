import React, {Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class profile extends Component{

		render(){

			return(
				<View style={styles.body}>
					<Text>Tela profile</Text>
				</View>
				
		);
		}

}

const styles = StyleSheet.create({
      body:{
       	 flex:1,
       	 backgroundColor:'white'  
      }
      });