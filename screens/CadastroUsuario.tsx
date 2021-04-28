import * as React from "react";
import {View,Text,TouchableOpacity,ScrollView,TextInput} from "react-native";
import {ipserver} from '../config/settings';
import {styles} from '../css/Styles';


let nc = "";
let em = "";
let nu = "";
let sh = "";

export default function CadastroUsuario(){

    const[nomecompleto,setNomeCompleto] = React.useState("");
    const[email,setEmail] = React.useState("");
    const[nomeusuario,setNomeUsuario] = React.useState("");
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
            <TextInput placeholder="Senha"
                style={styles.input}
                onChangeText={(value)=>setSenha(value)}
                value={senha}
            />

            <TouchableOpacity onPress={()=>{
                nc = nomecompleto;
                em = email;
                nu = nomeusuario;
                sh = senha;
                cadastroUsuario()
            }} style={styles.btncarrinho}>
                <Text style={styles.txtcarrinho}> Cadastro </Text>
            </TouchableOpacity>
        </View>
    );
}
function cadastroUsuario(){
    fetch(`${ipserver}usuario/cadastro`,{
        method:"POST",
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