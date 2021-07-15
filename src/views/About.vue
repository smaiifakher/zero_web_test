<template>
  <div class="about">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDes }}</p>
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
  name: "about"
}

</script>