const crypto = require("crypto");
const fs = require("fs");

const decryptFile = (inputFile, outputFile, password) => {
  const key = crypto.createHash("sha256").update(password).digest();

  // Read the entire encrypted file
  const encryptedData = fs.readFileSync(inputFile);

  // The first 16 bytes are the Initialization Vector (IV)
  const iv = encryptedData.subarray(0, 16);

  // The rest of the file is the encrypted payload
  const payload = encryptedData.subarray(16);

  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);

  // Decrypt and write
  const decryptedData = Buffer.concat([decipher.update(payload), decipher.final()]);
  fs.writeFileSync(outputFile, decryptedData);
};

decryptFile("public/models/character.enc", "public/models/character.glb", "MyCharacter12");
console.log("Decrypted successfully!");
