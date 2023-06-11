function ajustaData(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona a barra entre o dia e o mês
    v.value = v.value.replace(/^(\d{2})(\d)/, "$1/$2");
    //Adiciona a barra entre o mês e o ano
    v.value = v.value.replace(/(\d{2})(\d)/, "$1/$2");
  }

  function ajustaCpf(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona ponto após os três primeiros números
    v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
    //Adiciona ponto após os seis primeiros números
    v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
    //Adiciona o hífen antes dos últimos 2 caracteres
    v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  
  function ajustaTelefone(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona parênteses no DDD
    v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
    //Adiciona hífen no número do telefone
    v.value = v.value.replace(/(\d{5})(\d)/, "$1-$2");
  }

  function ajustaFixo(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona parênteses no DDD
    v.value = v.value.replace(/^(\d\d)(\d)/g, "($1) $2");
    //Adiciona hífen no número do telefone
    v.value = v.value.replace(/(\d{4})(\d)/, "$1-$2");
  }

  function cpfLogin(v) {
    v.value = v.value.replace(/\D/g, "");
    //Adiciona ponto após os três primeiros números
    v.value = v.value.replace(/^(\d{3})(\d)/, "$1.$2");
    //Adiciona ponto após os seis primeiros números
    v.value = v.value.replace(/(\d{3})(\d)/, "$1.$2");
    //Adiciona o hífen antes dos últimos 2 caracteres
    v.value = v.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  function ajustaLetras(v) {
    // Remove os caracteres não alfabéticos
    v.value = v.value.replace(/[0-9]/g, "");
  }

  function ErroTel(v) {
  if (v.value.length < 8) {
    alert("Telefone tem de ter 8 dígitos!");
  } else if (v.value.length > 8) {
    alert("Telefone só pode ter 8 dígitos");
  }
}

