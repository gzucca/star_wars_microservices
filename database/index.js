const server = require("./src/server")

const {Character, Film, Planet} = require("./src/database")

// Character.list().then((res)=> console.log(res[11]))
// Film.list().then((res)=> console.log(res[0]))
// Planet.list().then((res)=> console.log(res[0]))


const PORT = 8004;

server.listen(PORT, ()=>{
  console.log(`Database service listening on port ${PORT}`)

})