let books =[];
let counter=0;


module.exports=class book{
    constructor(id,title,isbn,publishdate,author){
        this.id=id;
        this.title=title;
        this.isbn=isbn;
        this.publishdate=publishdate;
        this.author=author;
    }
    save(){
        this.id=++counter;
        books.push(this);
        return this;
    }
     edit(){
        const i=books.findIndex(x=>x.id == this.id);
        books.splice(i,1,this);
        return this;
     }
     static getAll(){
        return books;
     }
     static deletById(id){
        const i=books.findIndex(x=>x.id==id);
        const deletedbook=books[i];
        books.splice(i,1);
        return deletedbook;
     }
                   }

//module.exports = book;