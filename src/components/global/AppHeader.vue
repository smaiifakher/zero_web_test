<template>
  <div class="header">
    <div class="logo">
      Elzeo Vue
    </div>
    <div class="container">
      <ul class="text-right">
        <router-link tag="li" to="/" exact>
          <a>Home</a>
        </router-link>
        <RouterLink tag="li" to="/blog" >
          <a>Blog</a>
        </RouterLink>
        <router-link tag="li" to="/about">
          <a>About</a>
        </router-link>
        <RouterLink tag="li" to="/help" >
          <a>Help</a>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  background-color: blueviolet;
}

.header {
  background-color: #0c0e0e;
  color: beige;
  overflow: hidden;

  .logo {
    font-size: 24px;
    padding: 20px;
    float: left;
    width: 200px;
  }

  ul {
    float: left;
    width: calc(100% - 200px);

    li {
      padding: 10px;
      display: inline-block;
      font-size: 18px;

      a {
        color: beige;
        text-decoration: none;
      }

    }
  }
}
</style>