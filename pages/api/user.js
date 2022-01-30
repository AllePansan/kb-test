let user = {
  username: 'teste',
  fullName:'Teste dos Santos',
  picture:'https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=704x',
  password:'teste1234'
}
export default function handler(req, res) {
  //console.log(req)
  let data = req.query
  if(data.username == user.username && data.password == user.password){
    res.status(200).json(user)
  }else{
    res.status(404).json({message: 'Usuario ou senha incorretos.'})
  }
  
}