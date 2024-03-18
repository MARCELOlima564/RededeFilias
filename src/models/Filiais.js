class Filiais {
    constructor(nome, fundacao, corPrimaria, corSecundaria,qntdFuncionarios, capacidadeAlunosPorAno, qntdAlunos, bairro, cidade, cep, telefone, nomeResponsavel, cargoResponsavel){
        this.id = this.gerarId();
        this.nome = nome;
        this.fundacao = fundacao;
        this.corPrimaria = corPrimaria;
        this.corSecundaria = corSecundaria;
        this.qntdFuncionarios = qntdFuncionarios;
        this.capacidadeAlunosPorAno = capacidadeAlunosPorAno;
        this.qntdAlunos = qntdAlunos;
        this.bairro = bairro;
        this.cidade = cidade;
        this.cep = cep;
        this.telefone = telefone;
        this.nomeResponsavel = nomeResponsavel;
        this.cargoResponsavel = cargoResponsavel;
    }
    gerarId() {
        return Math.floor(Math.random() * 1000);
      }
}