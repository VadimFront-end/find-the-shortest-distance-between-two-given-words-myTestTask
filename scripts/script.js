let stringFile='';
function showFile(input) {
    let file = input.files[0];
    let reader=new FileReader();
    reader.readAsText(file);
    reader.onload=function() {
        document.getElementById('file').style.display='none';
        stringFile=' ' + reader.result + ' ';
    };
}
function findLengthBW() {
    let arraySubstring=getAllSubstring(' ' + document.getElementsByTagName('input')[1].value + ' ', ' ' + document.getElementsByTagName('input')[2].value + ' ');
    console.log(arraySubstring)
    if(!arraySubstring.substrings1.length||!arraySubstring.substrings2.length) {
        document.getElementById('answer').innerHTML='Нет таких слов';
        return;
    }
    findMinLength(arraySubstring.substrings1,arraySubstring.substrings2);
}

function getAllSubstring(str1, str2) {
    let substrings1=[];
    let substrings2=[];
    let j,k=0;
    for(let i=0;i<stringFile.length;i++) {
        if(stringFile[i]===str1[j]) {
            j++;
            if(j===str1.length) 
                substrings1.push(i-str1.length+1);
        }
        else j=0;
        if(stringFile[i]===str2[k]) {
            k++;
            if(k===str2.length) 
                substrings2.push(i-str2.length+1);
        }
        else k=0;
    }
    console.log(substrings1, substrings2)
    return {substrings1, substrings2}
}

function findMinLength(arr1,arr2) {
    let min=stringFile.length;
    for(let i=0;i<arr1.length;i++) {
        for(let j=0;j<arr2.length;j++) {
            if(Math.abs(arr1[i]-arr2[j])-arr1.length<min) 
                min=Math.abs(arr1[i]-arr2[j])-document.getElementsByTagName('input')[1].value.length;
        }
    }
    document.getElementById('answer').innerHTML='Минимальное расстояние: ' + min;
}