const app = require('./src/app')
const PORT = require('./src/config/index').PORT

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))