const express=require('express');
const employee=require('../config/employee');

const router=express.Router()

router.get('/', function(req, res){
 const employe=employee.find({});
 res.send(employe);
 
 })
router.get('/post', function(req, res){

res.render('index');

})
router.post('/',function(req, res){
 const data=req.body;
 const emp=new employee(data);
 emp.save();
 res.send('sucsees');

})
router.delete('/delete/:id',function(req, res){
 const id=req.params.id;
 employee.deleteOne({id})
  
});

router.put('/update/:id',function(req, res){
 const id=req.params.id;

 employee.updateOne ({id }, { $set: { name: 'vishal' } })

})

module.exports=router;