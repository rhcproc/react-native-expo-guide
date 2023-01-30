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
            <TextInput style={styles.input} placeholder='Enter Todo' onChangeText={(text) => setTodo(text)} />

            <Pressable style={styles.add} onPress={() => dispatch(addTodo(todo))}>
                <Text>Add</Text>
            </Pressable>


            <FlatList
                style={styles.flatlist}
                data={todos}
                renderItem={({item}) => (
                    <Pressable onPress={() => dispatch(toggleTodo(item.id))}>
                        <Text style={styles.todos} >{item.text} {item.completed ? "[o]" : "[x]"}</Text>
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
    todos: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    add: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'column',
    },
    flatlist: {
        width: '100%',
        textAlign: 'center',
        marginTop: 20,
    }


});


export default Home;