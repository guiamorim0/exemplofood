import { useState } from "react"

// ARRAY DE OBJETOS CONTENDO O ESTADO INCIAL DO CARDAPIO
const cardapio=[
    {id:1,nome:"Combo-01",preco:25.00,disponivel:false,quantidade:0},
    {id: 2,nome:"Combo-02",preco:45.00,disponivel:true,quantidade:10},
    {id: 3,nome:"Combo-03",preco:75.00,disponivel:false,quantidade:0},
    {id: 4,nome:"Combo-04",preco:95.00,disponivel:true,quantidade:20},
]

const Pedido = () => {

    //hook - useState - manipula o estado da variavel
    //estados para gerenciar a lista de items do cardapio

    const[items,setItems]=useState(cardapio);
    const[status,setStatus]=useState("");
    const [enviar,setEnviar]=useState(false);

    // valor fixo adcionado ao total quando tiver no carrinho
    const taxaEntrega= 5.00;

    //funcao que altera a quantidade do pedido
    const AlterarQuantidade=(id,valor)=>{
        setItems(alt=>
            // MAP: CRIA UM NOVO ARRAY E PERCORRE OS ITEMS SEM MODIFICAR O ORIGINAL (IMUTABILIDADE)
            // TERNARIO: VERIFICA SE O ITEM DA ITERACAO ATUAL É O QUE DEVE SER ALTERADO
            //SPREAD (...item) - MANTEM OS VALORES ANTIGOS E ADICIONA OS NOVOS
            //MATH.max: OBJETO QUE GARANTE QUE A QUANTIDADE NUNCA SERA MAIOR QUE 0

            alt.map(item=>
                item.id === 0 ? {...item,quantidade:Math.max(0,item.quantidade + valor)}: item
            )
        )
    }

    // filter: seleciona apenas os produtos disponiveis no carrinho
    const produtosDisponiveis = items.filter(item=>item.disponivel);
    const carrinho = items.filter(item=>item.quantidade > 0);

    // reduce: calcula a soma dos items(preco * quantidade) e adiciona a taxa de entrega
    const subTotal = carrinho.reduce((ac,item)=>ac + item.preco * item.quantidade,0);
    const total = subTotal > 0 ? subTotal + taxaEntrega : 0;

    //SIMLACAO DO CICLO DE VIDA DA ENTREGA USANDO TEMPORIZADOR ASSINCRONO

    const ConfirmarPedido=()=>{
        setEnviar(true)
        setStatus("Restaurante confirmou seu pagamento, preparando seu pedido...")
        setTimeout(()=>{
            setStatus("Seu Pedido saiu para entrega")
            setEnviar(false)
        },5000) // 5 segundos

        setTimeout(()=>{
            setStatus("Codigo Confirmado.Seu pedido foi entregue com sucesso!")
            setEnviar(false)
        },10000) // 10 segundos

    }


  return (
    <>
      
    </>
  )
}

export default Pedido
