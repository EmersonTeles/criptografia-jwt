import { createHash } from "crypto";

export function toHash(password) {
  return createHash("sha256").update(password).digest("hex");
}

class User {
  constructor(name, password) {
    this.name = name;
    this.hash = toHash(password);
  }

  auth(name, password) {
    if (name === this.name && this.hash === toHash(password)) {
      console.log("auth sucess");
      return true;
    }
    console.log("auth failed");
    return false;
  }
}
const user1 = new User("Emerson", "1234");

user1.auth("Emerson", "1234");
user1.auth("Emerson", "12345");
user1.auth("Joao", "1234");
