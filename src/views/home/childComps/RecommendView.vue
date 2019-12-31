<template>
  <div class="recommend">
    <a v-for="item in recommends" :href="item.link" class="recommendItem">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      recommends: Array
    }
  }
</script>

<style>
  .recommend {
    display: flex;
    width: 100%;
    padding: 10px 0 20px;
    font-size: 16px;
    border-bottom: 8px solid #e6e6e6;
    text-align: center;
  }
  .recommendItem {
    flex: 1;
  }
  .recommendItem img {
    width: 70%;
    margin-bottom: 10px;
  }
</style>
