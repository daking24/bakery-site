<template>
  <main class="site-main page-spacing">
  <!-- Photo Slider -->
		<div class="photo-slider photo-slider-1 container-fluid no-padding">
			<!-- Main Carousel -->
			<div id="main-carousel" class="carousel slide carousel-fade" data-ride="carousel">
				<div role="listbox" class="carousel-inner">
					<div class="item active">
						<img width="1920" height="880" alt="slider" src="/assets/images/snacks-1.jpg">
						<div class="carousel-caption">
							<div class="slider-content">
								<h3>Satisfy Your Cravings with Our Delicious Snacks</h3>
								<p>We offer a wide selection of delicious and satisfying snacks, both savory and sweet, using only the freshest ingredients for maximum flavor. Perfect for a quick bite or to share with friends and family. Contact us and try our delectable snacks, you'll want to come back for more.</p>
								<a href="#" title="Order Online" class="order-online">Contact Us</a>
							</div>
						</div>
					</div>
					
					<div class="item">
						<img width="1920" height="880" alt="slider" src="/assets/images/cake-1.jpg">
						<div class="carousel-caption">
							<div class="slider-content">
								<h3>Celebrate in Style with Our Custom Cakes</h3>
								<p>We specialize in creating custom cakes for any occasion, using only the finest ingredients to ensure they are both delicious and beautiful, made with unique and creative designs to make your event special. Our skilled bakers take great care in crafting the perfect cake for your next event.</p>
								<a href="#" title="Order Online" class="order-online">Get In Touch</a>
							</div>
						</div>
					</div>
					
					<div class="item">
						<img width="1920" height="880" alt="slider" src="/assets/images/food-1.jpg">
						<div class="carousel-caption">
							<div class="slider-content">
								<h3>Experience the Flavors of Nigeria with Our Authentic Cuisine</h3>
								<p>We offer authentic Nigerian cuisine using freshest ingredients and traditional methods of preparation to ensure that every dish is packed with flavor, from Jollof Rice to Suya, traditional favorites that will satisfy. Experience the rich and diverse flavors of Nigeria by visiting the restaurant and trying the dishes.</p>
								<a href="#" title="Order Online" class="order-online">Connect with Us</a>
							</div>
						</div>
					</div>
					<a class="left carousel-control" href="#main-carousel" role="button" data-slide="prev">
						<i class="fa fa-caret-left" aria-hidden="true"></i>
					</a>
					<a class="right carousel-control" href="#main-carousel" role="button" data-slide="next">
						<i class="fa fa-caret-right" aria-hidden="true"></i>
					</a>
				</div>
			</div><!-- Main Carousel /-  -->
		</div><!-- Photo Slider /- -->
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Home",
})
</script>
