<template>
  <div id="app">
    <WelcomeHeader/>
    <AddTodo v-on:add-todo='addNewTodo' />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodoItem"/>
  </div>
</template>

<script>
import Todos from './components/Todos'
import WelcomeHeader from './components/Header'
import AddTodo from './components/AddTodo'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Todos,
    WelcomeHeader,
    AddTodo
  },
  data(){
    return {
      todos: [
      ],
    }
  },
  methods: {
    deleteTodoItem: function(todoId){
      let url = `http://192.168.0.101:5000/todos/${ todoId }`;
      axios.delete(url)
        .then(res => this.todos = res.data)
        .catch(err => console.log(err));
    },
    addNewTodo: function(currentTodo){
      axios.post('http://192.168.0.101:5000/todos', currentTodo)
        .then( res => this.todos.push(res.data))
        .catch( err => console.log(err));
    }
  },
  created(){
    axios.get('http://192.168.0.101:5000/todos', { crossdomain: true })
      .then(res => this.todos = res.data)
      .catch(err => console.log(err));
  }

}
</script>

<style>

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}
body{
  width: 80%;
  margin: 5% 10%;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
  background: grey;
}

</style>
