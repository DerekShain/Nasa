<template>
  <div class="container-fluid" :style="{ 'backgroundImage': 'url(' + state.apod.img + ')' }">
    <div class="m-2 d-flex form-group">
      <form @submit.prevent="getSpacePic()" class="bgdk text-light mt-2 d-flex rounded elevation-1">
        <h6 class="ps-2">
          Select a date
        </h6>
        <input type="date" class="form-control bgdk  text-light border-0" v-model="state.date">
        <button class="btn px-2 py-0" type="submit">
          <i class="mdi mdi-card-search text-light f-18"></i>
        </button>
      </form>
    </div>
    <div class=" justify-content-space-between align ">
      <SpacePic :apod="state.apod" v-if="state.apod" />
    </div>
  </div>
</template>

<script>

import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { computed } from '@vue/runtime-core'
import { spaceService } from '../services/SpaceService'

export default {
  name: 'CalendarPage',
  setup() {
    const state = reactive({
      date: '',
      apod: computed(() => AppState.apod)
    })
    return {
      state,
      async getSpacePic() {
        await spaceService.findSpacePic(state.date)
      }
    }
  }
}
</script>

<style>
.bgdk {
  background-color: rgb(30, 28, 63);
}

.bgdk2 {
  background-color: rgb(23, 22, 49);
}

.align{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
