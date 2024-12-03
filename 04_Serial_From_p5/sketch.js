let mSerial;

let connectButton;

function sendSerial(data) {
  if (mSerial.opened()) {
    mSerial.write(JSON.stringify(data));
    mSerial.write("\n");
  }
}

function connectToSerial() {
  if (!mSerial.opened()) {
    mSerial.open(9600);
    connectButton.hide();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mSerial = createSerial();

  connectButton = createButton("Connect To Serial");
  connectButton.position(width / 2, height / 2);
  connectButton.mousePressed(connectToSerial);
}

function draw() {
  background(0);
}

function mousePressed() {
  sendSerial({ data: { x: mouseX, y: mouseY, w: width, h: height } });
}
