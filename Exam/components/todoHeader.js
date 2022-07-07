let template = `
<div id="myDIV" class="header">
    <h2 style="margin:5px">My To Do List</h2>
    <input type="text" v-model="title" placeholder="Title...">
    <span v-on:click="addItem" class="addBtn">Add</span>
</div>
`

export default {
    template : template,
    data : function(){
        return {
            title : ''
        }
    },
    methods : {
        addItem: function () {
            const component = this;
            $.ajax({
                url: 'http://192.168.0.29/myserver/todoInsert',
                type: 'get',
                data: {
                    id : '07',
                    contents : component.title
                },
                dataType: 'json',
                success: function (data) {
                    if (data != null) {
                        component.$router.push({ name: 'todoList ' });
                    }
                    location.reload();
                },
                error: function (reject) {
                    console.log(reject);
                }
            });
        }
    }

}