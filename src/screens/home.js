import React, {Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

export default class home extends Component{

	constructor(props){
		super(props);
		this.state = {
			flatData:[
				{key:"1",title:'Derrota',msg:'Benfica de jorge jesus perde e não vai a champions', img:'https://image.flaticon.com/icons/png/512/88/88162.png'},
				{key:"2",title:'Ato Racista',msg:'Neymar denuncia racismo em jogo', img:'https://image.flaticon.com/icons/png/512/88/88162.png'},
				{key:"3",title:'Rebate a críticas',msg:'Mattos diz que a base do palmeiras foi feita em sua sala', img:''},
				{key:"4",title:'Crise',msg:'Pressão da torcida prejudica chegada de técnico', img:''}
			]
		};
	}
	flatRender(item){
		 return (
			 <View style={styles.flatView}>	 
				<View style={styles.flatTitle}>
					<Text style={styles.Item1}>{item.title}</Text>
				</View> 
	
				<View style={styles.img}>
					<Image source={{uri:"{item.img}"}} />
				</View>		

				<View style={styles.msg}> 
					<Text style={styles.Item2}>{item.msg}</Text>
				</View>		 
			 </View>

		 
		 );
	}

		render(){

			return(
			<View style={styles.body}>
				<FlatList style={styles.FlatList} data={this.state.flatData} renderItem={({item})=>this.flatRender(item)} />
			</View>
				

		);
		}

}

const styles = StyleSheet.create({
      body:{
       	 flex:1
	  },
	  FlatList:{
		flex:1
	  },
	  flatView:{
		marginTop:10,
		alignItems:'center',
		flex:1
	  },
	  flatTitle:{
		width:410,
		backgroundColor:'#003366',
		alignItems:'center',
		justifyContent:'center'
	  },
	  Item1:{
		  fontSize:18,
		  height:40,
		  color:'white'
	  },
	  Item2:{
		fontSize:15,
		height:45
		},
		img:{
		height:120
		}
      });