// Generare 10 email e stamparle a schermo
const app = new Vue({
  el: ".app",
  data: {
    mails : [],
  },
  mounted() {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => {
         this.mail = response.data;
         return this.mail.response;
       })
       .catch(error => {
         this.errored = true
        return error
       })
  },
  methods:{
    decaMail(){
      for (var i = 0; i < 10; i++) {
      this.mails.push(this.mail.response)  ;
      console.log(this.mails);
      }
    },
  }
})
