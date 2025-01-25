import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  text: string;
};

export default function Taskitem({ text }: Props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.circular} />
        <Text style={styles.itemText}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  circular: {
    width: 24,
    height: 24,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 20,
    marginRight: 10,
  },
  itemText: {
    maxWidth: '80%',
  },
});
