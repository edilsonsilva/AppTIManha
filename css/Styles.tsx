import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    foto:{
        width:"100%",
        height:250,
        
    },
    nomeproduto:{
        fontSize:15,
        fontWeight:'bold'
    },
    preco:{
        fontSize:18,
        color:'#070'
    },
    cxproduto:{
        width:"47%",
        margin:6,
        shadowColor:'#000',
        shadowOpacity:0.8,
        shadowRadius:2,
        shadowOffset:{width:0, height:10},
        elevation:2,
        padding:6

    },
    display:{
        flexDirection:'row',
        flexWrap:'wrap'
    }
})