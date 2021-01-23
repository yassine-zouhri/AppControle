import React, { PureComponent, Component } from 'react';
import {FlatList, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';





 class App1 extends PureComponent {
   
   constructor(){
     super();
     this.state={
         listData:[{key:'1',nom:'ZOUHRI', quantite:'13', prixunit:'54'},
         {key:'2',nom:'YASSINE', quantite:'98', prixunit:'21'},
         ],
         nom:'',
         quantite:'',
         prixunit:'',
     }
   }

  
 renderFlatListItem(item){
     return(
     <View style={{borderWidth:1, flexDirection:'row'}}>
       <View style={{flex:2}}>
         <Text style={{paddingBottom:5,color:'red'}}>Nom de l'article : {item.item.nom} </Text>
         <Text style={{paddingBottom:5,color:'red'}}>Quantité: {item.item.quantite} </Text>
         <Text style={{paddingBottom:5,color:'red'}}>Prix Unitaire(dh): {item.item.prixunit} </Text>
        </View>
         <TouchableOpacity  style={[styles.buttonStyle, {flex:1}]} onPress={()=>this.deleteItem(item.item.key)}><Text style={{color:'white'}}>Supprimer</Text></TouchableOpacity>
     </View>
     )
 }

 deleteItem(key){
  var listData=this.state.listData.slice();
  let newListdata=listData.filter(item => item.key !== key);
  this.setState({listData:newListdata})
    }

addItem(){
    const {nom, quantite, prixunit} = this.state;

    var listData=this.state.listData.slice();
    console.log({key:listData.length+1,nom:nom, quantite:quantite, prixunit:prixunit})
    listData.push({key:listData.length+1,nom:nom, quantite:quantite, prixunit:prixunit});
    this.setState({listData:listData})

}

onNomChange=(value)=>{
this.setState({nom:value})
}

onQuantiteChange=(value)=>{
  this.setState({quantite:value})
  }

onPrixChange=(value)=>{
    this.setState({prixunit:value})
}
  

  render (){
      const {listData}=this.state;
    return(
          <React.Fragment >
            <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{flex:1}}>Nom de l'article:</Text>
            <TextInput style={{flex:2.5}} placeholder="Nom de l'article" value={this.state.nom} underlineColorAndroid='grey'
            onChangeText={(value)=>this.onNomChange(value)}></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{flex:1}}>Quantite:</Text>
             <TextInput style={{flex:2.5}} placeholder="Quantite" value={this.state.quantite} underlineColorAndroid='grey'
            onChangeText={(value)=>this.onQuantiteChange(value)}></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Text style={{flex:1}}>Prix Unitaire (dh):</Text>
            <TextInput style={{flex:2.5}} placeholder="Prix unitaire (dh)" value={this.state.prixunit} underlineColorAndroid='grey'
            onChangeText={(value)=>this.onPrixChange(value)}></TextInput>
            </View>
            
            <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.addItem()}><Text style={{color:'white'}}>Ajouter un produit</Text></TouchableOpacity>
            
          <FlatList data={this.state.listData}
          extraData={this.state}
          renderItem={(item)=>this.renderFlatListItem(item)}
          keyExtractor={(item,index)=>  item.key.toString()}/>
          </React.Fragment>
    )
    }
  }
 
  const styles= StyleSheet.create({
    buttonStyle:{
    alignSelf: 'center',
    width:100,
    marginBottom:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',
    height:35,
    borderWidth: 0.3,
    borderRadius: 7,
    borderColor: 'red'}
  }
  )


export default App1;

