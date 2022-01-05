const resetValue = () => {
  document.getElementById("address").value = "";
  document.getElementById("neighborhood").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
  document.getElementById("ddd").value = "";

};

const preencherFormulario = (data) => {
  document.getElementById("address").value = data.logradouro;
  document.getElementById("neighborhood").value = data.bairro;
  document.getElementById("city").value = data.localidade;
  document.getElementById("state").value = data.uf;
  document.getElementById("ddd").value = data.ddd;
};

const isNumber = (number) => /^[0-9]+$/.test(number);
const cepValidade = (cep) => cep.length == 8 && isNumber(cep);

const pesquisarCep = async () => {
  const cep = document.getElementById("zipCode").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  if (cepValidade(cep)) {
    const data = await fetch(url).then((data) => data.json());

    if (data.hasOwnProperty("erro")) {
      resetValue();
      alert(`${document.getElementById("zipCode").value} CEP não encontrado!`)

    } else {
      preencherFormulario(data);
    }
  } else {
    resetValue();
    alert(`${document.getElementById("zipCode").value} CEP incorreto!`)

  }
};

document.getElementById("zipCode").addEventListener("focusout", pesquisarCep);


// #### Change Color ###


let r = Math.floor(Math.random() *255),
    g = Math.floor(Math.random() *255),
    b = Math.floor(Math.random() *255);

    document.body.style.color = 'rgb('+r+', '+g+', '+b+')'
    
    document.getElementById("zipCode").style.background = 'rgb('+r+', '+g+', '+b+')'
    document.getElementById("address").style.background = 'rgb('+r+', '+g+', '+b+')'
    document.getElementById("ddd").style.background = 'rgb('+r+', '+g+', '+b+')'
    document.getElementById("neighborhood").style.background = 'rgb('+r+', '+g+', '+b+')'
    document.getElementById("city").style.background = 'rgb('+r+', '+g+', '+b+')'
    document.getElementById("state").style.background = 'rgb('+r+', '+g+', '+b+')'
