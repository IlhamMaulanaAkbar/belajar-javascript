function sumStr(a,b) {
    const result = a + b;
    if (typeof a === "string" || typeof b === "string"){
      return result == "string";
    }
  }