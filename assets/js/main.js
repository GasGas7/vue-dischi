
/* 
Utilizzando vue, stampiamo a schermo una card per ogni album.
BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
BONUS 2: Ordinare i dischi per anno di uscita. */


const app = new Vue ({

    el:'#app',

    data: {
        url:"https://flynn.boolean.careers/exercises/api/array/music",
        albums:[]
    },
    methods:{
        
    },
    mounted(){
        axios
            .get(this.url)
            .then(resp => {
                console.log(resp);
                this.albums = resp.data.response;
                console.log(this.albums)
            }).catch(e => {
                console.error(e)
            })
    }

})