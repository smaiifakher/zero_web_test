<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p v-format="60" v-bold="40"> {{ pageDes }}</p>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      pageName: "About us",
      pageDes: "This is about us page"
    };
  },
  directives: {
    bold: {
      bind: function (el) {
        el.style.fontWeight = "bold"
      }
    }
  },
  name: "about",

}

</script>