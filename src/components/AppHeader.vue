<template>
	<!-- Header -->
	<header class="header-main header-position container-fluid no-padding">
		<!-- Menu Block -->
		<div class="menu-block container-fluid no-padding">
			<div class="container">
				<!-- Navigation -->
				<nav class="navbar ow-navigation">
					<div class="navbar-header">						
						<button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" class="navbar-toggle collapsed" type="button">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>						
						<a class="navbar-brand" href="" title="Logo"><h3>Dove <img src="/assets/images/dove-64.png" alt="logo"/> Catering</h3></a>
					</div>
					<div class="menu-bar">
						<a href="#" title="Close" id="menu-popup"><i class="fa fa-bars"></i></a>
					</div>
					<div class="navbar-collapse collapse navbar-right" id="navbar">
						<ul class="nav navbar-nav menubar">
							<li v-for="link in links"  :class="{'active': $route.name === link.name}" :key="link.name" ><router-link  :to="link.path" active-class="active" class="li">{{ link.name }}</router-link></li>
							
						</ul>
					</div>
				</nav><!-- Navigation /- -->
			</div><!-- Menu Block /- -->
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  name: "AppHeader",
  setup() {
    const links = ref([
      {
        path: "/",
        name: "Home",
      },
      {
        path: "/about",
        name: "About",      
      },
      {
        path: "/coming-soon",
        name: "Blog",
      },
      {
        path: "/gallery",
        name: " Gallery",
      },
      {
        path: "/contact",
        name: "Contact",
      },
    ]);
    

    return{
      links,
      }
  },
})
</script>