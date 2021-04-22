import * as React from "react";
import {View,Text,Image, TouchableOpacity} from "react-native";
import {ipserver} from "../config/settings";
import {styles} from '../css/Styles';
import {AntDesign} from '@expo/vector-icons';


export default function Detalhes({route}){

const { idproduto } = route.params;

// Vamos construir uma estrutura para carregar
//os dados sobre os produtos que virão do banco
//de dados. Iremos criar um array(lista) com o 
//uso de uma constante chamada produtos.
const[produtos,setProdutos] = React.useState([]);

// O comando React.useEffect é executado uma vez
// ao abrir a tela de home. Ele será responsável
// por carregar os dados do servidor
React.useEffect(()=>{
    fetch(`${ipserver}produto/codproduto/${idproduto}`)
    .then((response)=>response.json())
    .then((resultado)=>setProdutos(resultado.rs))
    .catch((erro)=>console.error(`Erro ao tentar carregar os produtos->${erro}`));

},[])

    return(
        <View style={styles.container}>
            <View style={styles.display}>
            
              
                    <View style={styles.cxproduto}>
                        
                        <Image source={{uri:`${produtos.foto}`}} style={styles.fotodetalhe}/>
                        
                        <Text style={styles.nomeproduto}> {produtos.nomeproduto}</Text>
                        
                        <Text style={styles.nomeproduto}>{produtos.descricao}</Text>

                        <Text style={styles.preco}> {produtos.preco}</Text>

                        <Text style={styles.preco}> Código do produto:{produtos._id}</Text>

                    </View>

                    <TouchableOpacity onPress={()=>{
                        adicionarCarrinho(produtos);
                    }} style={styles.btncarrinho}>
                        <Text style={styles.txtcarrinho}>
                            Adicionar ao carrinho
                        <AntDesign name='shoppingcart' size={20} color='#fff'/>    
                        </Text>
                    </TouchableOpacity>
          
            </View>

        </View>
    );
}


function adicionarCarrinho(dados){
    fetch(`${ipserver}carrinho/adicionar`,{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            idproduto:dados._id,
            nomeproduto:dados.nomeproduto,
            preco:dados.preco,
            foto:dados.foto
        })
    })
    .then((response)=>response.json())
    .then((resultado)=>alert(resultado.rs))
    .catch((error)=>alert(`Não foi possível adicionar -> ${error}`))

}