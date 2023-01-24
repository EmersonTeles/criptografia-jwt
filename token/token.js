import jwt from "jsonwebtoken";

const chaveSecreta = "chaveSupersecreta";

const token = jwt.sign(
  {
    apelido: "jm",
    curso: "segurança e node.js",
  },
  chaveSecreta
);
console.log(token);
const tokenDecoded = jwt.verify(token, chaveSecreta);
console.log(tokenDecoded);
