<template>
    <div class="brands" ref="slider" @click="muian">
      <div class="inner"   ref="inner">
        
          <img class="brand"   v-for="brand in brands" :key="brand" :src="brand.src" />
        
      </div>
    </div>
</template>
<script ></script>

<style scoped lang="scss">

</style>