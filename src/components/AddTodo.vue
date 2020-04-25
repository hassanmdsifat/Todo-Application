<template>
    <div class='form-header'>
        <form @submit="addTodoForm">
            <div class='form-body'>
                <input type="text" name="title" v-model="title" placeholder="Add Todo...">
                <input type="submit" value="Add">
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name: 'addTodo',
    data(){
        return {
            title: '',
        }
    },
    methods: {
        addTodoForm: function(event){
            event.preventDefault();
            if(this.title){
                const newTodo = {
                    title: this.title,
                    completed: false
                };
                this.$emit('add-todo', newTodo);
                this.title = '';
            }else{
                alert('Nothing to Add');
            }
        }
    }
}
</script>

<style scoped>
.form-header{
    margin-top: 20px;
}
.form-body{
    height: 80px;
    background: lightblue;
    padding: 20px;
    margin-bottom: 0px;
}
input[type=text]{
    width: 90%;
    height: 40px;
    padding: 10px;
    margin-right: 10px;
    font-size: 20px;
    text-decoration: bold;
}
input[type=submit]{
    width: 8%;
    height: 40px;
    background: mediumseagreen;
    font-size: 20px;
    cursor: pointer;
}
</style>