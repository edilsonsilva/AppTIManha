import * as React from 'react';
import {Text,View,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import {ipserver} from '../config/settings';
import {styles} from '../css/Styles';


let nc = "";
let em = "";
let nu = "";
let sh = "";
let idu = "";
export default function AlterarPerfil({route}){

const{dados} = route.params;
idu = dados.idusuario;
const[nomecompleto,setNomeCompleto] = React.useState(dados.nomecompleto);
const[email,setEmail] = React.useState(dados.email);
const[nomeusuario,setNomeUsuario] = React.useState(dados.nomeusuario);
const[senha,setSenha] = React.useState("");


return(
    <View style={styles.container}>
       
        <TextInput placeholder="Nome Completo"
            style={styles.input}
            onChangeText={(value)=>setNomeCompleto(value)}
            value={nomecompleto}
        />


        <TextInput placeholder="E-Mail"
            style={styles.input}
            onChangeText={(value)=>setEmail(value)}
            value={email}
        />
        <TextInput placeholder="Usuário"
            style={styles.input}
            onChangeText={(value)=>setNomeUsuario(value)}
            value={nomeusuario}
        />
        <TextInput placeholder="Nova Senha"
            style={styles.input}
            onChangeText={(value)=>setSenha(value)}
            value={senha}
        />

        <TouchableOpacity onPress={()=>{
            nc = nomecompleto;
            em = email;
            nu = nomeusuario;
            sh = senha;
            atualizarPerfil();  
        }} style={styles.btncarrinho}>
            <Text style={styles.txtcarrinho}> Atualizar Dados </Text>
        </TouchableOpacity>
    </View>
);
}

function atualizarPerfil(){
    fetch(`${ipserver}usuario/atualizar/${idu}`,{
        method:"PUT",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomeusuario:nu,
            senha:sh,
            nomecompleto:nc,
            email:em
        })
    }).then((response)=>response.json())
    .then((resultado)=>alert(resultado.rs))
    .catch((erro)=>console.error(`Erro ao tentar conectar com o servidor ${erro}`))
}