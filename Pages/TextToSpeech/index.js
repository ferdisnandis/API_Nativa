import react from 'react';
import {View, Text, Button, StatusBar, TextInput} from 'react-native';
import * as Speech from 'expo-speech';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    input:{
        width: '90%',
        height: 40,
        bordercolor: 'gray',
        borderwidth: 1,
        marginTop: 20,
        padding: 5,
        borderRadius: 6
    },
})
const TextToSpeech = () => {
    const [text, setText] = useState('');

    const speak = () => {
        //let textToSpeech = "Olá, boa tarde";
        Speech.speak(textToSpeech);
    }
    return(
        <View style={styles.container}>
            <TextInput valur={text} onChangeText={t => setText(t)} style={styles.input}/> 
            <Button title="Clique para falar" onPress={() => speak()} />
            <Text>Text to Speech</Text>
        </View>
    )
}
export default TextToSpeech;