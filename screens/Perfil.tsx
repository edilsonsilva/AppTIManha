import * as React from "react";
import {View,Text,TouchableOpacity,ScrollView,Image} from "react-native";
import {ipserver} from '../config/settings';
import {styles} from '../css/Styles';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("brecho.banco");

export default function Perfil(){

    const[dadosperfil, setDadosPerfil] = React.useState([]);

    React.useEffect(()=>{
        db.transaction((ts)=>{
            ts.executeSql("select * from perfil",[],(_,{rows:{_array}})=>{
                setDadosPerfil(_array[0]);
                console.log(_array[0]);
            });
        });
    },[])


    return(
        <View style={styles.container}>
           <Image source={{uri:`http://granjasaojorge.com.br/img/user.png`}} style={styles.imgPerfil} />
           <Text>Código do Usuário: {dadosperfil.idusuario}</Text>
           <Text>Nome do Usuário: {dadosperfil.nomeusuario}</Text>
           <Text>Nome Completo: {dadosperfil.nomecompleto}</Text>
           <Text>E-Mail: {dadosperfil.email}</Text>
           <TouchableOpacity onPress={()=>{
               logout();
           }} style={styles.btncarrinho}>
               <Text style={styles.txtcarrinho}>Sair</Text>
           </TouchableOpacity>
        </View>
    );
}
function logout(){
    db.transaction((ts)=>{
        ts.executeSql("delete from perfil")
        alert("Obrigado por usar o App Brecho.")
    });
}