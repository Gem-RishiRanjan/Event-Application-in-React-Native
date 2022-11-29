import React from "react";
import {View, StyleSheet, Text, TextInput, FlatList, TouchableOpacity, Modal, Button} from 'react-native';
import {Form, Formik} from 'formik';
import { RadioButton, Checkbox } from 'react-native-paper';
// import { TextInput } from "react-native-gesture-handler";
import * as yup from 'yup';

const EventSchema = yup.object({
    title: yup.string().required().min(4),
    info: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number between 1 - 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
})

export default function Editevent({changeEvent, route}){
    const [int, setInt] = React.useState(false);
    const [notint, setNotint] = React.useState(false);
    const wish = [];
    console.log(route);
    return(
        <View>
            <Formik 
                initialValues={{title: '', body:'', rating:'', day:'', interest:wish}}
                validationSchema = {EventSchema}
                onSubmit = {(values, actions) =>{
                    actions.resetForm();
                    changeEvent(values);
                }}
            >
                {(props) => (
                    <View>
                        <Text>{"\n"}</Text>
                        <TextInput style={{borderColor: "grey", borderWidth:1, height:40, padding: 10, fontWeight: "bold"}}
                            onChangeText={props.handleChange('title')}
                            onBlur={props.handleBlur('title')}
                            placeholder="Enter Event Title"
                            defaultValue={route.title}
                        />
                        <Text >{props.touched.title && props.errors.title}</Text>
                        <TextInput style={{borderColor: "grey", borderWidth:1, height:40, padding: 10, fontWeight: "bold"}}
                            onChangeText={props.handleChange('info')}
                            onBlur={props.handleBlur('info')}
                            placeholder="Enter Event Information"
                            defaultValue={route.info}
                        />
                        <Text >{props.touched.info && props.errors.info}</Text>
                        <TextInput style={{borderColor: "grey", borderWidth:1, height:40, padding: 10, fontWeight: "bold"}}
                            onChangeText={props.handleChange('rating')}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                            placeholder="Give Event Rating"
                            defaultValue={route.rating}
                        />
                        <Text >{props.touched.rating && props.errors.rating}</Text>
                        <RadioButton.Group onValueChange={props.handleChange('day')} value={props.values.day}>
                            <View>
                                <Text>weekend</Text>
                                <RadioButton value='weekend'></RadioButton>
                            </View>
                            <View>
                                <Text>weekday</Text>
                                <RadioButton value='weekday'></RadioButton>
                            </View>
                        </RadioButton.Group>




                        <Checkbox
                            status={int ? 'checked' : 'unchecked'}
                            onPress={() => {
                                
                                setInt(!int);
                                if(int == false){
                                 
                                    wish.push('I am Interested')
                                    // console.log(hobbies);
                                }
                                
                            }}
                        /><Text>Interested</Text>

                        
                        <Checkbox
                            status={notint ? 'checked' : 'unchecked'}
                            onPress={() => {
                                
                                setNotint(!notint);
                                if(notint == false){
                                    
                                    wish.push('Not Interested')
                                    // console.log(hobbies);
                                }
                               
                            }}
                        /><Text>Not Interested</Text>

                        <Button title='Edit Event' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
} 