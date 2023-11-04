function x(){
    console.log("hello sophia");
}
x();



var counter = 0;

  document.getElementById("click").addEventListener("click", function() {
    counter++;

    if (counter === 3){
        let N = Math.ceil(Math.random() * 3);
        // you can use a forward slash before a single quotation (aka for an apostrophe like in ain't) when 
        // its covered by single quotations
        let ray = ['stop disturbing me!','stop pressing this button','what\'s up']
        console.log(N)
        if(N==1){
            alert(ray[N-1]);
            counter=0;
        }
        else if(N==2){
            alert(ray[N-1]);
            counter=0;
        }
        else{
            alert(ray[N-1]);
            counter=0;
        }
    }
  });
