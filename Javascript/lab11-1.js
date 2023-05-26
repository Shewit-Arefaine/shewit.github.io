function evenOnly(arr){
    return arr.filter(x=>x%2==0);
}
function oddOnly(arr){
    return arr.filter(x=>x%2!=0);
}
module.exports={evenOnly,oddOnly}