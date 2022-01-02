function palindrome(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase(); //menghilangkan semua simbol + mengubah huruf ke kecil
    return newStr.split("").reverse().join("") === newStr;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
