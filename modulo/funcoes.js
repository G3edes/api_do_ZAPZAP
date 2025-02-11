const todoscontatos=require('./contatos')

const getdadospessoais=function(numero){
    let pessoal=[]
    let objJson = {}
    let telefone= String(numero)
    let status=false
    console.log(telefone)
    todoscontatos.contatos.whatsUsers.forEach(function(item){
        if (String(item.number)==telefone) {
            pessoal.push({
                id:item.id,
                account:item.account,
                createdsince:item["created-since"],
                number:item.number
            })
            status=true
        }
    })

    objJson.dados = pessoal
    if (status==true) {
        return objJson
    }else{
        return status
    }
}

const getdadosmutaveis=function(numero){
    let profile=[]
    let telefone= String(numero)
    let status=false
    todoscontatos.contatos.whatsUsers.forEach(function(item){
        if (String(item.number)==telefone) {
            profile.push({
                nickname:item.nickname,
                profileimage:item['profile-image'],
                background:item.background
            })
            status=true
        }
    })
    if (status==true) {
        return profile
    }else{
        return status
    }
}

const getdadoscontatos=function(numero){
    let contatos=[]
    let telefone= String(numero)
    let status=false
    todoscontatos.contatos.whatsUsers.forEach(function(item){
        item.contacts.forEach(function(item2){
            if (String(item.number)==telefone){
                contatos.push({
                    name:item2.name,
                    image:item2.image,
                    description:item2.description
                })
                status=true
            }
        })
    })
    if (status==true) {
        return contatos
    }else{
        return status
    }
}

const getdadosconversas=function(numero){
    let contatos=[]
    let telefone= String(numero)
    let status=false
    todoscontatos.contatos.whatsUsers.forEach(function(item){
        item.contacts.forEach(function(item2){
                if (String(item.number)==telefone){
                    contatos.push({
                        name:item2.name,
                        image:item2.image,
                        description:item2.description,
                        message:item2.messages
                    })
                    status=true
                }
        })
    })
    if (status==true) {
        return contatos
    }else{
        return status
    }
}
const getusuariocontato=function(numero, destinatario){
    let contatos=[]
    let contato= String(destinatario).toUpperCase()
    let telefone= String(numero)
    let status=false
    todoscontatos.contatos.whatsUsers.forEach(function(item){
        item.contacts.forEach(function(item2){
                if (String(item.number)==telefone && String(item2.name).toUpperCase()==contato){
                    contatos.push({
                        name:item2.name,
                        image:item2.image,
                        description:item2.description,
                        message:item2.messages
                    })
                    status=true
                }
        })
    })
    if (status==true) {
        return contatos
    }else{
        return status
    }
}
const getpalavrachave=function(numero, destinatario, conversa){
    let contatos=[]
    let mensagem=String(conversa).toUpperCase()
    let contato= String(destinatario).toUpperCase()
    let telefone= String(numero)
    let status=false
    todoscontatos.contatos.whatsUsers.forEach(function(item){
        item.contacts.forEach(function(item2){
            item2.messages.forEach(function(item3){
                if (String(item.number)==telefone && String(item2.name).toUpperCase()==contato && String(item3.content).toUpperCase().includes(mensagem)){
                    contatos.push({
                        name:item2.name,
                        image:item2.image,
                        description:item2.description,
                        message:item2.messages
                    })
                    status=true
                }
            })
                
        })
    })
    if (status==true) {
        return contatos
    }else{
        return status
    }
}

module.exports={
    getdadoscontatos,
    getdadosconversas,
    getdadosmutaveis,
    getdadospessoais,
    getpalavrachave,
    getusuariocontato
}