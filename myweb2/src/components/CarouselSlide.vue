<template>
  <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="slide1" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="slide2" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="slide3" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>
<script>
export default {
  data(){
    return{
      slide1:'/src/assets/img/slide1.png',
      slide2:'/src/assets/img/slide2.png',
      slide3:'/src/assets/img/slide3.png'
    }
  }
};
</script>