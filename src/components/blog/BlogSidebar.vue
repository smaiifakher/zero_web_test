<template>
  <div class="sidebar-xidgets">
    {{ title | uppercase }}
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "Testing"
    }
  },
  name: "blogsidebar",
  filters: {
    uppercase:function (v){
      return v.toUpperCase();
    }
  }
}
</script>

<style scoped>

</style>