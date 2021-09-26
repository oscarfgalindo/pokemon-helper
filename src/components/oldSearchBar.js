import React, { useState } from 'react';
import { Text, View, Button, TextInput, Picker, StyleSheet } from 'react-native';
import { search, preSearch } from './tools';

import PokemonTeam from './PokemonTeam';


const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedValue, setSelectedValue] = useState("java");
    const [results, setResults] = useState([]);
    const [typing, setTyping] = useState(false);

    

    const renderProductList = () => {
        return results.map((pokemon) => {
          return <Picker.item label={pokemon.name} value={pokemon} />
        })
      }

  return (
    <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            // flexDirection:"column"
        }}>
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                // alignItems: "center",
                flexDirection:"row"
            }}>
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                }}>
                <TextInput
                    placeholder="Type your pokemon here"
                    onChangeText={
                        (inputString) => {
                            var temp = preSearch(inputString, props.allPokemonListProp)
                            console.log(results);
                            setResults(temp)
                            console.log("after setting:");
                            console.log(results);
                            setSearchQuery(inputString)
                            setTyping(true)
                        }
                    }
                    defaultValue={searchQuery}
                    style={{
                        // flex: 1,
                         width: '50%',
                        // minWidth: '50%',
                    }}
                    onBlur={()=>{
                        if (typing) {
                            setTyping(false)
                        }
                    }}
                    >
                </TextInput>
                
                <Picker
                    selectedValue={selectedValue}
                    style={[styles.picker, typing ? styles.pickerShown : styles.pickerHidden]}
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedValue(itemValue)
                        setSearchQuery(itemValue.name)
                    }}
                    onPress={(index)=>{
                            console.log(index);
                            alert(index)
                        // if (typing) {
                            setSearchQuery(itemValue.name)
                        // }
                    }}
                >
                    {renderProductList()}
                </Picker>
                
            </View>
            
            <Button
                onPress={
                    () => {
                    console.log(props.allPokemonListProp);
                    search(searchQuery, props.allPokemonListProp);
                }}
                title="Search"
                style={{
                    // flex: 1,
                    // height: 20,
                    // width: 80,
                     width: '50%',
                }}
            />
            
        </View>
        <View
            style={{
                 flex: 1,
               // flexDirection:"column"
            }}>
        </View>
      
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      flex: 1,
      
    },

    picker :{ 
        flex: 1,
        // height: 20, width: "100%" 
    },

    pickerShown :{ 
        flex: 1,
        // height: 20, width: "100%" 
        opacity: 1,

    },

    pickerHidden :{ 
        flex: 1,
        // height: 20, width: "100%" 
        opacity: 0,
    },

    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 40,
    },
    dropdown: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginTop: 20,
    },
    dropdown2: {
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 0.5,
        marginTop: 20,
        padding: 8,
    },
    icon: {
        marginRight: 5,
        width: 18,
        height: 18,
    },
    item: {
        paddingVertical: 17,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
  });

    
export default SearchBar;