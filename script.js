
class Star{constructor(x,y,size,velocity){this.x=x;this.y=y;this.size=size;this.velocity=velocity;}update(){this.x+=this.velocity.x;this.y+=this.velocity.y;if(this.x<0||this.x>window.innerWidth||this.y<0||this.y>window.innerHeight){this.reset();}}reset(){this.x=Math.random()*window.innerWidth;this.y=Math.random()*window.innerHeight;this.velocity={x:(Math.random()-0.5)*0.5,y:(Math.random()-0.5)*0.5};}draw(ctx){ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fillStyle='#ffffff';ctx.fill();ctx.closePath();}}const canvas=document.createElement('canvas');const ctx=canvas.getContext('2d');document.querySelector('.background').appendChild(canvas);canvas.width=window.innerWidth;canvas.height=window.innerHeight;let stars=[];for(let i=0;i<100;i++){stars.push(new Star(Math.random()*canvas.width,Math.random()*canvas.height,Math.random()*2,{x:(Math.random()-0.5)*0.5,y:(Math.random()-0.5)*0.5}));}function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);stars.forEach(star=>{star.update();star.draw(ctx);});requestAnimationFrame(animate);}animate();window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;stars.forEach(star=>star.reset());});function copyEmail(){const emailText=document.getElementById('email').textContent;navigator.clipboard.writeText(emailText).then(()=>{const copyMessage=document.getElementById('copy-message');copyMessage.style.display='block';setTimeout(()=>{copyMessage.style.display='none';},2000);});}
