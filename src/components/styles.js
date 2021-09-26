import { StyleSheet } from 'react-native'

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

  export default styles