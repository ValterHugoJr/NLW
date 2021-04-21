import express, { request, response } from "express";
const app = express();
app.get("/",(request,response)=>{
  return response.json({
    message:"Teste"
  })
});
app.post("/teste1",(request,response)=>{
  return response.status(200).send("SUCESSO")
});
app.post("/teste2",(request,response)=>{
  return response.status(400).send("ERRO")
});
app.listen(3000,()=> console.log ("Server Active Online"));