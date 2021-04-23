import * as React from "react";
import {View,Text,TextInput,ScrollView,TouchableOpacity} from "react-native";
import {ipserver} from '../config/settings';
import {styles} from '../css/Styles';

let np = "";
let dp = "";
let qt = "";
let pr = "";
let ft = "";

export default function Cadastro(){

    const [nomeproduto, setNomeProduto]=React.useState("");
    const [descricao,setDescricao]=React.useState("");
    const [quantidade,setQuantidade]=React.useState("");
    const [preco,setPreco]=React.useState("");
    const [foto,setFoto]=React.useState("");

    return(
        <View style={styles.container}>
            <ScrollView horizontal={false}>
            <View style={{paddingTop:100}}>
            
            <TextInput placeholder="Nome do Produto"
            onChangeText={(value)=>setNomeProduto(value)}
            value={nomeproduto}
            style={styles.input}/>
            
            <TextInput placeholder="Descrição" 
            onChangeText={(value)=>setDescricao(value)}
            value={descricao}
            style={styles.input}/>

            <TextInput placeholder="Quantidade" 
            onChangeText={(value)=>setQuantidade(value)}
            value={quantidade}
            keyboardType="number-pad" style={styles.input}/>

            <TextInput placeholder="Preço"
            onChangeText={(value)=>setPreco(value)}
            value={preco}
            keyboardType="decimal-pad" style={styles.input}/>

            <TextInput placeholder="Foto"
            onChangeText={(value)=>setFoto(value)}
            value={foto}
            style={styles.input}/>

            <TouchableOpacity onPress={()=>{
                np = nomeproduto;
                dp = descricao;
                qt = quantidade;
                pr = preco;
                ft = foto;
                efeturarCadastro();

            }} style={styles.btncadastro}>
                <Text style={styles.txtcarrinho}> Cadastrar </Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
}

function efeturarCadastro(){
    fetch(`${ipserver}produto/cadastro`,{
        method:'POST',
        headers:{
            accept:'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify({
            nomeproduto:np,
            descricao:dp,
            quantidade:qt,
            preco:pr,
            foto:ft
        })
    })
    .then((response)=>response.json())
    .then((resultado)=>alert(resultado.rs))
    .catch((error)=>alert(`Erro ao tentar cadastrar ${error}`))
}