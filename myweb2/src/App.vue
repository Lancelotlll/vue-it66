<template lang="">
<carousel-slide />
<div class="box">
  <h1>Food</h1>
  <food-item />
  <food-item />
  <food-item />
</div>
  <footers />
</template>

<script></script>

<style>
  .box > div{
    border: dashed black 1px;
    display: inline-block;
    width: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
  .box > div:hover{
    cursor: pointer;
  }
</style>