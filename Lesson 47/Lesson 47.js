let count =5;
let fruits = ["cashew","Mango","Pawpaw","Orange","Peanut","Gum Gum","Ope Ope no mi","Apple","Watermelon","Banana"]
for(count = 5; count < 10; count++){
    // console.log("counter=" + count);
    console.log("fruits = " + fruits[count])
}

let colors = ["red","black","orange","blue","purple","brown","green","grey","pink"]
let color =5;
// for(color in colors){
//     console.log(colors[color])
// }

// colors.forEach(color =>{
//     console.log(color)
// })

for(color of colors){
    console.log(color)
}

let x = 2; 
// while(x<10){
//     console.log("counter " + x);
//     x++;
// }

do{console.log("counter "+x);
    x++;}
while(x<=10)

let colore = 0;
do{console.log(colors[colore]);
    colore++;
    if(colore===3){
        continue;
    }
}
while(colore<9)