
const { IP, PORT } = require("./constanta");


const net = require("net");
const hello = function() {
  console.log("hello");
};
const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    
    port: PORT// PORT number here,
    
  });

  // interpret incoming data as text


  // setInterval(function(){ alert("Hello"); }, 3000);


  conn.setEncoding("utf8");
  conn.on("connect", () => {
    setInterval(function() {
      conn.write("Move: up");
    },1000);
    conn.write("Name: Sonam");
    conn.write("Hello everyone");
    setInterval(function() {
      conn.write("Move: down");
    },200);
    setInterval(function() {
      conn.write("Move: left");
    },500);
    setInterval(function() {
      conn.write("Move: right");
    },5800);
  });
  return conn;
};



module.exports = {
  connect,
  hello,
  IP,
  PORT
};
