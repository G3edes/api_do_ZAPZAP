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

const funcoes = require('./modulo/funcoes.js')

//criando endpoint para retornar todos os estados
app.get('/v1/whatsapp/pessoal/:number', cors(), async function (request, response){

    let numero = request.params.number

    let contato = funcoes.getdadospessoais(numero)

    //resposta da api com o json e o status code (dados se tiver conteúdo)
    if(contato){
        response.status(200)
        response.json(contato)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado o numero'})
    }

})
app.get('/v1/whatsapp/mutavel/:number', cors(), async function (request, response){

    let numero = request.params.number

    let contato = funcoes.getdadosmutaveis(numero)

    //resposta da api com o json e o status code (dados se tiver conteúdo)
    if(contato){
        response.status(200)
        response.json(contato)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado o numero'})
    }

})
app.get('/v1/whatsapp/mutavel/:number', cors(), async function (request, response){

    let numero = request.params.number

    let contato = funcoes.getdadosmutaveis(numero)

    //resposta da api com o json e o status code (dados se tiver conteúdo)
    if(contato){
        response.status(200)
        response.json(contato)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado o numero'})
    }

})
app.get('/v1/whatsapp/contatos/:number', cors(), async function (request, response){

    let numero = request.params.number

    let contato = funcoes.getdadoscontatos(numero)

    //resposta da api com o json e o status code (dados se tiver conteúdo)
    if(contato){
        response.status(200)
        response.json(contato)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi encontrado o numero'})
    }

})


const part=process.env.PORT || 8080
//configurando a porta que a api vai rodar, executa a api e faz com que fique aguardando novas aquisições
app.listen(part, function(){
    console.log('API funcionando e aguardando requisições..')
})