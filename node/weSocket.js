const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)
const user = [], users= {}
app.use('/', express.static(__dirname))
server.listen(3000, function () {
  console.log('on 3000')
})

io.on('connection', function (socket) {
  socket.on('ferret', (name, fn) => {
    fn('woot');
  });
  console.log('okjoikljl')
  socket.on('login', function (nickname, password) {
    // console.log('loginSucess', nickname, password, user.leng)
    // socket.emit('loginSucess')
    if (user.indexOf(nickname) > -1) {
      console.log('nickExisted', nickname, password, user.leng)
      if (users[nickname] !== password) {
        socket.emit('nickExisted')
      } else {
        socket.emit('loginSucess')
      }
    } else {
      console.log('loginSucess')
      socket.userIndex = user.length
      users[nickname] = password
      socket.nickname = nickname
      user.push(nickname)
      socket.emit('loginSucess')
      io.sockets.emit('system', nickname)
    }
  })
  socket.on('disconnect', function() {
    if (socket.nickname != null) {
        //users.splice(socket.userIndex, 1);
        // users.splice(users.indexOf(socket.nickname), 1);
        socket.broadcast.emit('system', socket.nickname, user.length, 'logout');
    }
  });
  //new message get
  socket.on('postMsg', function(arr) {
    socket.broadcast.emit('newMsg', arr)
  });
  //new image get
  socket.on('img', function(imgData, color) {
      socket.broadcast.emit('newImg', socket.nickname, imgData, color);
  });
})
