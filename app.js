new Vue({
    el: ".app",
    data: {
        todos: [],
        todo: {
            title: "",
            completed: false
        },
        name: "zhangsan",
        website: "https://www.baidu.com",
        year: 2020,
        x: 0,
        y: 0,
        a: 10,
        b: 0,
        c: 0,
        age: 20,
        available: false,
        nearby: false,
        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [{
            name: 'Ryu',
            age: 25
        },
        {
            name: 'Yoshi',
            age: 35
        },
        {
            name: 'Ken',
            age: 55
        }
        ],
        health: 100,
        ended: false
    },

    methods: {
        greet: function (e) {
            return "Good " + e;
        },
        add: function (e) {
            this.year += e;
        },
        updataXY: function (e) {
            //offsetX/Y获取到是触发点相对被触发dom的左上角距离
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        showVal: function () {
            alert(this.$refs["showVal"].value)
        },
        punch: function () {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
        },
        onSubmit: function () {
            // console.log(this.todo)
            fetch("http://jsonplaceholder.typicode.com/todos", {
                method: "POST",
                body: JSON.stringify(this.todo),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(res => {
                return res.json();
            }).then(todo => {
                // console.log(todo)
                this.todos.unshift(todo);
            })
        },
        onSubmit1: function () {
            axios.post("http://jsonplaceholder.typicode.com/todos", this.todo).then(res => {
                console.log(res.data)
            })
        }
    },
    watch: {
        a(val, oldVal) {
            alert(val + " " + oldVal);
        }
    },
    computed: {
        addToB() {
            // console.log(this)
            return this.b + this.age;
        },
        addToC() {
            return this.c + this.age;
        },
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby,
            }
        }
    },
    mounted:
        function () {
            fetch("http://jsonplaceholder.typicode.com/todos").then(res => {
                return res.json();
            }).then(arr => {
                this.todos = arr;
            })
        }


})