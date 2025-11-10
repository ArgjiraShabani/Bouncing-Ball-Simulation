const Module=require('./build/ball.js');

Module.onRuntimeInitialized=()=>{
    console.log("Simulation started!");

    for(let i=0;i<50;i++){
        Module._step();

        const pos=Module._get_position();
        console.log(`Step ${i+1}: Ball at position ${pos}`);
    }
}