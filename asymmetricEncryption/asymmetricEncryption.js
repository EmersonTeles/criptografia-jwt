import { generateKeyPairSync } from "crypto";

const { privateKey, publicKey } = generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

//console.log("privateKey: ", privateKey);
//console.log("publicKey: ", publicKey);

import { publicEncrypt, privateDecrypt } from "crypto";

const encryptData = publicEncrypt(publicKey, Buffer.from("Mensagem secreta"));

console.log("Mensagem cifrada: ", encryptData.toString("hex"));

/**************Transmissão************/

const decryptData = privateDecrypt(privateKey, encryptData);

console.log("Mensagem decifrada: ", decryptData.toString("utf-8"));
