function stringLength(str1, str2, str3){
    let total = str1.length + str2.length + str3.length;
    console.log(total);
    console.log(Math.floor(total / 3));
}

stringLength('chocolate', 'ice cream', 'cake')