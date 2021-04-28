import * as React from "react";
import {View,Text,TextInput, TouchableOpacity} from "react-native";
import { styles } from "../css/Styles";
import {ipserver} from '../config/settings';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import * as SQLite from 'expo-sqlite';
import CadastroUsuario from "./CadastroUsuario";

let us = "";
let sh = "";


//Criação do banco de dados no SmartPhone
const db = SQLite.openDatabase("brecho.banco");


const Stack = createStackNavigator();

export default function Login(){
return(
    <NavigationContainer independent={true}>
        <Stack.Navigator>
            <Stack.Screen name="TelaLogin" component={TelaLogin} options={{headerShown:false}}/>
            <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
)

}



function TelaLogin({navigation}){
    const[usuario,setUsuario] = React.useState("");
    const[senha,setSenha] = React.useState("");

    return(
        <View>
            <TextInput placeholder="Usuário"
            style={styles.input}
            onChangeText={(value)=>setUsuario(value)} 
            value={usuario}
            />
            <TextInput placeholder="Senha"
            secureTextEntry 
            style={styles.input}
            onChangeText={(value)=>setSenha(value)}
            value={senha}
            />

            <TouchableOpacity onPress={()=>{
                us = usuario;
                sh = senha;
                efeturarLogin();
            }}
            style={styles.btncarrinho}>

            <Text style={styles.txtcarrinho}> Logar </Text>

            </TouchableOpacity>


            <TouchableOpacity onPress={()=>{
                navigation.navigate("CadastroUsuario");
            }}
            style={styles.btncarrinho}>

            <Text style={styles.txtcarrinho}> Cadastrar </Text>

            </TouchableOpacity>
        </View>
    );
}

function efeturarLogin(){

    fetch(`${ipserver}usuario/login`,{
        method:'POST',
        headers:{
            accept: 'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify({
            nomeusuario:us,
            senha:sh
        })
    }).then((response)=>response.json())
    .then((resultado)=>{
    
        if(resultado.rs=="null"){
            alert("Usuário inexistente. Verifque o nome de usuário e a senha");
        }    
        else{
            gravarPerfil(resultado.rs[0]);
        }
        
        }
    )
    .catch((erro)=>console.error(`Erro ao tentar logar ${erro}`))
}


function gravarPerfil(dados){

    db.transaction((ts)=>{
        ts.executeSql(
            "create table if not exists perfil(id integer primary key,idusuario text,nomeusuario text,nomecompleto text,email text,logado int);"
            );
    });

    db.transaction((tr)=>{
        tr.executeSql("insert into perfil(idusuario,nomeusuario,nomecompleto,email,logado)values(?,?,?,?,?)",
        [dados._id,dados.nomeusuario,dados.nomecompleto,dados.email,1]);

        tr.executeSql("select * from perfil",[],(_,{rows})=>{
            console.log(rows);
        })
    });


}