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
    if(arraySubstring!==-1)
        document.getElementById('answer').innerHTML='Минимальное расстояние: ' + arraySubstring[0] + ' слов(-а)<br> Максимальное расстояние: ' + (arraySubstring[1]-1) + ' слов(-а)';
    else document.getElementById('answer').innerHTML='Нет таких слов или они одинаковые';
}

function getMinDistance(str1, str2) {
    if(str1===str2)return -1;
    let min=stringFile.length;
    let firstMaxDistance=NaN;
    let secondMaxDistance=NaN;
    let max=0;
    let lastIndexFirstWord;
    let lastIndexSecondWord;
    let j=k=0;
    for(let i=0;i<stringFile.length;i++) {
        if(stringFile[i]===' ') {
            if(!Number.isNaN(firstMaxDistance))
                firstMaxDistance++;
            if(!Number.isNaN(secondMaxDistance))
                secondMaxDistance++;
            lastIndexFirstWord++;
            lastIndexSecondWord++;
        }
        if(stringFile[i]===str1[j]) {
            j++;
            if(j===str1.length) {
                if(Number.isNaN(firstMaxDistance))
                    firstMaxDistance=0;
                if(secondMaxDistance>max)
                    max=secondMaxDistance;
                if(lastIndexSecondWord-1<min) 
                    min=lastIndexSecondWord-1
            lastIndexFirstWord=0;
            }
        }
        else j=0;
        if(stringFile[i]===str2[k]) {
            k++;
            if(k===str2.length) {
                if(Number.isNaN(secondMaxDistance))
                    secondMaxDistance=0;
                if(firstMaxDistance>max)
                    max=firstMaxDistance;
                if(lastIndexFirstWord-1<min) 
                    min=lastIndexFirstWord-1
            lastIndexSecondWord=0;
            }
        }
        else k=0;
    }
    if(lastIndexFirstWord===undefined||lastIndexSecondWord===undefined) return -1;
    else return [min,max];
}