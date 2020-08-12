<template lang="pug">
  div#app
    router-view
    
</template>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 

  .new-q {
    display: flex;
    justify-content: center;

    margin: 50px auto 0px auto;
    max-width: 300px;

    a, p {
      text-decoration: none;
      background-color: #ff6347;
      border: 1px solid tomato;
      color: white;
      border-radius: 5px;
      box-shadow: 0px 0px 10px 0px #ff634700;
      transition: all .3s ease-in;

      padding: 10px 20px;

      &:hover {
        border-color: tomato;
        box-shadow: 0px 0px 20px 0px #ff634740;
        background-color: white;
        color: tomato;
      }
    }
  }  
}
</style>
