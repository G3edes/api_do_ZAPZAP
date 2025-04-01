/*******************************************
 * Objetivo: 
 * Data:04/02/2025
 * Autor:Gabriel Silva Guedes
 * Versão:1.0
 *******************************************/

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//INICIA A UTILIZACAO DO EXPRESS
const app= express()

app.use((request, response, next)=>{
    //Permissao de onde virao a requisicao na API
    //('*')-Fica liberado para qualquer maquina
    //('ip')-restringe para uma maquina
    response.header('Access-Control-Allow-Origin', '*')
    //Permissão de quais metodos a API irá responder

    /******Metodo do HTTP*********\
    |> get - pegar dados da api   |
    |> post- inserir dados na api |
    |> put- alterar algo na api   |
    |> delete- deletar algo na api|
    \*****************************/

    response.header('Access-Control-Allow-Methods','GET')
    //Aplica as restricoes para o CORS da requisicao
    app.use(cors())
    next()
})

const whatsUsers = require("./modulo/funcoes")

//1
app.get('/v1/whatsapp/conversas/:numero', cors(), async function(request, response){

    let receberDados = request.params.numero
    let dadosPessoais = whatsUsers.getdadospessoais(receberDados)

    if(dadosPessoais){
        response.status(200)
        response.json(dadosPessoais)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado um perfil'})
    }
})

//2
app.get('/v1/whatsapp/perfil/:numero', cors(), async function(request, response) {

    let receberDados = request.params.numero
    let dadosPessoais = whatsUsers.getdadosmutaveis(receberDados)

    if(dadosPessoais){
        response.status(200)
        response.json(dadosPessoais)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado um perfil'})
    }
})

//3
app.get('/v1/whatsapp/contatos/:numero', cors(), async function(request, response) {

    let receberDados = request.params.numero
    let dadosPessoais = whatsUsers.getdadoscontatos(receberDados)

    if(dadosPessoais){
        response.status(200)
        response.json(dadosPessoais)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado um contato'})
    }
})

//4
app.get('/v1/whatsapp/conversas/:numero', cors(), async function(request, response) {

    let receberDados = request.params.numero
    let dadosPessoais = whatsUsers.getdadosconversas(receberDados)

    if(dadosPessoais){
        response.status(200)
        response.json(dadosPessoais)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado um contato'})
    }
})

//5
app.get('/v1/whatsapp/conversas/', cors(), async function(request, response) {

    let numero = request.query.numero
    let contato = request.query.contato
    let dadosPessoais = whatsUsers.getusuariocontato(numero, contato)

    if(dadosPessoais){
        response.status(200)
        response.json(dadosPessoais)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado um contato'})
    }
})

//6
app.get('/v1/whatsapp/conversas/palavra-chave/?', cors(), async function(request, response) {

    let numero = request.query.numero
    let palavra = request.query.palavra
    let contato = request.query.contato
    let dadosPessoais = whatsUsers.getpalavrachave(numero, palavra, contato)

    if(dadosPessoais){
        response.status(200)
        response.json(dadosPessoais)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado uma conversa'})
    }
})


const part=process.env.PORT || 8080
//configurando a porta que a api vai rodar, executa a api e faz com que fique aguardando novas aquisições
app.listen(part, function(){
    console.log('API funcionando e aguardando requisições..')
})