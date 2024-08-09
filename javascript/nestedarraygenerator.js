
function* inorderTraversal(arr){
    for(let item of arr){
        if(Array.isArray(item)){
            yield* inorderTraversal(item)
        }else{
            yield item
        }
    }
}










const gen = inorderTraversal([1, [2, 3]]);
 console.log(gen.next().value); // 1
 console.log(gen.next().value) // 3
 console.log(gen.next().value)