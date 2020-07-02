let partner = ["ali","hussain","aziz"];
function logger(array){
for (let name of array){


console.log(name);
}

}

logger(partner);

// 2
function hottestdays(hottest,tempnumber){
    for(let climate of hottest){
       if(climate > tempnumber)

       console.log(climate)


    }




}

let array2 =[35,19,34,-5,3,31]
hottestdays(array2,4)





let array3 =[jsobjects =
{book1: "darwinism", id:2},
{book1: "football", id:3},
{book1:"basketball", id:4},
{book1: "volleyball", id:8}
];

function getbookbyid(bookid,books){

for(book of array3){

if (book.id==bookid) {
    console.log(book.book1)
    break;
}
 else {
    console.log("undefined");
}


}




}
getbookbyid(2,array3)


prompt("(السلعة)اظغط انتهيت عندما تنتهي");

let products = [];

let name = prompt("ادخل اسم السلعة");

while (name != "انتهيت") {
    let price = prompt("ادخل السعر");
    let quantity = prompt("الكمية");


products.push({ product_name: name, product_price:price,product_quantity:quantity})

 name = prompt("ادخل اسم السلعة");

}

for(name of products){
    console.log(name.product_name+" "+ name.product_price+" "+name.product_quantity)
}








