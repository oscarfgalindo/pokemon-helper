import React from 'react';
import { Text, View, Button, TextInput, Picker, StyleSheet } from 'react-native';
import { search, preSearch } from './tools';

import DropDownPicker from 'react-native-dropdown-picker';
// import STRINGS from '../../localization';x

import styles from './styles'
const SearchBar = (props) => {
    const { state, goToRoute, handleChange, exampleFunction, renderProductList, allPokemonListProp } = props
    const { results, selectedValue, searchQuery, typing, open, value, items, setOpen, setValue, setItems} = state;

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
                                var temp = preSearch(inputString, allPokemonListProp)
                                console.log(results);
                                handleChange('results',temp)

                                // setResults(temp)
                                // console.log("after setting:");
                                console.log(results);
                                handleChange('searchQuery',inputString)
                                handleChange('typing',true)
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
                                handleChange('typing', false)
                            }
                        }}
                        >
                    </TextInput>
                    
                    {/* <Picker
                        selectedValue={selectedValue}
                        style={[styles.picker, props.typing ? styles.pickerShown : styles.pickerHidden]}
                        onValueChange={(itemValue, itemIndex) => {
                            handleChange('selectedValue',itemValue)
                            handleChange('searchQuery',itemValue.name)
                        }}
                        onPress={(index)=>{
                                console.log(index);
                                // alert(index)
                            // if (typing) {
                                handleChange('searchQuery',itemValue.name)
                                // setSearchQuery(itemValue.name)
                            // }
                        }}
                    >
                        {renderProductList()}
                    </Picker> */}
                    <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    />
                                    
                </View>
                
                <Button
                    onPress={
                        () => {
                        // console.log(props.allPokemonListProp);
                        console.log(results)
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
      );
}



export default SearchBar