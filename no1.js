function fahrenheitTocelcius(suhu){
    let fahreTemp = suhu;
    let hasil = (fahreTemp - 32) * 5/9;
    console.log(`${fahreTemp} Fahrenheit = ${hasil} Celcius`);
}

export{fahrenheitTocelcius};