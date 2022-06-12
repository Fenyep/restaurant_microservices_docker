const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI + '/' + process.env.DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
}).then(() => {
    console.log('Connection successful!');
}).catch(() => {
    console.log('Connection failed!');
})