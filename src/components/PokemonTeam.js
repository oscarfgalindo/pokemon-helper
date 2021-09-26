import React, { useState } from 'react';
import { Text, View, Button, TextInput, FlatList, StyleSheet } from 'react-native';
import { search, preSearch } from './tools';

const PokemonTeam = (props) => {
    const [teamName, setTeamName] = useState("Team" + props.teamId)
    const [pokemonArray, setPokemonArray] = useState([]);
    const styles = StyleSheet.create({
        container: {
         flex: 1,
         paddingTop: 22
        },
        item: {
          padding: 10,
          fontSize: 18,
          height: 44,
        },
      });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <FlatList
            data={pokemonArray}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
    </View>
  )
}
export default PokemonTeam;