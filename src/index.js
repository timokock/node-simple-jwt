const app = require('./app')
require('./database')

async function init() {
    const port = 3000
    await app.listen(port)
    console.log('Server is running on port ' + port)
}

init()