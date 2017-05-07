import ddf.minim.*;
import ddf.minim.signals.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import cc.arduino.*;
import processing.serial.*;
Minim minim;

Serial myPort;    // The serial port
int val;


int boxcount = 75;
int aboxcount = 87;

long randomNumber;


AudioSample [] box = new AudioSample[boxcount];
AudioSample [] abox = new AudioSample[aboxcount];




void setup() {
  size(400, 200);
  minim = new Minim(this);
 for (int i = 0; i < box.length; i++) {
    box[i] = minim.loadSample("MusicBox"+(1+i)+".wav");
  }
 for (int i = 0; i < box.length; i++) {
    abox[i] = minim.loadSample("AMusicBox"+(1+i)+".wav");
  }
  printArray(Serial.list());
  myPort = new Serial(this, Serial.list()[2], 9600);
  
  
}

void draw() {
  if ( myPort.available() > 0) {  // If data is available,
    val = myPort.read();    // read it and store it in val
    println(val);
    
  }
  if (val > 230) {
    box[int(random(0, box.length))].trigger();
    delay(100);
  }
    if (val > 70) {
    abox[int(random(0, box.length))].trigger();
    delay(140);
  }

}
