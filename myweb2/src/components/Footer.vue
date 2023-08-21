<template>
  <footer class="bg-dark text-center text-white">
    <div class="container p-4 pb-0">
      <h4 class="mb-4">{{ name }}</h4>
      <section class="mb-4 d-flex">

        <p>{{ address }}</p>
        <p>{{ email }}</p>
        <p> <a :href="website" target="_blank">Website</a></p>
        <p><a :href="local" target="_blank">เทคนิคสัตหีบ</a></p>
      </section>
    </div>

    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2020 Copyright:
      <a class="text-white" href="#">Surasit</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>
<script>
export default {
  data() {
    return {
      name: 'Surasit Suwannachat',
      address: 'Chonburi',
      email: '66309010018@tatc.ac.th',
      website: 'http://www.106planet.com/66309010018/Website/',
      local: 'https://goo.gl/maps/MNK7mpftCfdTw9HZA'
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: white;
}

section {
  justify-content: center;
  flex-direction: column;
}
</style>
