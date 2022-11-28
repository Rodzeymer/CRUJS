# CRUDJS
Um projeto de CRUD pra aprofundar os conhecimentos em JS e desmistificar o que é um CRUD


Como meio de consolidar os conhecimentos em JS, além de exibir esse aprendizado e representar de forma prática a caminhada nessa curva de aprendizado

Resolvi, então, criar um CRUD, baseado no curso de Ciência da Computação e de vídeos do youtube.

Esse CRUD tem como objetivo representar de forma simplificada como funciona o twitter, de uma forma bem minimalista e simplificada.


# DEPOIS DO CÓDIGO PRONTO

Basicamente foi feito uma rede social bem pequena, a Redinha, onde temos 1 usuário e 2 posts.

Mas o post foi Criado;
depois ele foi Recuperado, ou lido;
e então nós o  Updeiteamos, atualizamos (pra anacronia ficar bonita)
e depois nós o Deletamos.


Foram utlizados 4 funções bem básicas:
1 - Criar o post, através da função criaPost(), na linha 30, em que há um gerador de id automático, sequencial, a identificação do autor, ou owner e o conteúdo em sí,  resultando no objeto post, com atributos ID, owner e content e sem métodos, e realizando o push() pra dentro do array de posts;

2 - Recuperar o post, ou solicitar uma lista deles, com a função pegaPosts() que recupera os posts criados, em ordem de criação com seus atributos;

3 - Update, atualizando o post, seleciona-se o post com base na sua ID, com base na função atualizaConteudoPost(id, novoConteudo), deve-se fornecer a ID do post e o novo conteúdo, então é feita a busca pelo obj com o ID informado e seu atributo content atualizado;

4 - Deletar o post segue um processo semelhante ao do update, em que a função apagaPost(id) usa o o filter para criar um novo array sem o post citado.

Aqui foi usado JS puro, o desafio agora é incorporar o script a uma página HTML. Até a próxima!

