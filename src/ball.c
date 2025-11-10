#include <stdio.h>
#include <emscripten/emscripten.h>

int x=50;//horizontal position
int y=50;//vertical position
int vx=3;//horizontal velocity
double vy=0;//vertical velocity
double gravity=1;//gravity acceleration
int floor_y=200;//floor position
double damping=0.8;//exponential damping factor


EMSCRIPTEN_KEEPALIVE
void step(){
   x+=vx;
   y+=(int)vy;

   vy+=gravity;

   if(y>=floor_y){
    y=floor_y;
    vy=-vy*damping;
   }

   if(x>=400|| x<=0){
    vx=-vx;
   }
}
EMSCRIPTEN_KEEPALIVE 
int get_x(){
    return x;
}

EMSCRIPTEN_KEEPALIVE 
int get_y(){
    return y;
}
int main(){
    printf("Bouncing ball simulation initialized!\n");
    return 0;
}