import React, {Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class search extends Component{

		render(){

			return(
				<View style={styles.body}>
					<Text>Tela search</Text>
				</View>
				
		);
		}

}

const styles = StyleSheet.create({
      body:{
       	 flex:1,
       	 backgroundColor:'orange'  
      }
      });