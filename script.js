

let btn = document.getElementById('btn');
let output = document.getElementById('output');

let quotes = [
'"Never give up because you never know if the next try is going to be the one that works" - Mary Kay Ash', 
'"There surely is in human nature an inherent propensity to extract all the good out of all the evil" - Benjamin Haydon',
'"I have done my best: that is about all the philosophy of living one needs" - Lin Yutang', 
'"Don not  wait. The time will never be just right" - Napoleon Hill'
];

btn.addEventListener("click", function(){
    var randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
    output.innerHTML = randomQuote;
}); 
