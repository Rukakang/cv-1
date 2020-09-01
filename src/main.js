let html = document.querySelector("#html");
let style = document.querySelector("#style");
console.log(style);
let string = `/*  你好，我叫康米娜，
* 接下来我将用我所学的前端知识，绘制一个太极图
* 首先我要准备一个div */
#div1{   
    width:200px;
    height:200px;
    border:1px solid black;
}
/* 接下来我让它变成圆的 */
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 接下来让圆变成半黑半白 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(8,3,3,1) 50%);
}
/* 加两个神秘的小球 **/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background: black;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background: rgb(255,255,255);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;

let string2 = '';
let n = 0;

let step = () => {
    setTimeout(() => {
        if(n < string.length){
            if(string[n] === '\n'){
                string2 += "<br>";
            }else if(string[n] === ' '){
                string2 += "&nbsp;"
            }else{
                string2 += string[n];
            }
            n++;
            html.innerHTML = string2;
            style.innerHTML = string.substring(0,n);
            window.scrollTo(0,99999);
            html.scrollTo(0,99999);
            step();
        }
        
    },50)
}
step();

