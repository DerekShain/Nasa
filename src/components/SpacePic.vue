<template>
  <div class="card p-0 m-2 bg-dark text-light border-0" style="width: 50vw;">
    <img :src="apod.img" class="m-0">
    <div class="body">
      <h5 class="title p-2">
        {{ apod.title }}
      </h5>
      <p class="text p-2">
        {{ apod.description }}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        From: {{ apod.author }}
      </li>
      <li class="list-group-item">
        Date: {{ apod.date }}
      </li>
    </ul>
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
