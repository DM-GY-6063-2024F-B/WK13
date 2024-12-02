void setup() {
  Serial.begin(9600);
}

void loop() {
  int a0Val = analogRead(A0);
  int a0ValSend = map(a0Val, 0, 4095, 0, 255);

  Serial.println(a0ValSend);

  delay(2);
}
