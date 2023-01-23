import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

const mensagem = "Demonstração";
const key = randomBytes(32);
const vi = randomBytes(16);

const cifra = createCipheriv("aes256", key, vi);

const msgCipher = cifra.update(mensagem, "utf-8", "hex") + cifra.final("hex");

console.log("Msg cifrada: ", msgCipher);

const decifra = createDecipheriv("aes256", key, vi);

const msgDecipher = decifra.update(msgCipher, "hex", "utf-8") + decifra.final("utf-8");

console.log("Msg decifrada: ", msgDecipher);
