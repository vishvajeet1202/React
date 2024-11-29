let map1 = new Map([
    [1 , 10], [6 , 20] ,
    [3, 30],[4, 40]
    ]);

// console.log('MAP '+map1);
// console.log(map1.get(6));

// const numbers = [1, 2, 3, 4, 5];
// let square=[];
// square = numbers.map((n)=> n*n);
// console.log(square);

// const numbers = [1, 2, 3, 4];
// // Expected output: [2, 4, 6, 8]
// let ans=[];
// ans= numbers.map((n)=> n*2);
// console.log(ans);

// // convert to string
// const numbers = [10, 20, 30, 40];
// // Expected output: ["10", "20", "30", "40"]
// let ans=[String];
// ans=numbers.map((n) => n.toString());
// console.log(ans);


// const people = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Jim", age: 35 }
//   ];
//   // Expected output: ["John (25)", "Jane (30)", "Jim (35)"]
// let ans=[String]
// ans = people.map((p) => p.name+'('+p.age+')');
// console.log(ans); 

const words = ["hello", "world", "javascript", "rocks"];
// Expected output: ["Hello", "World", "Javascript", "Rocks"]
let ans=new Array;
ans=words.map((w) => w.charAt(0).toUpperCase()+w.slice(1));
console.log(ans)