<template>
  <header id="header">
    <router-link to="/" exact>TW FILMES</router-link>
    <router-link tag="button" to="/salvos" exact class="meus-filmes">Salvos</router-link>
  </header>
</template>

<script>
export default {
    name: 'Header-comp'
}
</script>

<style scoped>
  #header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: #a52a2a;
  }

  #header a {
    text-decoration: none;
    font-size: 30px;
    color: #FFF;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: #FFF;
    padding: 5px 15px;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
  }
</style>