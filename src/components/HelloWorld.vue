<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <div class="text-[30px] group">
      默认：<br />
      <i class="i-custom-shengdanmao group-hover:text-blue-500"></i>
      <i class="i-custom-shengdanlihe" />
      <br />
      指定为蒙版：<br />
      <i class="i-custom-shengdanmao?mask group-hover:text-blue-500" c-yellow />
      <i class="i-custom-shengdanlihe?mask" />
      <br />

      指定为背景：<br />
      <el-button>我是 ElButton</el-button>
      <i class="i-custom-shengdanmao?bg group-hover:text-blue-500" c-yellow />
      <i class="i-custom-shengdanlihe?bg" />
    </div>
    <el-button type="primary" size="large">我是 ElButton</el-button>
    <el-icon :size="30" :color="`#f00`">
      <Edit />
    </el-icon>

    <div>
      <Search un-w="20px" un-text="yellow" />
    </div>
    <div class="text-[#f00] font-bold" un-bg="yellow" un-text="40px">
      You’ve successfully created a project with

      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      What's next?
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  /* font-size: 1.2rem; */
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
