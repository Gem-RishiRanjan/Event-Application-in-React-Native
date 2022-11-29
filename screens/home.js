import React, {useState} from "react";
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Modal, Button, TouchableWithoutFeedback, Keyboard, Pressable, Image} from 'react-native';
import Editevent from "./Editevent";
import Eventform from "./eventform";

export default function Home({navigation, route}){

    const [modalOpen, setModalOpen] = useState(false);
    const [editdelOpen, seteditdelOpen] = useState(false);
    const [event, setEvent] = useState([
       { title: 'Diwali', rating: 4, info: 'On the Eve of Deepawali', key: '1',day:'weekend', interest: 'interested' },
       { title: 'Goodies Distribution', rating: 3, info: 'Goodies to the freshers', key: '2',day:'weekday', interest: 'not interested'},
       { title: 'Team Lunch', rating: 5, info: 'Friday enjoyment', key: '3',day:'weekend', interest: 'interested'}

    ]);

    if(route){
        console.log(route);
        console.log(route.key);
    }

    const [selectedItems, setSelectedItems] = useState([]);
    const [select, setSelect] = useState(false);
    const [getkey, setKey] = useState('');
    const [editform, setEditForm] = useState(false);

  const deleteHandler = (item) =>{
    // console.log(key);
    setEvent((prevEvent) => {
      return prevEvent.filter(event => event.key != item.key)
    })
    seteditdelOpen(false);
  }




    const pressHandler = (item) =>{

        if(selectedItems.length > 0){

            return longPressHandler(item.key);
        }
        navigation.navigate('Details', item)
    }

    const longPressHandler = (key) =>{
        setSelect(true);

        if(selectedItems.includes(key)){

            const newDel = selectedItems.filter((delId) => delId != key);
            if(selectedItems.length == 0){
                setSelect(false);
            }
        
            return setSelectedItems(newDel);
        }
        // else{
            setSelectedItems([...selectedItems, key])
        // }
    }


    console.log(selectedItems);

    // if(selectedItems.length > 0){
    //     setSelect(true);
    // }

    
    // if(selectedItems.length == 0){
    //     setSelect(false);
    // }

    // const getSelected = (item) =>{
    //     return selectedItems.includes(item)
    // }

    const addEvent = (events) =>{
        events.key = Math.random().toString();
        setEvent((currentevents) => {
            return [events, ...currentevents]
        });
        setModalOpen(false);
    }


    const changeEvent = (events) =>{
        console.log(events);
        console.log("hellozzzzzzzzzzzzzzzzzzzzzzz");
        // events.key = getkey.key;
        // events.key = Math.random().toString();
        setEvent((prevEvent) => {
            return prevEvent.filter(event => event.key != getkey.key)
        });
        console.log('hello');
        
        changedelEvent(events);

    }

    const changedelEvent = (events) =>{
        console.log(events)
        events.key = Math.random().toString();
        setEvent((currentevents) => {
            return [events, ...currentevents]
        });
        setEditForm(false);
        seteditdelOpen(false);
    }

    // const changeEvent = (events) =>{
    //     events.key = Math.random().toString();
    //     setEvent((currentevents) => {
    //         return [events, ...currentevents]
    //     });
    //     setEditForm(false);
    //     seteditdelOpen(false);
    // }



    return(
        <View style = {styles.container}>

        <Modal visible={modalOpen} style={styles.modalstyle} transparent={true} animationType= {'slide'}>
            <View style={{backgroundColor:"#000000aa", flex:1}}>
                <View style={{backgroundColor:"#ffffff", margin:30, padding:20}}>
                    <Text>{"\n"}</Text>
                   <Button title='Close' onPress={() => setModalOpen(false)} />
                       <Eventform addEvent = {addEvent}/>
                </View>
            </View>
        </Modal>



        <Modal visible={editdelOpen} style={styles.editstyle} transparent={true} animationType= {'slide'}>
            <View style={{backgroundColor:"#000000aa", flex:1}}>
                <View style={{backgroundColor:"#ffffff", marginTop:'50%', marginRight:'10%',marginLeft:'10%', flex:0.50, flexDirection:"column",paddingLeft:100,paddingBottom:125, borderRadius:10}}>
                    
                   <Pressable style={styles.mod} onPress = {() => setEditForm(true)}>
                    <Text style={styles.input}>Edit</Text></Pressable>
                    <Pressable style={styles.mod} onPress = {()=> deleteHandler(getkey)}>
                    <Text style={styles.input}>Delete</Text></Pressable>
                    <Pressable style={styles.mod} onPress={() => seteditdelOpen(false)}>
                    <Text style={styles.input}>Close</Text></Pressable>
                   
                       
                </View>
            </View>
        </Modal>

        <Modal visible={editform} style={styles.modalstyle} transparent={true} animationType= {'slide'}>
            <View style={{backgroundColor:"#000000aa", flex:1}}>
                <View style={{backgroundColor:"#ffffff", margin:30, padding:20}}>
                    <Text>{"\n"}</Text>
                   <Button title='Close' onPress={() => {setEditForm(false); seteditdelOpen(false)}} />

                       <Editevent changeEvent = {changeEvent} route = {getkey} />
                
                </View>
            </View>
        </Modal>



            <Pressable style={{backgroundColor:"#f56d05", height:50,width:50, borderRadius:25, paddingLeft:14,paddingRight:5,paddingTop:1, marginLeft:120}} onPress={() => setModalOpen(true)}>
            <Text style={{fontWeight:'bold', fontSize:40, color:'white'}}>+</Text>
            </Pressable>

            <FlatList 
                data = {event}
                renderItem = {({item}) => (
                    <TouchableOpacity onPress={ () => pressHandler(item) }> 
                    {/* // onLongPress = {() => longPressHandler(item.key)}> */}
                        <Text>{"\n"}</Text>
                        <View style = {{borderColor: "grey", borderWidth:1, height:40, padding: 10, fontWeight: "bold", flex:1, flexDirection:"row", justifyContent:"space-between"}}>
                        <Text >{item.title}</Text>
                        
                        <Pressable style={styles.button} onPress={() => {seteditdelOpen(true); setKey(item)}}>
                            <Text>Options</Text>
                        </Pressable>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    overlay:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:"rgba(0,0,0,0.4)",
        top:0,
        left:0
    },
    modalstyle:{
        height:'80%',
        justifyContent:'center',
        flex:'1',
        backgroundColor:'red'

    },
    button:{
        // display:'flex',
        // justifyContent:'flex-end',
        backgroundColor: 'grey',
        paddingLeft: 3,
        paddingRight: 3,
        fontWeight:'bold',
        height:25,
        paddingTop:2 

        
    },
    editstyle:{
        height:20,
    },
    mod:{
        border:'solid',
        borderWidth:1,
        width:90,
        marginTop:40,
        height:40,
        paddingLeft:30,
        paddingRight:20,
        paddingTop:9,
        textAlign:'center'
    },
    input:{   
        fontWeight:'bold',
        fontSize:15
    }

});

