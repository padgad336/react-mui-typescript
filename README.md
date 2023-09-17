# Getting Started with Create React App

This project was bootstrapped with

 [Typescript](https://www.tutorialsteacher.com/typescript).


 [Typescript Playgound](https://www.typescriptlang.org/play).
### yarn

> [Download](https://yarnpkg.com/en/docs/install)

### VS Code

> [Download](https://code.visualstudio.com/download)

# Install Node.js


### download NVM


> for [Windows](https://github.com/coreybutler/nvm-windows/releases)

> for [macOS/Linux](https://github.com/nvm-sh/nvm#install--update-script)

```bash
install with curl
 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
 source ~/.bashrc
 //check version nodeJS
     nvm list-remote

 
```
### Install Node.js
```
$ nvm install 16
```
or
```
$ nvm install stable

```
### use node
```
$ nvm use 16
```
Typescript
 ```bash
let num:number =2
let text:string='ss'
let isBool:boolean=true
//array
let arrNum:number[]=[1,2,3]
let arrString:string[]=["1","2","3"]
//object
let obj:{x:number,y:number}={x:1,y:2}
//function
let func:(x:number)=>number=()=>2


interface UserProps {
    name:string
    age:number
}

interface NumLogger{
    log:(val:number)=>void
}
type StringAndNumber = NumLogger &{
    log:(val:string)=>void
}

const logger:StringAndNumber={
    log:(val:number|string)=>console.log(val)
}
logger.log(2)
logger.log("str")

interface UsersProps{
    name:string
    age:number
    email:string
}
// interface UserCtreateProps extends UsersProps {
//     password:string
// }
type UserCtreateProps =UsersProps & {
    password:string
}

type FruitProps='apple'|'orange'|"banana"

let Fruit:FruitProps='apple'

type FruitCount ={
    [key in FruitProps]?:number
}

type FruitTypeNor={apple:number,
orange?:number,
banana?:number
}
const Fruits:FruitTypeNor|null=null
/* กำหนดให้มีการเก็บข้อมูล PET โดยจะเก็บข้อมูลดังนี้

name ชื่อสัตว์เลี้ยง
category มี cat dog bird
owner เจ้าของ
age อายุ

โจทย์
1. สร้าง type PetProps เพื่อเก็บข้อมูลสัตว์เลีี้ยง
2.สร้าง type PetHospitalProp โดยเพิ่มข้อมูล
hospital ชื่อโรงพยาบาล
doctor ชื่อหมอ
3.สรา้งtype PetCount นับจำนวน สัตว์แต่ละชนิด
*/
type categoriesprops="cat"| "dog" | "bird"|""
type PetProp={
    name:string
    category:categoriesprops
    owner:string
    age:number 
}
type PetHospitalProp= PetProp &{
    hospital:string
    doctor:string
}
type PetCount ={
    [key in categoriesprops]?:number
}
const pets:PetProp={
    name:'mimi',
    category:"cat",
    owner:"padgad",
    age:2
}
const petHos:PetHospitalProp={
     name:'mimi',
    category:"cat",
    owner:"padgad",
    age:2,
    hospital:"siri hospital",
    doctor:"นายแพทย์ สมชาย รักดี"

}
const petCount:PetCount={
cat:1
}

```




