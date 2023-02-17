const body = document.querySelector('body');
const san =['green','red','yellow','blue','pink','violet','purple'];

function ChangeColor()
{
    let num =Math.random();
    console.log("random Number",num);
    let len=san.length;
    console.log("len of that",len);
    let index=num * len;
    console.log("num the length",index);
    let int_index=parseInt(index);
    console.log("int the length",int_index);

    body.style.backgroundColor=san[int_index];
}
const kiran =['#13005A','#84D2C5','#AAE3E2','#D9ACF5','#03001C','#FF8B13','#82AAE3'];
 function textColor(){
    const text =document.getElementById('text');
    var text_index =parseInt(Math.random()*kiran.length);
    text.style.color=kiran[text_index];
 }