import React, {Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class search extends Component{

		render(){

			return(
				<View style={styles.body}>
					

					<View style={styles.indice}>
						<Text style={styles.title}>Escalação</Text>
					</View>

					<View style={styles.barra}>
						<View style={styles.opA}>
							<View style={styles.time}><Image source={{uri:"https://logodetimes.com/times/corinthians/logo-corinthians-2048.png"}} style={styles.logo}/></View>
							<Text style={styles.textTime}>Time A</Text>
						</View>

						<View style={styles.opB}>
							<View style={styles.time}><Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/480px-Palmeiras_logo.svg.png"}} style={styles.logo}/></View>
							<Text style={styles.textTime}>Time B</Text>
						</View>

					</View>

					<View style={styles.campo}>
						<Image source={{uri:"https://images.clipartlogo.com/files/istock/previews/8041/80418633-realistic-vertical-football-soccer-field-illustration.jpg"}} style={styles.fotocampo}/>
					</View>

					
					</View>
				
				
		);
		}

}

const styles = StyleSheet.create({
	body:{
        flex:1  
      },
      indice:{
        backgroundColor:'#003366',
        height:60,
        justifyContent:'center'
      },
      title:{
        fontSize:25,
        color:'white',
        marginLeft:30
      },
      barra:{
       flexDirection:'row',
       height:60,
       borderWidth:0.7,
       borderColor:'#003366',
       padding:3
      },
      opA:{
        flex:1,
        borderRightWidth:0.35,
        borderColor:'#003366',
        flexDirection:'row',
        alignItems:'center'
      },
      opB:{
        flex:1,
        borderLeftWidth:0.35,
        borderColor:'#003366',
        flexDirection:'row',
        alignItems:'center'
      },
      time:{
        height:50,
        borderColor:'#003366',
        borderWidth:1,
        width:50,
        marginLeft:2,
        borderRadius:25
      },
      textTime:{
        fontSize:20,
        color:'#003366',
        marginLeft:5

      },
      logo:{
        flex:1
      },
      campo:{
       	flex:1,
        justifyContent:'center',
      },
      fotocampo:{
        flex:1
      }
      });