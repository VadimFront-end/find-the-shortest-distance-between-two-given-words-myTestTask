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
    document.getElementById('answer').innerHTML='Минимальное расстояние: ' + arraySubstring;
}

function getAllSubstring(str1, str2) {
    let min=stringFile.length;
    let lastIndex1;
    let lastIndex2;
    let j,k=0;
    for(let i=0;i<stringFile.length;i++) {
        if(stringFile[i]===str1[j]) {
            j++;
            if(j===str1.length) {
                if(i-str1.length-lastIndex2<min) 
                    min=i-str1.length-lastIndex2
            lastIndex1=i-2;
            }
        }
        else j=0;
        if(stringFile[i]===str2[k]) {
            k++;
            if(k===str2.length) {
                if(i-str2.length-lastIndex1<min) 
                    min=i-str2.length-lastIndex1
            lastIndex2=i-2;
            }
        }
        else k=0;
    }
    return min;
}