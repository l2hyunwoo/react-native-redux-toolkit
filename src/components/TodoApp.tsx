import React, {JSX, useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import useTodoActions from '../hooks/useTodoActions';
import useTodos from '../hooks/useTodos';

function BlackButton({
  onPress,
  title,
}: {
  onPress: () => void;
  title: string;
}): JSX.Element {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      android_ripple={{color: 'white'}}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

function TodoItem({id, text, done}: {id: number; text: string; done: boolean}) {
  const {toggle, remove} = useTodoActions();
  const onToggle = () => {
    toggle(id);
  };
  const onRemove = () => {
    remove(id);
  };

  return (
    <View style={styles.todo}>
      <Pressable onPress={onToggle} style={styles.toggle}>
        <Text style={done && styles.doneText}>{text}</Text>
      </Pressable>
      <BlackButton onPress={onRemove} title={'삭제'} />
    </View>
  );
}

function Todos() {
  const todos = useTodos();

  return (
    <FlatList
      data={todos}
      renderItem={({item}) => {
        return <TodoItem id={item.id} text={item.text} done={item.done} />;
      }}
    />
  );
}

function TodoInput() {
  const [text, setText] = useState('');
  const {add} = useTodoActions();

  const onPress = () => {
    add(text);
    setText('');
  };

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="할일을 입력해주세요"
        value={text}
        onChangeText={setText}
      />
      <BlackButton onPress={onPress} title="등록" />
    </View>
  );
}

function TodoApp() {
  return (
    <SafeAreaView style={styles.block}>
      <Todos />
      <TodoInput />
    </SafeAreaView>
  );
}

type Style = {
  block: ViewStyle;
  inputWrapper: ViewStyle;
  input: ViewStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  todos: ViewStyle;
  todo: ViewStyle;
  toggle: ViewStyle;
  doneText: TextStyle;
  separator: ViewStyle;
};

const styles = StyleSheet.create<Style>({
  block: {
    flex: 1,
  },
  inputWrapper: {
    borderColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  todos: {
    flex: 1,
  },
  todo: {
    flexDirection: 'row',
  },
  toggle: {
    justifyContent: 'center',
    flex: 1,
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
  },
});

export default TodoApp;
