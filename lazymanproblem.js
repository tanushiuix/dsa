class LazyManHelper{
    constructor(name, logFn){
      this.name = name;
      this.logFn = logFn;
      this.array = [];
      this.greet();
      setTimeout(()=>{
        this.executeEvents();
      },0);
    }
  
    greet(){
      this.array.push(['greet']);
      return this;
    }
    eat(eatable){
      this.array.push(['eat',eatable]);
      return this;
    }
    sleep(time){
      this.array.push(['sleep',time]);
      return this;
    }
    sleepFirst(time){
      this.array.unshift(['sleep',time]);
      return this;
    }
    
    executeEvents(){
      if(this.array.length == 0){
        return;
      }
      let [action, arg] = this.array.shift();
      switch(action){
        case 'greet':
            this.logFn(`Hi, I'm ${this.name}.`);
            this.executeEvents();
            return;
        case 'eat':
            this.logFn(`Eat ${arg}.`);
            this.executeEvents();
            return;
        case 'sleep':
        setTimeout(()=>{
          this.logFn(`Wake up after ${arg} second${arg != 1 ? 's' : ''}.`);
          this.executeEvents();
        },arg*1000);
            return;
      }
    }
  }
  
  function LazyMan(name, logFn) {
  
     return new LazyManHelper(name, logFn);
  }
  
  
  LazyMan('Jack', console.log).eat('banana').sleepFirst(10).eat('apple').sleep(1)
  