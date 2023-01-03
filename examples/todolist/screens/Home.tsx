import {
    View, 
    Pressable, 
    Text, 
    StyleSheet, 
    TextInput, 
    FlatList,
    SafeAreaView
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../rtk/store';
// import counterSlice from '../rtk/slices/counterSlice';
import {addTodo, toggleTodo} from '../rtk/slices/todoSlice';


const Home = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: any) => state.todos);
    const [todo, setTodo] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            {/* <Text>Home</Text> */}
            <TextInput placeholder='Enter Todo' onChangeText={(text) => setTodo(text)} />

            <Pressable onPress={() => dispatch(addTodo(todo))}>
                <Text>Add Todo</Text>
            </Pressable>


            <FlatList
                data={todos}
                renderItem={({item}) => (
                    <Pressable onPress={() => dispatch(toggleTodo(item.id))}>
                        <Text>{item.text}</Text>
                        

                        <Text>{item.completed ? "Completed" : "Not Completed"}</Text>
                    </Pressable>
                )}
                keyExtractor={(item) => item.id}
            />
            {/* <Text>{JSON.stringify(todos)}</Text>  */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default Home;