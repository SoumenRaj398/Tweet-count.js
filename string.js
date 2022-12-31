// let str1= "first course is js ";
// let str2 = "we will learn more";
// console.log(str1.charAt(6));
// console.log(str1.concat(str2));
// console.log(str1.indexOf("js"));
// console.log(str1.replace(/course/g,"tutorial"));

let tweet = prompt('Compose your tweet');

let slicedTweet = tweet.slice(0,140);

alert(slicedTweet + "/nYour original tweet size was: "+ tweet.length);

console.log(slicedTweet.length);