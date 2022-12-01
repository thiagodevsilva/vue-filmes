<template>
  <div id="meus-filmes">
    <h1>Favoritos</h1>
    <span v-if="filmes.length <= 0">
      Nenhum filme salvo como favorito.
    </span>

    <ul>
      <li v-for="filme in filmes" :key="filme.id">
        <span>{{ filme.nome }}</span>
        <div>
          <router-link :to="`/filme/${filme.id}`" tag="button">Ver detalhes</router-link>
          <button @click="excluir(filme.id)">Excluir</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'MeusFilmes',
    data () {
      return {
        filmes: [],
      }
    },
    created () {
      const minhaLista = localStorage.getItem('myfilme');
      this.filmes = JSON.parse(minhaLista) || [];
    },
    methods: {
      excluir (id) {
        let filtroFilmes = this.filmes.filter((filme) => {          
          return (filme.id !== id);
        });

        alert('Filme removido dos salvos');
        return this.filmes = filtroFilmes;

      }
    },
    watch: {
      filmes () {
        localStorage.setItem('myfilme', JSON.stringify(this.filmes));
      }
    }
}
</script>

<style scoped>
#meus-filmes {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

ul {
  padding: 0;  
}

ul li {
  padding: 0;  
  list-style: none;
  min-width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

span {
  font-size: 25px
}

button {
  margin-left: 10px;
}

</style>