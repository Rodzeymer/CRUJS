/*CRUD usando JavaScript Básico!
    CRUD se refere à sigla de:
    Create
    Read
    Update
    Delete

    ou seja, um script que crie um objeto feito pelo usuário
    O leia quando for solicitado e 
    faça sua manutenção, seja atualizando seu conteúdo ou suas informações
    ou apagando, deletando, esses.

*/
const redinha = {
    usuarios:[
        {
            username:'Zeymer',
        }
    ],
    posts: [
        {
            id:1,
            owner:'Zeymer',
            content: 'Primeiro post'
        }
    ],
};

//CREATE
function criaPost ({dados}){
    redinha.posts.push({
        id: redinha.posts.length +1,
        owner: dados.owner, 
        content: dados.content
    })
}

criaPost({owner:'Zeymer', content:'Segundo Post'})
criaPost({owner:'Zeymer', content:'Terceiro Post'})

//READ
function pegaPosts (){
    return redinha.posts
}

//UPDATE

function atualizaConteudoPost(id, novoConteudo){
    const postPraAtualizar = pegaPosts().find(post =>{
        return post.id === id;
    })

console.log(pegaPosts().find)
}

atualizaConteudoPost(1, "Novo conteúdo do Post")


//DELETE

function apagaPost(id){
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id
    })
    redinha.posts = listAtualizadaDePosts
    
}

apagaPost(2);
console.log(redinha.posts)