import React from 'react'
import SearchBar from '../components/SearchBar';
import { Text, View, Button, TextInput, Picker, StyleSheet } from 'react-native';


class SearchBarContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchQuery: "",
            selectedValue:"java",
            results: [],
            typing: false,
            open: false,
            value: null,
            items: []
        }
    }

    async componentDidMount() {
    }

    // goToRoute = (route) => {
    //     this.props.navigation.navigate(route)
    // }

    handleChange = (key, value) => {
        // console.log("in handleChange");
        // console.log(key + " " + value)
        this.setState({
            [key]: value,
        })
    }
    // exampleFunction = () => {
    //   //  console.log("You clicked me")
    // }

    renderProductList = () => {
        // return this.state.results.map((pokemon) => {
        //   return <Picker.item label={pokemon.name} value={pokemon} />
        // })
    
    }
    setOpen = (value) => {
        this.setState({
            ["open"]: value,
        })
    }  

    setValue = (value) => {
        this.setState({
            ["value"]: value,
        })
    }  

    setItems = (value) => {
        this.setState({
            ["items"]: value,
        })
    }  


    render() {
        console.log("here");
        alert("here")

        return (
            <SearchBar
                {...this.props}
                state={this.state}
                // goToRoute={this.goToRoute}
                handleChange={this.handleChange}
                // exampleFunction={this.exampleFunction}
                renderProductList={this.renderProductList}
                setOpen={this.setOpen}
                setValue={this.setValue}
                setItems={this.setValue}
                
            />
        )
    }
}

export default SearchBarContainer