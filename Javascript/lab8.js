// create class using object literal
let Student={
    firstName:String,
    lastName:String,
    grades:[],

     inputGrade: function(newGrade){
       this.grades.push(newGrade);
        },
     computeAverageGrade: function(){
        return this.grades.reduce((x,y)=>x+y,0)/this.grades.length;

     }

 };
  let std1=Object.create(Student);
  let std2=Object.create(Student);
  std1.inputGrade(95);
  std1.inputGrade(96);
  std1.inputGrade(97);
  std2.inputGrade(94);
  std2.inputGrade(90);
  std2.inputGrade(99);

  console.log(std1.computeAverageGrade());
  console.log(std2.computeAverageGrade());
 


 function Studentt(fname,lname){
    this.firstName=fname;
    this.lastName=lname;
    this.grade=[];
    this.inputGrade=function (newGrade){
        this.grade.push(newGrade);
    }
    this.computeAverageGrade= function(){
        return this.grade.reduce((x,y)=>x+y,0)/this.grade.length;
     }

 } 

 let st1=new Studentt("Shewit","tsekawe");
 let st2=new Studentt("Eldana","Tsekawe");
 st1.inputGrade(92);
 st1.inputGrade(99);
 st2.inputGrade(96);
 st2.inputGrade(99);

 console.log(st1.computeAverageGrade());
 console.log(st2.computeAverageGrade());


Array.prototype.sort = function() {
  this.sort(function (a, b) { return a - b });
}
  let num=[];
  for(let i=0;i<=3;i++){
    num[i]=i*2;
  }
  console.log(num[0]);
  console.log(num[1]);
  console.log(num[2]);

  Array.prototype.mysort = function () { 
    let arr = this;
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) { 
    for (let j = 1; j <= i; j++) {
    if (arr[j - 1] > arr[j]) {
    let temp = arr[j - 1]; 
    arr[j - 1] = arr[j]; 
    arr[j] = temp;
    }
    }
    }
    return arr;
    //or 
    //return this.sort((a,b)=>a-b);
    }
    console.log([7, 5, 2, 4, 3, 9].mysort())

    Array.prototype.mysorta = function () { 
      let arr = this;
      let len = arr.length;
      for (let i = len - 1; i >= 0; i++) { 
      for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
      let temp = arr[j - 1]; 
      arr[j - 1] = arr[j]; 
      arr[j] = temp;
      }
      }
      }
      return arr;
      //or 
      //return this.sort((a,b)=>a-b);
      }
      console.log([7, 5, 2, 4, 3, 9].mysorta())

      