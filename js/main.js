// Generare 10 email e stamparle a schermo
const app = new Vue({
  el: ".app",
  data: {
    mails : [],
  },
  methods:{
    mounted(){
      for (var i = 0; i < 10; i++) {
          axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then(response => {
               this.mail = response.data;
               this.mails.push(this.mail.response);
               return this.mail.response;
             })
             .catch(error => {
               this.errored = true
              return error
             })
      }
    },
  }
})
