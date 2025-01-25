import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Taskitem from '@/components/TaskItem';
import { useState } from 'react';

interface Task {
  text: string;
}

export default function index() {
  const [task, setTask] = useState<Task | null>(null);
  const [taskItems, setTaskItems] = useState<Task[]>([]);

  const handleTaskAddition = () => {
    if (task) {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
  };

  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>My Task</Text>
        <View style={styles.items}>
          {taskItems.length === 0 ? (
            <Text style={styles.EmptyText}>Empty data, please add first</Text>
          ) : (
            // taskItems.map((item, index) => {
            //   return (
            //     <TouchableOpacity
            //       key={index}
            //       onPress={() => completeTask(index)}
            //     >
            //       <Taskitem text={item.text} />
            //     </TouchableOpacity>
            //   );
            // })
            <FlatList
              data={taskItems}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index)}
                  >
                    <Taskitem text={item.text} />
                  </TouchableOpacity>
                );
              }}
            />
          )}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task ? task.text : ''}
          onChangeText={(text) => setTask({ text })}
        />
        <TouchableOpacity onPressIn={handleTaskAddition}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 30,
    paddingBottom: 90,
    paddingHorizontal: 20,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 20,
    flex: 1,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginRight: 10,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    color: '#FFF',
  },
  EmptyText: {
    color: 'gray',
  },
});
