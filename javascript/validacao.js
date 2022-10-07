function validacaoForm() {
    let x = document.forms["formulario"]["inputUser"].value;
    let y = document.forms["formulario"]["inputSenha"].value;
    if ((x == "") || (y == "")) {
      alert("Preencha todos os campos. Nenhum campo pode estar em branco.");
      return false;
    }
  }