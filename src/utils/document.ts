
export default function validateDocument(value: string) {
   if(value.length<=11){


    if (typeof value !== "string") return false
    value = value.replace(/[\s.-]*/igm, '')
    if (
        !value ||
        value.length != 11 ||
        value == "00000000000" ||
        value == "11111111111" ||
        value == "22222222222" ||
        value == "33333333333" ||
        value == "44444444444" ||
        value == "55555555555" ||
        value == "66666666666" ||
        value == "77777777777" ||
        value == "88888888888" ||
        value == "99999999999" 
    ) {
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(value.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(value.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(value.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(value.substring(10, 11) ) ) return false
    return true
}
else{
    let tamanho:any;
    let digitos:any;
    let numeros:any;
    let resultado:any;
    let pos:number;
    value = value.replace(/[^\d]+/g,'');
 
    if(value == '') return false;
     
    if (value.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (value == "00000000000000" || 
        value == "11111111111111" || 
        value == "22222222222222" || 
        value == "33333333333333" || 
        value == "44444444444444" || 
        value == "55555555555555" || 
        value == "66666666666666" || 
        value == "77777777777777" || 
        value == "88888888888888" || 
        value == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = value.length - 2
    numeros = value.substring(0,tamanho);
    digitos = value.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = value.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
}

}