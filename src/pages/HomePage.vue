<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 bgdk2 rounded elevation-3">
      <img src="../assets/img/astronaut.png" alt="CodeWorks Logo" class="rounded-circle elevation-4">
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        Welcome!<br />
        <small>Click the calender to see some awesome space pictures!<small>
        </small></small>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  background-color: rgb(30, 28, 63);
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      width: 200px;
    }
  }
.bgdk2 {
  background-color: rgb(23, 22, 49);
}
}

</style>
