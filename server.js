const express = require('express');
const mysql = require('mysql2');
const cors=require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const connection = mysql.createConnection({
  host: '***',
  user: '***',
  password:'***',
  database: '***'
});
connection.connect();
// To get all details in company table
app.get('/getCompanyDetails',(req,res)=>{
    connection.query('SELECT cmpid, cmpname,isActive,location FROM company where isActive=1',(error,results)=>{
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
// to insert a data to company table
app.post('/insert',(req,res)=>{
    connection.query('insert into company (cmpname,location) values (?,?)',[req.body.cmpname,req.body.location],(error,results)=>{
        if(error){
            console.log(error);
        }
        res.json(results)
    });
});
// to upadate company details
app.put('/update',(req,res)=>{
    connection.query('update company set cmpname=?,location=? where cmpid=?',[req.body.cmpname,req.body.location,req.body.cmpid],(error,results)=>{
        if(error){
            console.log(error);
        }
        res.json(results)
    })
})

// to delete company details
app.put('/delete',(req,res)=>{
    connection.query('update company set isActive=? where cmpid=?',[0,req.body.cmpid],(error,results)=>{
        if (error) {
            console.log(error);
        }
        res.json(results)
    })
})
app.listen(3000)
