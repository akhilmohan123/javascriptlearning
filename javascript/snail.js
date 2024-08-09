



Array.prototype.snail=function(rowscount,colscount){
  
    if(rowscount*colscount !==this.length){
        return []
    }
    let result=Array(rowscount).fill().map(()=>[])
    for(let rows=0;rows<colscount;rows++){
        for(let cols=0;cols<rowscount;cols++){
            result[(rows&1)?rowscount-cols-1:cols].push(this[rows*rowscount+cols])
        }
    }return result
  


}

const array=[1,2,3,4]
const result=array.snail(1,4)
console.log(result)