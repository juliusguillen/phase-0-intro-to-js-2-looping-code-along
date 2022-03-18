function  writeCards(names, event) {
    const newarray = []
    for (let index = 0; index < names.length; index++) {
        newarray.push(`Thank you, ${names[index]}, for the wonderful ${event} gift!`)
    }
    return newarray 

}
function countDown(count) {
   while(count > -1 ) {
       console.log(count);
       count-- 
   }
}
