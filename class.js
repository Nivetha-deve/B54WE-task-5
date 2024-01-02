//1)...............................
class MOVIE{
 constructor (title,studio,rating){
  this.title = title;
    this.studio =studio;
    this.rating = rating;
}
set changerating(modifiedrating){
   this.rating =modifiedrating
}
}
const m = new MOVIE("Casino Royale","Eon Production", "PG");
m.changerating ="PG13";
console.log(m);
//2)................................
class circle{
  constructor (radius,color){
     this.radius = radius;
    this.color = color;
  }
  get circle(){
    return c.radius;
}
set changeradius(modifieradius){
  this.radius=modifieradius;
}
get circle(){
  return c.color;
}
set changecolor(modifiecolor){
  this.color=modifiecolor;
}
get areaname(){
  return 3.14*c.radius*c.radius;
}
get circle () {
  return 2*22/7*c.radius;
 }
}
var c =new circle("1.0","red");
console.log(c); 

var c= new circle("1.0","red");
console.log(c.radius);

var c =new circle("1.0","red");
c.changeradius="5.0";
console.log(c.radius);

var c =new circle("1.0");
console.log(c.radius);

var c=new circle("1.0","red");
console.log(c.color);

var c=new circle("1.0","red");
c.changecolor= "blue";
console.log(c.color);

var c =new circle("1.0","red");
console.log(`"circle[Radius=${c.radius},Color=${c.color}]"`);

var c=new circle (2);
var q = c.areaname;
console.log(q);

var c=new circle(3);
var s=c.circle;
console.log(s);
//3)..................................
class person{
 constructor(name,age,adress,college,depertment){  
    this.name=name;
   this.age=age;
    this.adress=adress;
     this.college=college;
     this.depertment=depertment;
    }
}
const d=new person("Nivetha","22","Coimbatore","Sri Krishna Arts and Science College","Maths");
console.log(`name:${d.name}, age:${d.age}, adress:${d.adress}, college:${d.college}, Depertment:${d.depertment}`);
//4)................................
class uber {
    constructor(name,start,end,distance,price){
        this.name=name;
        this.start=start;
        this.end=end;
        this.distance=distance;
        this.price=price;
    }
get totalprice(){
    return 14.7*p.distance;
}
}
const p= new uber("Raj","vadavalli","kuniyamuthur","12.3","RS.14.7");
const dis = p.totalprice;
console.log(`NAME:${p.name}
START:${p.start}
END:${p.end}
DISTANCE:${p.distance}
PRICE PER KM:${p.price}
TOTALPRICE:RS.${dis}`);