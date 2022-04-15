sort_alphabet('webmaster');
function sort_alphabet(str){    
    str = str.split("");
    str = str.sort();
    str = str.sort( case_insensitive_comp )
    str = str.join("");
    return str;
}


function case_insensitive_comp(strA, strB) {
    return strA.toLowerCase().localeCompare(strB.toLowerCase());
}



module.exports = sort_alphabet
