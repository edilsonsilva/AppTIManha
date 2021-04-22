import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    foto:{
        width:"100%",
        height:250,
        resizeMode:'cover'
        
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
    },
    acesso:{
        width:200,
    },
    fotodetalhe:{
        width:400,
        height:300
    },
    btncarrinho:{
        backgroundColor:'#090',
        width:200,
        marginLeft:'auto',
        marginRight:'auto',
        padding:10,
        marginTop:100,
    },
    txtcarrinho:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center',
    }
})