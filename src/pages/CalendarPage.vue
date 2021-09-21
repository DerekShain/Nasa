<template>
  <div class="container-fluid">
    <div class="col p-2">
      <form @submit.prevent="getSpacePic()" class="bgdk text-light rounded elevation-1">
        <div class=" d-flex form-group align-items-center ">
          <input type="date" class="form-control bgdk text-light border-0" v-model="state.date">
          <button class="btn px-2 py-0" type="submit">
            <i class="mdi mdi-card-search text-light f-18"></i>
          </button>
        </div>
      </form>
      <div class="row d-flex flex-column align-items-center justify-content-center">
        <SpacePic :apod="state.apod" v-if="state.apod" />
      </div>
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
  background-color: rgb(105, 105, 105);
}

</style>
