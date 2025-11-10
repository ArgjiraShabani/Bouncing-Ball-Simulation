BallModule({locateFile: file=>`build/${file}`}).then(Module=>{
    const canvas=document.getElementById("canvas");
    const ctx=canvas.getContext("2d");

    function draw(){
        Module._step();

        const x=Module._get_x();
        const y=Module._get_y();

        ctx.clearRect(0,0,canvas.clientWidth,canvas.height);

        ctx.fillStyle="#f88a84ff";
        ctx.fillRect(0,220,canvas.clientWidth,canvas.height-220);

        const gradient=ctx.createRadialGradient(x-5,y-5,5,x,y,20);
        gradient.addColorStop(0,"#ff9999");
        gradient.addColorStop(1,"#cc0000");

        
        ctx.beginPath();
        ctx.arc(x,y,20,0,2*Math.PI);
        ctx.fillStyle=gradient;
        ctx.fill();
        ctx.strokeStyle= "#800000";
        ctx.stroke();
        requestAnimationFrame(draw);
    }
    draw();
});