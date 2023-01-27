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
					<h3>Welcome To Dove</h3>
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
			<!-- <div class="section-padding"></div> -->
		</div><!-- Welcome Section 1 /- -->
		<!-- Menu Section 1 -->
		<div class="menu-section-1 container-fluid no-padding">
			<!-- <div class="section-padding"></div> -->
			<div class="container">
				<div class="section-header">
					<h3>Our Menu</h3>
					<h5>CAKES AND CONFECTIONERY</h5>
					<img src="/assets/images/section-seprator.png" alt="section-seprator" width="169" height="15">
					<p>Our menu offers a wide variety of delicious options, including cakes, snacks and traditional Nigerian dishes with international flavors, made with fresh ingredients and traditional methods to ensure great taste. Come try it today!</p>
				</div><!-- Section Header /-  -->
			</div><!-- Container /- -->
			<div class="menu-details-tab">
				<!-- Nav tabs -->
				<ul class="nav nav-tabs" role="tablist">
					<li role="presentation" class="active"><a href="#partycakes" aria-controls="partycakes" role="tab" data-toggle="tab">Cakes</a></li>
					<li role="presentation"><a href="#weddingcakes" aria-controls="weddingcakes" role="tab" data-toggle="tab">Snacks</a></li>
					<li role="presentation"><a href="#birthdaycakes" aria-controls="birthdaycakes" role="tab" data-toggle="tab">Nigerian Dishes</a></li>
				</ul>
				<!-- Tab panes -->
				<div class="tab-content">
					<div role="tabpanel" class="tab-pane active" id="partycakes">
						<div v-for="cake in cakes" :key="cake.name" class="col-md-6 col-sm-6 col-xs-6">
							<div class="menu-box-1">
								<img :src="cake.image" alt="menu" width="167" height="190"/>
								<h3>{{ cake.name }}</h3>
								<p>{{cake.content}}</p>
							</div>
						</div>
					</div>
					
					<div role="tabpanel" class="tab-pane" id="weddingcakes">
						<div v-for="snack in snacks" :key="snack.name" class="col-md-6 col-sm-6 col-xs-6">
							<div class="menu-box-1">
								<img   :src="snack.image" alt="menu" width="167" height="190"/>
								<h3>{{ snack.name }}</h3>
								<p>{{ snack.content }}</p>
							</div>
						</div>
					</div>
					
					<div role="tabpanel" class="tab-pane" id="birthdaycakes">
						<div v-for="food in foods" :key="food.name" class="col-md-6 col-sm-6 col-xs-6">
							<div class="menu-box-1">
								<img :src="food.image" alt="menu" width="167" height="190"/>
								<h3>{{ food.name }}</h3>
								<p>{{ food.content }}</p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			<a href="#" title="View Full Menu" class="view-full">Contact for More Details</a>
		</div><!-- Menu Section 1 /- -->
		<div class="section-padding"></div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
export default defineComponent({
  name: "Home",
	setup () {
		const cakes = ref([
			{image:"/assets/images/choco-cake.jpg", name: "Chocolate Cake", content: "Indulge in our rich Chocolate Cake made with premium ingredients, topped with ganache, chocolate shavings, and sauce."},
			{image:"/assets/images/vanilla-cake.jpg", name: "Vanilla Cake", content: "A classic treat made with fresh ingredients, real vanilla extract for a pure and delicate flavor. Perfect for any occasion, it's moist and fluffy"},
			{image:"/assets/images/nuts-cake.jpg", name: "Nuts Cake", content: "A moist and flavorful cake made with a combination of various nuts and spices, for those who love the taste of nuts in their desserts."},
			{image:"/assets/images/fruits-cake.jpg", name: "Fruits Cake", content: "A delicious and refreshing cake made with a variety of fruits, perfect for those who love a fruity taste in their desserts."},
			{image:"/assets/images/straw-cake.jpg", name: "Strawberry Cake", content: "A classic and delicious cake made with fresh strawberries, perfect for those who love the taste of strawberries."},
			{image:"/assets/images/plain-cake.jpg", name: "Plain Cake", content: "A simple yet delicious cake made with basic ingredients, perfect for those who prefer a classic taste in their desserts."},
			{image:"/assets/images/sponge-cake.jpg", name: "Sponge Cake", content: "A light and airy cake made with eggs and sugar, perfect for those who prefer a lighter texture in their desserts."},
			{image:"/assets/images/redvel-cake.jpg", name: "Red Velvet Cake", content: "A classic and moist cake made with cocoa powder, perfect for those who love the taste of red velvet."},
			{image:"/assets/images/carrot-cake.jpg", name: "Carrot Cake", content: "A moist and flavorful cake made with grated carrots, spices, perfect for those who love the taste of carrots in their desserts."},
			{image:"/assets/images/mixed-cake.jpg", name: "Mixed Cake", content: "A fun and unique cake made with a combination of different flavors, perfect for those who love to experiment with different tastes in their desserts."},
		]);

		const snacks = ref([
			{image:"/assets/images/fishroll.jpg", name: "Baked Fish Rolls", content: "A savory and delicious flaky baked dough filled with fish and spiced healthy vegetables, perfect for a quick and satisfying snack."},
			{image:"/assets/images/sausage-roll.jpg", name: "Sausage Rolls", content: "A classic and savory pastry filled with a spicy sausage mixture and wrapped in a flaky puff pastry, perfect for a snack or breakfast."},
			{image:"/assets/images/min-shawarma.jpg", name: "Mini Shawarma Rolls", content: "A new invented savory pastry filled with a spicy sausage and stir-fried vegetables for any occassion."},
			{image:"/assets/images/eggrolls.jpg", name: "Egg Rolls", content: "A savory, crispy and crunchy deep fried roll filled with a boiled egg, perfect as a snack or appetizer. Best on the go."},
			{image:"/assets/images/puffs.jpg", name: "Puff Puffs", content: "A deep-fried dough ball made from a mixture of flour, sugar, and yeast, perfect for a sweet and satisfying snack."},
			{image:"/assets/images/chinchin.jpg", name: "Chin-chin", content: "A sweet and crunchy snack made from a mixture of flour, sugar, and butter, perfect for a sweet treat."},
			{image:"/assets/images/meatpie.jpg", name: "Meat Pie", content: "A savory pastry made of dough and filled with a mixture of meat and vegetables, perfect for a satisfying snack or meal."},
			{image:"/assets/images/doughnut.jpg", name: "Doughnuts", content: " A deep-fried dough pastry, often coated in sugar or flavour-selected-glaze, perfect for a sweet and satisfying snack."},
			{image:"/assets/images/samosa.jpg", name: "Samosa", content: "A savory and crispy pastry filled with a mixture of vegetables, spices, and meat, perfect for a snack or appetizer."},
			{image:"/assets/images/spring-rolls.jpg", name: "Spring Rolls", content: "A savory and crispy roll filled with a mixture of vegetables, meat, and spices, perfect as a snack or appetizer."},
		]);

		const foods = ref([
			{image:"/assets/images/friedrice.jpg",name: "Fried Rice", content: " Our fried rice is a traditional dish made with freshly cooked rice, mixed with vegetables and your choice of protein."},
			{image:"/assets/images/jollofrice.jpg",name: "Jollof Rice", content: "A West African dish made with rice, tomatoes, onions, peppers, and spices. It is a one-pot dish that is cooked with meat or fish."},
			{image:"/assets/images/rice-stew.jpg",name: "White Rice and Stew", content: "A classic dish made with steamed white rice and a flavorful stew made with vegetables and protein."},
			{image:"/assets/images/spaghetti.jpg",name: "Spaghetti and Tomato Stew", content: "A classic dish made with spaghetti pasta, fresh tomatoes, and a variety of herbs and spices. It's a hearty and satisfying meal."},
			{image:"/assets/images/ewedu.jpg",name: "Ewedu Soup", content: "A traditional Nigerian soup made with jute leaves and served with a combination of protein and carbohydrates."},
			{image:"/assets/images/beans-soup.jpg",name: "Gbegiri Soup (Beans soup)", content: "A traditional Nigerian soup made with beans and served with a combination of protein and carbohydrates."},
			{image:"/assets/images/egusi.jpg",name: "Egusi Soup", content: "A traditional Nigerian soup made with ground melon seeds and served with a combination of protein and carbohydrates."},
			{image:"/assets/images/okro-soup.jpg",name: "Okro Soup", content: "A traditional Nigerian soup made with okra and served with a combination of protein and carbohydrates."},
			{image:"/assets/images/vege-soup.jpg",name: "Vegetable Soup", content: "Our homemade vegetable soup is made with a medley of fresh vegetables, simmered in a rich broth for a comforting and nourishing meal."},
			{image:"/assets/images/salad.jpg",name: "Salad", content: "Our fresh and healthy salad is made with a variety of mixed greens and your choice of toppings. Perfect for a light lunch or dinner."},
		]);

		return {
			foods,
			snacks,
			cakes,
		}
	}

})
</script>
