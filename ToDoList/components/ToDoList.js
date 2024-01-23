import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({initialValues}) => {
    const [toDos, setToDos] = useState(initialValues.map((value) => ({ id: uuidv4(), Title: value })));

    const addToDo = (newTitle) => {
        const newToDo = { id: uuidv4(), Title: newTitle };
        setToDos((prevToDos) => [...prevToDos, newToDo]);
    };

    const removeToDo = (id) => {
        setToDos((toDos) => toDos.filter((toDo) => toDo.id !== id));
    }

    return (
        <View style={styles.toDoListContainer}>
            {toDos.map((toDo) => (
            <View key={toDo.id}>
                <Text style={styles.text}>To Do: {toDo.Title}</Text>
                <View style={styles.buttonContainer}>
                <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
                </View>
            </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
    );
};

ToDoList.defaultProps = {
    initialValues: [],
};

const styles = StyleSheet.create({
    toDoListContainer: {
        margin: 10,
    },
    toDoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
});

export default ToDoList;