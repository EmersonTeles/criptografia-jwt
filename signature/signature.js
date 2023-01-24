import { generateKeyPairSync, createSign, createVerify } from "crypto";

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

let data = "String para ser assinada";

// Signature

const signer = createSign("rsa-sha256");

signer.update(data);

const signature = signer.sign(privateKey, "hex");

console.log("signature: ", signature);

// Send document ~~~~~document, signature and publickey

const verifier = createVerify("rsa-sha256");
verifier.update(data);

const isVerify = verifier.verify(publicKey, signature, "hex");

console.log(isVerify);
