import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [timer, setTimer] = useState(new Date().toLocaleTimeString())

  const handleAddTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  useEffect(() => {
    setInterval(() => {
      setTimer(new Date().toLocaleTimeString())
    }, 1000)
  })

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <Text style={{ fontSize: 50 }}> Timer: {timer} </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a todo"
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todosContainer}>
        {todos.map((todo, index) => (
          <View style={styles.todo} key={index}>
            <Text style={styles.todoText}>{todo}</Text>
            <Text style={styles.deleteBtn}>Delete</Text>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  todosContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
  todo: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDIrection: 'row',
  },
  todoText: {
    fontSize: 16,
    flexDirection: 'row',
  },
  deleteBtn: {
    backgroundColor: 'red',
    color: 'white',
    padding: 8,
    paddingLeft: 12,
    paddingRight: 12,
    width: 70,
    borderRadius: 10,
  }
});
