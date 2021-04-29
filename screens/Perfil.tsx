import * as React from "react";
import {View,Text,TouchableOpacity,ScrollView,Image} from "react-native";
import {ipserver} from '../config/settings';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {styles} from '../css/Styles';
import * as SQLite from 'expo-sqlite';
import AlterarPerfil from "./AlterarPerfil";

const db = SQLite.openDatabase("brecho.banco");

const Stack = createStackNavigator();

export default function Perfil(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="TelaPerfil" component={TelaPerfil} options={{headerShown:false}}/>
                <Stack.Screen name="AlterarPerfil" component={AlterarPerfil} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function TelaPerfil({navigation}){

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
            <ScrollView horizontal={false}>
           <Image source={{uri:`http://granjasaojorge.com.br/img/user.png`}} style={styles.imgPerfil} />
           <Text>Código do Usuário: {dadosperfil.idusuario}</Text>
           <Text>Nome do Usuário: {dadosperfil.nomeusuario}</Text>
           <Text>Nome Completo: {dadosperfil.nomecompleto}</Text>
           <Text>E-Mail: {dadosperfil.email}</Text>


            <TouchableOpacity onPress={()=>{
                navigation.navigate("AlterarPerfil",{dados:dadosperfil})
            }} style={styles.btncarrinho}>

                <Text style={styles.txtcarrinho}> Alterar Perfil </Text>

            </TouchableOpacity>


           <TouchableOpacity onPress={()=>{
               logout();
           }} style={styles.btncarrinho}>
               <Text style={styles.txtcarrinho}>Sair</Text>
           </TouchableOpacity>
           </ScrollView>
        </View>
    );
}
function logout(){
    db.transaction((ts)=>{
        ts.executeSql("delete from perfil")
        alert("Obrigado por usar o App Brecho.")
    });
}