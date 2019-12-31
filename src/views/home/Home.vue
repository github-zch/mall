<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="nav-bar-center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends"/>
    <feature-view />
    <tab-control class="tab-control" :titles="['流行','新款','经典']"/>
    <ul>
      <li>我是内容1</li>
      <li>我是内容2</li>
      <li>我是内容3</li>
      <li>我是内容4</li>
      <li>我是内容5</li>
      <li>我是内容6</li>
      <li>我是内容7</li>
      <li>我是内容8</li>
      <li>我是内容9</li>
      <li>我是内容10</li>
      <li>我是内容11</li>
      <li>我是内容12</li>
      <li>我是内容13</li>
      <li>我是内容14</li>
      <li>我是内容15</li>
      <li>我是内容16</li>
      <li>我是内容17</li>
      <li>我是内容18</li>
      <li>我是内容19</li>
      <li>我是内容20</li>
      <li>我是内容21</li>
      <li>我是内容22</li>
      <li>我是内容23</li>
      <li>我是内容24</li>
      <li>我是内容25</li>
      <li>我是内容26</li>
      <li>我是内容27</li>
      <li>我是内容28</li>
      <li>我是内容29</li>
      <li>我是内容30</li>
      <li>我是内容31</li>
      <li>我是内容32</li>
      <li>我是内容33</li>
      <li>我是内容34</li>
      <li>我是内容35</li>
      <li>我是内容36</li>
      <li>我是内容37</li>
      <li>我是内容38</li>
      <li>我是内容39</li>
      <li>我是内容40</li>
      <li>我是内容41</li>
      <li>我是内容42</li>
      <li>我是内容43</li>
      <li>我是内容44</li>
      <li>我是内容45</li>
      <li>我是内容46</li>
      <li>我是内容47</li>
      <li>我是内容48</li>
      <li>我是内容49</li>
      <li>我是内容50</li>
      <li>我是内容51</li>
      <li>我是内容52</li>
      <li>我是内容53</li>
      <li>我是内容54</li>
      <li>我是内容55</li>
      <li>我是内容56</li>
      <li>我是内容57</li>
      <li>我是内容58</li>
      <li>我是内容59</li>
      <li>我是内容60</li>
      <li>我是内容61</li>
      <li>我是内容62</li>
      <li>我是内容63</li>
      <li>我是内容64</li>
      <li>我是内容65</li>
      <li>我是内容66</li>
      <li>我是内容67</li>
      <li>我是内容68</li>
      <li>我是内容69</li>
      <li>我是内容70</li>
      <li>我是内容71</li>
      <li>我是内容72</li>
      <li>我是内容73</li>
      <li>我是内容74</li>
      <li>我是内容75</li>
      <li>我是内容76</li>
      <li>我是内容77</li>
      <li>我是内容78</li>
      <li>我是内容79</li>
      <li>我是内容80</li>
      <li>我是内容81</li>
      <li>我是内容82</li>
      <li>我是内容83</li>
      <li>我是内容84</li>
      <li>我是内容85</li>
      <li>我是内容86</li>
      <li>我是内容87</li>
      <li>我是内容88</li>
      <li>我是内容89</li>
      <li>我是内容90</li>
      <li>我是内容91</li>
      <li>我是内容92</li>
      <li>我是内容93</li>
      <li>我是内容94</li>
      <li>我是内容95</li>
      <li>我是内容96</li>
      <li>我是内容97</li>
      <li>我是内容98</li>
      <li>我是内容99</li>
      <li>我是内容100</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'
  import TabControl from 'content/tabControl/TabControl'

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import {getHomeMultidata} from '@n/home'
  export default {
    data(){
      return{
        banners:[],
        recommends:[]
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl
    },
    created(){
      getHomeMultidata().then(res=>{
        console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style>
  .nav-bar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--color-tint);
    color: #ffffff;
    z-index: 10;
  }
  #home{
    padding: 44px 0 100px;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
