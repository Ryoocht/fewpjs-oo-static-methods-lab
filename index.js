class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string){
    const exception = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const newStr = [];
    const arrByWord = string.split(" ");
    for (let i = 0; i < arrByWord.length; i++) {
      if(i === 0){
        newStr.push(this.capitalize(arrByWord[i]));
      } else {
        if(exception.includes(arrByWord[i])){
          newStr.push(arrByWord[i].toLowerCase());
        } else {
          newStr.push(this.capitalize(arrByWord[i]));
        }
      }
    }
    return newStr.join(" ");
  }
}