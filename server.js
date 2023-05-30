const express = require('express');
const mysql = require('mysql2');
const cors=require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'Dream@123',
  database: 'organisation'
});
connection.connect();
// To get all details in company table
app.get('/getCompanyDetails',(req,res)=>{
    connection.query('SELECT cmpid, cmpname, location FROM company',(error,results)=>{
        if(error){
            console.log(error);
        }
        res.json(results);
    });
});
// To get all details by id in company table
app.get('/getCompanyDetails/:cmpid',(req,res)=>{
    connection.query('SELECT cmpid, cmpname, location FROM company where cmpid=?',[req.params.cmpid],(error,results)=>{
        if(error){
            console.log(error);
        }
        res.json(results);
    });
});
// To get all details in company table
app.get('/getEmployeeDetails',(req,res)=>{
    connection.query('SELECT empid, empname, age, gender, address, contactnumber FROM employee',(error,results)=>{
        if(error){
            console.log(error);
        }
        res.json(results);
    });
});
// To get all details by id in company table
app.get('/getEmployeeDetails/:empid',(req,res)=>{
    connection.query('SELECT empid, empname, age, gender, address, contactnumber FROM employee where empid=?',[req.params.empid],(error,results)=>{
        if(error){
            console.log(error);
        }
        res.json(results);
    });
}); 
app.listen(3000)