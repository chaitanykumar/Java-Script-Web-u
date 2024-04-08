// class Parent {
//     Parent_Name;
//     constructor(name) {
//         this.Parent_Name=name
//     }
// }
// class Child extends Parent{
//     Child_Name;
//     constructor(name,p_Name){
//       super(p_Name) //The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
//       this.Child_Name=name
//     }
// }
// let c1=new Child("Rahul","sonia")
// console.log(c1);
// let c2=new Child("arjun","kumar")
// console.log(c2);

class Parent{
    Parent_Name;
    constructor(name){
        this.Parent_Name=name;
    }
}
class Child extends Parent{
    Child_Name;
    constructor(name,p_name){
        super(p_name);
        this.Child_Name=name;
    }
}
let c1=new Child("Sonia","Rahul")
console.log(c1);
let c2=new Child("arjun","kumar");
console.log(c2);
let c3=new Child("david","mrali");
console.log(c3);