import { createApp } from 'vue'
import App from './App.vue'
import CarouselSlide from './components/CarouselSlide.vue'
import FoodItem from './components/FoodItem.vue'
import Footer from './components/Footer.vue'

const app = createApp(App)

app.component('carousel-slide',CarouselSlide)
app.component('food-item',FoodItem)
app.component('footers',Footer)
app.mount('#app')