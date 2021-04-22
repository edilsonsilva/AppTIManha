import { AntDesign } from "@expo/vector-icons";
import * as React from "react";
import {View,Text,Image,TouchableOpacity} from "react-native";
import {ipserver} from '../config/settings';
import {styles} from '../css/Styles';
export default function Carrinho(){
   // Vamos construir uma estrutura para carregar
//os dados sobre os produtos que virão do banco
//de dados. Iremos criar um array(lista) com o 
//uso de uma constante chamada produtos.
const[produtos,setProdutos] = React.useState([]);

// O comando React.useEffect é executado uma vez
// ao abrir a tela de home. Ele será responsável
// por carregar os dados do servidor
React.useEffect(()=>{
    fetch(`${ipserver}carrinho/itens`)
    .then((response)=>response.json())
    .then((resultado)=>setProdutos(resultado.rs))
    .catch((erro)=>console.error(`Erro ao tentar carregar os produtos->${erro}`));

})

    return(
        <View style={styles.container}>
            <View style={styles.display}>
            {
                produtos.map((item,ix)=>(

                   <View key={item._id} style={styles.cxproduto}>
                        
                        <Image source={{uri:`${item.foto}`}} style={styles.foto}/>
                        
                        <Text style={styles.nomeproduto}> {item.nomeproduto}</Text>
                        
                        <Text style={styles.preco}> {item.preco}</Text>


                        <TouchableOpacity onPress={()=>{
                            removerDoCarrinho(item._id);
                        }} style={styles.btncarrinho}>

                            <Text style={styles.txtcarrinho}>
                                Remover <AntDesign name="delete" size={20} color="white"/>
                            </Text>

                        </TouchableOpacity>

                    </View>
                ))
            }
            </View>

        </View>
    );
}

function removerDoCarrinho(id){
    fetch(`${ipserver}carrinho/removeritem/${id}`,{
        method:"DELETE",
        headers:{
            accept:'application/json',
            'content-type':'application/json'
        }
    })
    .then(()=>alert("Item removido"))
    .catch((error)=>alert(`Erro ao tentar remover o item ${error}`));
}