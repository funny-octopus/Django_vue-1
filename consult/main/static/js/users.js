var app = new Vue({
    delimiters:["[[","]]"],
    el:'#app',
    data:{
        showing_input:'',
        change_stat:false,
        showing_pass:0,
        users:[
            {
                name:'Tom',
                surname:'Jefferson',
                father:'Jack',
                role:'Администратор',
                email:'tom@mail.ru',
                password:'tomtomtom'
            },
            {
                name:'John',
                surname:'Smith',
                father:'Donald',
                role:'Клиент',
                email:'john@mail.ru',
                password:'johnjohn'
            },
            {
                name:'Daisee',
                surname:'Johnson',
                father:'Mick',
                role:'Руководитель',
                email:'daisee@mail.com',
                password:'d-day'
            },
        ],
        roles:[
            'Администратор',
            'Руководитель',
            'Клиент',
            'Юрист',
        ],
    },
    methods:{
        ch:function (item) {
            this.showing_input = item;
            this.$nextTick(() => {this.$refs[item][0].focus()});
            console.log(item, this.$refs);
        },
        save_changes:function(){
            let flag = confirm("Сохранить измененные данные?\nДля отмены всех изменений обновите страницу.");
            alert(flag);
        },
        show_pass:function(flag, index){
            this.showing_pass = flag ? index : 0;
        },
    },
})
