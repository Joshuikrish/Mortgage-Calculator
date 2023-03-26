const { createApp } = Vue;
createApp({
  data() {
    return {
      n: 25,
      d: 135000,
      p: 450000,
      r: 3,
      loan:0,
      m:0
     
    };
  },
  methods: {
    calculate() {
      if(this.p === 0 || this.d === 0 || this.n === 0 || this.r === 0 ){
        this.loan=0 
        this.m=0 
        ret
      }
      else{
        if (!this.loanamt()) {
          return;
        }
        this.m = this.loan * (this.r/1200) * (Math.pow(1+this.r/1200, this.n*12)) / (Math.pow(1+this.r/1200, this.n*12) - 1);
        this.m = Math.ceil(this.m);
        this.m = this.m.toLocaleString();
      }

    },
    updatePurchasePrice(event){
      const name = event.target.name;
    
    if (name === "purchase") {
      this.p = parseInt(event.target.value);
    } else if (name === "down") {
      this.d = parseInt(event.target.value);
    }

    },
    loanamt() {
      if(this.d<this.p){
        this.loan = this.p - this.d;
        if (this.loan <= 0) {
          return false;
        }
        return true;
      }
      else{
        this.loan=0
        this.m=0
      }
    }
  },  
  mounted() {
    this.calculate()
  },
}).mount("#app");