let template = `
    <div>
        <ul id="myUL">
            <template v-for="item in items" >
                <li  v-bind:key="item.no"
                     v-bind:class="{ checked : item.yn }"
                     v-on:click="checkedItem(item.no)">
                        {{ item.contents }}
                        <span class="close" v-on:click="deleteItem(item.no)">x</span>
                </li>
            </template>
        </ul>
    </div>`


export default {
    template: template,
    data: function () {
        return {
            items: [],
            updateItem: {}
        }
    },
    computed: {
        itemList: function () {

        }
    },
    watch: {
        updateItem: function () {

        }
    },
    created: function () {
        let items = this.items;
        $.ajax({
            url: "http://192.168.0.29/myserver/todoSelect",
            data: {
                id: '07'
            },
            success: function (data) {
                data.forEach(element => {
                    items.push(element);
                });
            },
            error: function (error) {
                console.log(error)
            }
        })
    },
    methods: {
        checkedItem: function (no) {
            $.ajax({
                url: "http://192.168.0.29/myserver/todoUpdate",
                type: 'get',
                data: {
                    id: '07',
                    no: no,
                    yn: true
                },
                success: function (data) {
                    items.item.yn = true;
                },
                error: function (error) {
                    console.log(error)
                }
            })
        },
        deleteItem: function (no) {
            $.ajax({
                url: "http://192.168.0.29/myserver/todoDelete",
                data: {
                    id: '07',
                    no: no
                },
                success: function (data) {
                    location.reload();
                },
                error: function (error) {
                    console.log(error)
                }
            })
        }
    }
}