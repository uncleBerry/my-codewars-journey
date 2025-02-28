function say_hallo() {
    console.log('Hello!');
  }
  
  function say_goodbye(){
    console.log('GoodBye!');
  }
  
  function _if(bool, funch1, funch2) {
    if(bool){
      funch1()
    } else {
      funch2()
    }
  }
  _if(true, say_hallo, say_goodbye);
  _if(false, say_hallo, say_goodbye);