function converter(){
  var moedaIn = document.querySelector('input[name="in"]:checked')
  var min = moedaIn.value

  var moedaOut = document.querySelector('input[name="out"]:checked')
  var mout = moedaOut.value

  var input = document.getElementById("quantia")
  var valorOriginal = input.value

  var valorEmReal = 0
  if(min == "dolar"){
    valorEmReal = valorOriginal * 4.67
  }else if(min == "euro"){
    valorEmReal = valorOriginal * 5.06
  }else if(min == "libra"){
    valorEmReal = valorOriginal * 6.08
  }else {
    valorEmReal = valorOriginal
  }

  var valorConvertido = 0
  
   if(mout == "dolar"){
    valorConvertido = valorEmReal * 0.21
  }else if(mout == "euro"){
    valorConvertido = valorEmReal * 0.20
  }else if(mout == "libra"){
    valorConvertido = valorEmReal * 0.16
  }else {
    valorConvertido = valorEmReal
  }
  var spanOut = document.getElementById("res")
  spanOut.innerText = valorConvertido
}
