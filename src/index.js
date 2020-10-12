module.exports = function check(str, bracketsConfig) {
  let amountOfBracketsConfig = bracketsConfig.length;
  let open = [];
  let close = [];
  for (elem of bracketsConfig) {
    open.push(elem[0]);
    close.push(elem[1]);
    elem[2] = 0;
    elem[3] = 0;

  }
  //console.log(bracketsConfig)
  for (let i=0;i<str.length;i++) {
    if (open.indexOf(str[i])!=-1) {
        let j = open.indexOf(str[i]);
        elem = bracketsConfig[j];
        //console.log(elem);
        elem[2]++;
    }
    if (close.indexOf(str[i])!=-1) {
        let j = close.indexOf(str[i]);
        elem = bracketsConfig[j];
        /* well everything works except incorrect sequence
            and code below makes incorrect sequence work, 
            but then correct sequence stop working
            
        let x = open.length;
        while (x>0) {
            //console.log(j)
            x--;
            //console.log(j)
            el = bracketsConfig[x];
            //console.log(el)
            if (el == elem) continue;
            if (el[2]!=el[3]) return false
        }
        */
        if (elem[2]>elem[3]) {
            elem[3]++;
        } else return false
        
    }

  }
  //console.log(bracketsConfig)
  for (elem of bracketsConfig) {
      if (elem[2]!=elem[3]) return false;
  }
  //console.log(bracketsConfig)
 return true;
}


