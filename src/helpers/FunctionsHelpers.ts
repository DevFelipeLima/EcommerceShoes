export function replaceSpecialChars(str: string) {
  str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
  str = str.replace(/[àáâãäå]/, "a");
  str = str.replace(/[êéè]/, "e");
  str = str.replace(/[ÈÉÊË]/, "E");
  str = str.replace(/[Ç]/, "C");
  str = str.replace(/[ç]/, "c");

  // o resto
  return str.replace(/[^a-z0-9]/gi, "");
}
