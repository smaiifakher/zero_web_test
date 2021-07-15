<template>
  <div class="post-box">
    <span class="post-views">
      {{ views }}
    </span>
    <h3 class="post-title">
      {{ title }} </h3>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">{{ content | shorten }}</p>
    <div class="row">
      <div class="col-sm-6">
        <div class="col-sm-6">
          <span class="post-author">{{ author | uppercase }}</span>

        </div>
        <div class="col-sm-6">
          <span class="post-category">{{ category | reverse}} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["views", "title", "author", "category", "content", "date"],
  name: "post",
}
</script>
<style lang="scss" scoped>
.post-box {
  padding: 15px;
  background-color: aliceblue;
  box-shadow: 0 0 10px #DDD;
  position: relative;
  margin: 20px;
  text-align: left;

  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: blueviolet;
    border-radius: 4px;
    padding: 5px;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }

  .post-date {
    display: block;
    padding: 0 0 5px;
  }

  .post-title {
    text-align: left;
  }

  .post-author {

  }

}
</style>