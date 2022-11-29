import React, {useState} from "react";
import {View, StyleSheet, Text, Button, Modal, TouchableWithoutFeedback} from 'react-native';
import Editevent from "./Editevent";

export default function Details({ navigation, route}){

    // const pressHandler = () => {
    //     navigation.goBack();
    // }
    const [modalOpen, setModalOpen] = useState(false);
    const [routeval, setRouteval] = useState('');
    
    const editEvent = (events) =>{
        events.key = route.params.key;
        setRouteval(events);
        setModalOpen(false);
    }

    return(
        <View style = {styles.container}>


        <Modal visible={modalOpen}>
            <TouchableWithoutFeedback>
                <View><Text>{"\n"}</Text>
                   <Button title='Close' onPress={() => setModalOpen(false)} />
                       <Editevent editEvent = {editEvent} route = {route} />
                </View>
            </TouchableWithoutFeedback>
        </Modal>


            <Text  style = {{borderColor: "grey", borderWidth:1, height:50, padding: 10, fontWeight: "bold"}}>
            Event name : {"\t"}
            
            {routeval ? 
            routeval.title
            :route.params.title
            }</Text>



            <Text>{"\n"}</Text>
            <Text  style = {{borderColor: "grey", borderWidth:1, height:50, padding: 10, fontWeight: "bold"}}>
            Event details : {"\t"}


            {routeval ? 
            routeval.info
            :route.params.info
            }</Text>
            
            
            <Text>{"\n"}</Text>
            <Text  style = {{borderColor: "grey", borderWidth:1, height:50, padding: 10, fontWeight: "bold"}}>
            Event rating : {"\t"}


            {routeval ? 
            routeval.rating
            :route.params.rating
            }</Text>
            
            
            <Text>{"\n"}</Text>
            <Text  style = {{borderColor: "grey", borderWidth:1, height:50, padding: 10, fontWeight: "bold"}}>
            Event Day : {"\t"}
            {route.params.day}</Text>
            <Text>{"\n"}</Text>

            <Text  style = {{borderColor: "grey", borderWidth:1, height:50, padding: 10, fontWeight: "bold"}}>
            Interested : {"\t"}
            {route.params.interest}</Text>
            <Text>{"\n"}</Text>
            
             
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});