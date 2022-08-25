import bcrypt from "bcrypt";
const salt = 10;
const testPass = [];
export const hashPassword = (pass) => {
  for (let i = 0; i < 100; i++) {
    testPass.push(bcrypt.hashSync(pass, salt));
  }
  return bcrypt.hashSync(pass, salt);
};

export const checkPassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword);
};
