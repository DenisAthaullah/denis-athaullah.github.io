var angka1 = parseFloat(prompt(`pilih angka pertama`));

var operator = prompt(`pilih operator`);

var angka2 = parseFloat(prompt(`pilih angka kedua`));

if (operator === '+') {
    document.writeln(`hasilnya adalah ${angka1+angka2}`)
}else if (operator === '-'){
    document.writeln(`hasilnya adalah ${angka1-angka2}`)
}else if (operator === '*'){
    document.write(`hasilnya adalah ${angka1*angka2}`)
}else if (operator === '/'){
    document.write(`hasilnya adalah ${angka1/angka2}`)
}else{
    document.write(`error`)
}