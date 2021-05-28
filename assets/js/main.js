
/* 
Utilizzando vue, stampiamo a schermo una card per ogni album.
BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
BONUS 2: Ordinare i dischi per anno di uscita. */


const app = new Vue ({

    el:'#app',

    data: {
        url:"https://flynn.boolean.careers/exercises/api/array/music",
        titolo:"",
    },
    methods:{
        
    },
    mounted(){
        axios
            .get(this.url)
            .then(resp => {

                this.titolo = resp.response;

            }).catch(e => {
                console.error(e)
            })
    }

})