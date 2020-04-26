<template>
    <div class='welcome-header'>
        <h1>Welcome To Todo List</h1>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'welcome_header'
}
</script>

<style scoped>
.welcome-header{
    background: purple;
    color: white;
    text-align: center;
    width: 100%;
    height: 100px;    
}
</style>