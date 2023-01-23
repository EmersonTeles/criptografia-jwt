import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

export function toHash(password) {
  const key = randomBytes(16).toString("hex");
  const passwordHashed = scryptSync(password, key, 64).toString("hex");
  return `${key}:${passwordHashed}`;
}

class User {
  constructor(name, password) {
    this.name = name;
    [this.key, this.hash] = toHash(password).split(":");
  }

  auth(name, password) {
    if (name === this.name) {
      const testHash = scryptSync(password, this.key, 64);
      const realHash = Buffer.from(this.hash, "hex");
      const isPasswordCorrect = timingSafeEqual(testHash, realHash);
      if (isPasswordCorrect) {
        console.log("auth sucess");
        return true;
      }
    }
    console.log("auth failed");
    return false;
  }
}
const user1 = new User("Emerson", "1234");
console.log(user1);
user1.auth("Emerson", "1234");
user1.auth("Emerson", "12345");
user1.auth("Joao", "1234");
