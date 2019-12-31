<template>
 <div class="tab-bar-item" @click="barClick">
     <div v-if="isactive">
         <slot name="tab-bar-logo-active"></slot>
     </div>
     <div v-else>
         <slot name="tab-bar-logo-default"></slot>
     </div>
     <div :style="{color:isactive?color:''}">
         <slot name="tab-bar-title"></slot>
     </div>
 </div>
</template>

<script>
    export default {
        props:{
            path:String,
            color:String
        },
        computed:{
            isactive(){
                return this.$route.path == this.path?true:false
            }
        },
        methods:{
            barClick(){
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style>
    .tab-bar-item{
        flex: 1;
        text-align: center;
    }
    .tab-bar-item img{
        display: inline-block;
        width: 25px;
    }
</style>