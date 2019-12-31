<template>
    <div class="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
    import TabBarItem from './TabBarItem'
    export default {
        components:{
            TabBarItem
        }
    }
</script>

<style>
.tab-bar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: 49px;
    text-align: center;
    background-color: #f6f6f6;

}
</style>