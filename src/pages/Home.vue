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
    <!-- Welcome Section 1 -->
		<div class="welcome-section-1 container-fluid no-padding">
			<div class="section-padding"></div>
			<div class="container">
				<div class="section-header">	
					<h3>Welcome To Cake</h3>
					<h5>Our Story</h5>
					<img src="/assets/images/section-seprator.png" alt="section-seprator" width="169" height="15">
					<p>Dove Catering is a bakery that has been running for over 20 years, it was started by a baker named Mrs. Ajayi Abosede and two assistant bakers who shared her passion for baking. The bakery uses only the freshest ingredients and traditional methods of preparation to ensure that every bite is packed with flavor. It has grown to become a beloved institution, it is not only a place for delicious food but also a community where customers come to catch up with friends and make new ones.</p>
				</div><!-- Section Header /-  -->
				<div class="col-md-7 col-sm-7 col-xs-6 wc-img-box">
					<img src="/assets/images/welcome-1.png" alt="welcome" width="754" height="502" />
				</div>	
				
				<div class="col-md-5 col-sm-5 col-xs-6">
					<div class="mission-content">
						<img src="/assets/images/welcome-ic-1.png" alt="welcome-ic" width="71" height="71">
						<h3>Our Mission</h3>
						<p>At Dove Catering, our mission is to provide our customers with the highest quality cakes, snacks, and Nigerian cuisine. We strive to use only the freshest ingredients, traditional methods of preparation, and unique designs to create a memorable experience for every customer.</p>
					</div>
					
					<div class="mission-content">
						<img src="/assets/images/welcome-ic-2.png" alt="welcome-ic" width="71" height="71">
						<h3>Our vision</h3>
						<p>Dove Catering's vision is to be known as the go-to destination for delicious and satisfying cakes, snacks, and Nigerian cuisine. They aim to be recognized for their commitment to quality and unique designs and their ability to blend flavors and traditions from around the world to create an unforgettable experience for customers.</p>
					</div>
					
					<div class="mission-content">
						<img src="/assets/images/welcome-ic-3.png" alt="welcome-ic" width="71" height="71">
						<h3>What We do</h3>
						<p>Dove Catering specializes in creating custom cakes for any occasion using only the finest ingredients for pure indulgence, also offers a wide variety of snacks and authentic Nigerian cuisine, with traditional favorites. They focus on unique and creative designs for cakes and traditional methods of preparation for their food.</p>
					</div>
				</div>
			</div><!-- Container /- -->
			<div class="section-padding"></div>
		</div><!-- Welcome Section 1 /- -->
		
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Home",
})
</script>
