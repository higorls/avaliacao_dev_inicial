Descreva como você projetaria um sistema online que atenda as histórias:
1) Quero poder enviar arquivos em formato .csv para o sistema, de modo que seja possível baixá-los depois.
2) Quero poder ler o conteúdo dos meus arquivos .csv de maneira consolidada na plataforma;
3) Quero poder ver a lista dos meus arquivos enviados e poder fazer busca através de filtros e parâmetros;
4) Quero poder exportar os dados lidos dos meus arquivos em formato .csv
5) Quero poder enviar por email os dados lidos dos meus arquivos.
De maneira simplificada, comente qual é a arquitetura ou design que você considera mais adequados para essa solução?

Resposta:

Esse fluxo será composto por 4 agentes principais:
* Local para armazenamento dos arquivos;
* Base de dados para guardar informações dos arquivos enviados;
* Leitor de CSV;
* Disparador de emails;

Uma boa abordagem que reflete a simplicidade da ferramenta é a implementação de uma arquitetura severless, nesse caso utilizarei os serviços da Amazon, assim os arquivos serão armazenados em buckets da S3, a base de dados será o DynamoDB, o disparador de emails será o SES. A leitura do CSV e os demais processamentos serão feitos com funções Lambda.
Por fim temos uma aplicação simples, robusta e com margem para escala.


