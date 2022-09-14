const { app } = require('./app');

// Utils
const { db } = require('./utils/database');

// Authenticate database credentials
db.authenticate()
    .then(() => console.log('Database Authenticate'))
    .catch(err => console.log(err));

// Establish models relations

// Sync sequelize models
db.sync()
    .then(() => console.log('Database Synced'))
    .catch(err => console.log(err));

// Spin up server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Express app runing on port: ${PORT}`);
});
