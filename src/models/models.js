class Projeto {
    constructor(id, titulo, link, description, inicio, fim){
        this.id = id;
        this.titulo = titulo;
        this.link = link;
        this.description = description;
        this.inicio = inicio;
        this.fim = fim;
    }

    /* Utilizado para possível validação e não inserção de projetos
      com campos vazios.*/
  validateProject() {
    let prop = Object.getOwnPropertyNames(this);
    for (let i = 0; i < prop.length; ++i) {
      if (prop[i] != "id" && this[prop[i]] == "") {
        return false;
      }
    }
    return true;
  }
}

class Usuario {
    constructor(nome, formacao, number, email){
        this.nome = nome;
        this.formacao = formacao;
        this.number = number;
        this.email = email;
    }
}

module.exports = {
  Projeto: Projeto,
  Usuario: Usuario,
};
