import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
  
    const handleAddTask = () => {
        if (title.trim() !== "") {
            onAddTask(String(title));
            setTitle();
        }
      };
  
    return (
        <View style={styles.addToDoForm}>
            <TextInput
                style={styles.input}
                placeholder="Test Placeholder"
                value={title}
                onChangeText={(text) => setTitle(text)}
                returnKeyType="done"
            />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    );
  };

    const styles = StyleSheet.create({
        addToDoForm: {
            margin: 10,
        },
        input: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,
        },
    });


export default AddTask;