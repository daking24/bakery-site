<template>
  <footer class="footer-main-1 container-fluid no-padding">		
		<div class="container">
			<div class="row">
				<!-- Widget About -->
				<aside class="col-md-4 col-sm-6 col-xs-6 ftr-widget recent-widget">
					<h3>Recent Posts</h3>
					<a href="#">Comming Soon...</a>
				</aside><!-- Widget About /- -->
				<!-- Widget Links -->
				<aside class="col-md-2 col-sm-6 col-xs-6 ftr-widget link-widget">
					<h3>LINKS</h3>
					<ul>
						<li><a href="#" title="About">About</a></li>
						<li><a href="#" title="Gallery">Gallery</a></li>
						<li><a href="#" title="Portfolio">Blog</a></li>
						<li><a href="#" title="Contact">Contact</a></li>
					</ul>
				</aside><!-- Widget Links /- -->
				<!-- Widget Contact -->
				<aside class="col-md-3 col-sm-6 col-xs-6 ftr-widget contact-widget">
					<h3>contact Info</h3>
					<p><i class="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:dovecatering@gmail.com" title="hello@cakeshop.com">info@dovecatering.com</a></p>
					<p><i class="fa fa-phone" aria-hidden="true"></i> P: +234-(0)-803-592-0146 F: +234-(0)-805-746-7832</p>
					<p><i class="fa fa-map-marker" aria-hidden="true"></i> 99 Barnard St - Suite 111 United States - GA 22222 </p>
					<ul>
						<li><a href="#" title="Twitter"><i class="fa fa-twitter"></i></a></li>
						<li><a href="#" title="linkedin"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
						<li><a href="#" title="facebook"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
						<li><a href="#" title="skype"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
						<li><a href="#" title="pinterest"><i class="fa fa-pinterest-square" aria-hidden="true"></i></a></li>
					</ul>
				</aside><!-- Widget Contact /- -->
				<!-- Widget Isnstagram -->
				<aside class="col-md-3 col-sm-6 col-xs-6 ftr-widget form-widget">
					<h3>Quick Contact</h3>
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Name" required/>
					</div>
					
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Email Address" required/>
					</div>
					
					<div class="form-group">
						<textarea placeholder="Message" rows="4" class="form-control"></textarea>
					</div>
					<div class="form-group">
						<button title="Send" name="post">Send</button>
					</div>
				</aside><!-- Widget Newsletter /- -->
			</div>
		</div>
	</footer>
  <!-- Bottom Footer 1 -->
	<div class="bottom-footer-1 container-fluid no-padding">
		<div class="container">
			<div class="footer-copyright">
				<p>copyrights &copy; 2023 dovetech. all rights reserved</p>
			</div>
		</div>
	</div><!-- Bottom Footer /- -->
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "AppFooter", 
})
</script>