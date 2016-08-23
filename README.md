# IotKik
Kik API used to connect to an Intel Edison to power an LED.

In order for this code to work, you must have an Intel Edison, a Kik Bot named softwareswag on your Kik App, and ngrok installed on your computer

Your Intel Edison must be connected to the internet and should have a secure login, you must also have an LED connected to the D5 slot


On the terminal 

Enter 'git clone https://github.com/rogerramesh/Iotkik.git'


To run the code you must enter the team folder  


Type the following into the terminal "screen /dev/ tty.usbserial (hit Tab)"

Enter your user name and password

Enter "cd relay"

Enter "node index.js"

Open a new tab on the terminal 

Enter the team folder

Enter "npm start" to start nodemon server


Open a new tab and enter the utilities folder

Enter "./ http 8080" to start ngrok

Once the ngrok is running hit the on or off button on the Kik App to turn the light on and off
