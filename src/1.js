function getRandomCode() {
  let code = Math.random().toString(36).substr(2);
  if (code.length < 8) {
    code += getRandomCode();
  }
  return code;
}
