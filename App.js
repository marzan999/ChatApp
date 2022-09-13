import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View>
        <Image 
          source={require('./2.png')}
          style={{height: 130, width: 130, alignSelf: 'center', marginTop: 100}}
        />
      </View>
      <View style={{marginHorizontal: 32}}>
      <Text style={styles.header}>Username</Text>
      <TextInput 
        style={styles.input}
        placeholder = 'Type here...'
         
      />
      <View style={{alignItems: 'flex-end', marginTop: 80, marginRight: 7}}>
      <TouchableOpacity style={styles.continue} >
      <AntDesign name="arrowright" size={24} color="black" />
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6FA",
  },
  circle: {
    width: 600,
    height: 600,
    borderRadius: 300,
    backgroundColor: "#F4F5F7",
    position: "absolute",
    left: -150,
    top: -10,
  },
  header: {
    fontWeight: '800', 
    fontSize: 30, 
    color: '#D8BFD8', 
    marginTop: 32
  }, 
  input: {
    marginTop: 25, 
    height: 50, 
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#EE82EE', 
    borderRadius: 30, 
    paddingHorizontal: 16, 
    color: '#DA70D6', 
    fontWeight: '600'
  }, 
  continue: {
    width: 50, 
    height: 50, 
    borderRadius: 35, 
    backgroundColor: '#D8BFD8', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
});
