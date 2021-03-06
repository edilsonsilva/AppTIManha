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
    },
    input:{
        width:'90%',
        padding:10,
        marginBottom:5,
        borderBottomColor:'silver',
        borderBottomWidth:1,
        marginLeft:'auto',
        marginRight:'auto'

    },
    btncadastro:{
        backgroundColor:'#090',
        width:100,
        height:100,
        borderRadius:50,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:50,
        paddingTop:40,
        shadowColor:'black',
        shadowOffset:{width:5, height:5},
        shadowOpacity:0.9,
        shadowRadius:5,
        elevation:10
    },
    imgPerfil:{
        width:200,
        height:200,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:50,
        marginBottom:50,
        resizeMode:'cover',
        borderRadius:50

    }
})