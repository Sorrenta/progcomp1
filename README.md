Disciplina de Programação de Computadores I

DATA ENTREGA SITE + RELATÓRIO (WORD) 27/04


// configura o email no git

1. git config --global user.email "seu@email.com"
// configura o nome no git
2. git config --global user.name "Seu nome"
// cria repositório local
3. git init
// adiciona os arquivos para controle de versão
4. git add .
// gera uma versão
5. git commit -m "primeiro site"
// configura a ramificação do repositório no github
6. git branch -M main
// envia o projeto para o github
7. git push https://github.com/seu_usuario/seu_repositorio.git main
// quando quiser atualizar o github com as alterações locais:
repetir os passos 4, 5 e 7

git pull // atualiza local com os dados remotos
git clone // download do remoto
