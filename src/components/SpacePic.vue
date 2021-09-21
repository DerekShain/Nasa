<template>
  <div class="card p-0 m-2 bgdk text-light border-0" style="width: 50vw;">
    <img :src="apod.img" class="m-0 rounded-top">
    <div class="body">
      <h5 class="title p-2 text-center">
        {{ apod.title }}
      </h5>
    </div>
    <div class="col">
      <p class="text p-2">
        {{ apod.description }}
      </p>
      <ul class="list-group  list-group-flush">
        <li class="list-group-item bgdk text-light">
          Image Credit and Copyright: {{ apod.author }}
        </li>
        <li class="list-group-item bgdk text-light">
          Date: {{ apod.date }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    apod: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {

    }
  }
}
</script>

<style scoped>
.bgimage{
  background-image: url("apod.img")
}
</style>
