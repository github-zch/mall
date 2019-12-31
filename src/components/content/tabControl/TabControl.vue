<template>
<div class="tab-control">
  <div class="tab-control-item"
       v-for="(item,index) in titles"
       @click="itemClick(index)">
    <span :class="{active:index===currentIndex}">{{item}}</span>
  </div>
</div>
</template>

<script>
    export default {
      props:{
        titles:Array
      },
      data(){
        return{
          currentIndex:0
        }
      },
      methods:{
        itemClick(index){
          this.currentIndex=index
        }
      }
    }
</script>

<style>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 2px;
  }
  .active{
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-tint);
  }
</style>
