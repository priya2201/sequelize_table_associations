const Sequelize=require('sequelize');
const sequelize=new Sequelize('student_db','root','rootpassword',{
    port:'3306',
    dialect:'mysql'
});
sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});