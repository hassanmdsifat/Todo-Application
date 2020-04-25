<template>
    <div class=todo-item v-bind:class="{'is-completed': todo.completed}">
        <p>
            <input type="checkbox" @change="markComplete">
            &nbsp; &nbsp;
            {{ todo.title }}
            <button class='delete' @click="$emit('del-todo', todo.id)">X</button>
        </p>
    </div>
</template>

<script>

export default {
    name:'todoitem',
    props: ['todo'],
    methods: {
        markComplete: function(){
            this.todo.completed = !this.todo.completed;
        }    
    }
}

</script>

<style scoped>

.todo-item{
    background: greenyellow;
    padding: 15px;    
    border-bottom: 1px solid;
}
.is-completed{
    text-decoration: line-through;    
}
.delete{
    height: 25px;
    width: 30px;
    background: red;
    border-radius: 50%;
    color: white;
    float: right;
    justify-content: center;
    cursor: pointer;
}
</style>