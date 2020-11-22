import React, {useEffect} from 'react'
import {View, Text, StatusBar, FlatList} from 'react-native'
import * as Contacts from 'expo-contacts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginvertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

const item = ([nome]) => {
    //alert(JSON.stringify(nome));
    return(
    <View style={styles.item}>
        <Text style={styles.nome}>{nome}</Text>
    </View>
    )
}

const Contatos = () => {

    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        (async () => {
            //Permissão do usuário para o acesso dos contatos
          const { status } = await Contacts.requestPermissionsAsync();
          //Verifica se a permissão foi dada
          if (status === 'granted') {
              //Pega os contatos armazenado no aparelho
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails],
            });
    
            //Verifica se existe algo contato
            if (data.length > 0) {
                setContatos(data);
            }
          }
        })();
      }, []);

      const renderItem = ({item}) => {
          return(
          <Item nome={item.nome} />
          )}
    return(
        <View style={styles.container}>
            <Text>Contatos</Text>
            <FlatList
                data={contatos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Contatos