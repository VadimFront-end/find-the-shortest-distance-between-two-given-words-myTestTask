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
    let arraySubstring=getMinDistance(' ' + document.getElementsByTagName('input')[1].value + ' ', ' ' + document.getElementsByTagName('input')[2].value + ' ');
    if(arraySubstring!==-1)document.getElementById('answer').innerHTML='Минимальное расстояние: ' + arraySubstring;
    else document.getElementById('answer').innerHTML='Нет таких слов';
}

function getMinDistance(str1, str2) {
    let min=stringFile.length;
    let lastIndexFirstWord;
    let lastIndexSecondWord;
    let j,k=0;
    for(let i=0;i<stringFile.length;i++) {
        if(stringFile[i]===str1[j]) {
            j++;
            if(j===str1.length) {
                if(i-str1.length-lastIndexSecondWord<min) 
                    min=i-str1.length-lastIndexSecondWord
            lastIndexFirstWord=i-2;
            }
        }
        else j=0;
        if(stringFile[i]===str2[k]) {
            k++;
            if(k===str2.length) {
                if(i-str2.length-lastIndexFirstWord<min) 
                    min=i-str2.length-lastIndexFirstWord
            lastIndexSecondWord=i-2;
            }
        }
        else k=0;
    }
    if(lastIndexFirstWord===undefined||lastIndexSecondWord===undefined) return -1;
    else return min;
}