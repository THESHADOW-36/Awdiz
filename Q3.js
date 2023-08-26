var array= [12,45,63,544,78,23,48,8,46];

for(var i = 0 ; i < array.length;i++){
    for(var j= i+1; j < array.length;j++){
        // console.log(array[i],array[j])
        if(array[i] > array[j]){
            console.log(i,"A")
        }else{
            console.log(j,"B")
        }
    }
}