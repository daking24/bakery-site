<template>
  <!-- Page Banner -->
		<div class="page-banner container-fluid no-padding">
			<div class="page-banner-content">
				<h3>Contact</h3>
			</div>
		</div><!-- Page Banner /- -->

		<!-- Contact Us 1 -->
		<div class="contact-us-1 container-fluid no-padding">
			<div class="section-padding"></div>
			<!-- Container -->
			<div class="container">
				<div class="col-md-6 col-sm-6 col-xs-6">
					<!-- Section Header -->
					<div class="section-header left-header">
						<h3>Get In Touch</h3>
						<h5>Contact</h5>
						<img src="/assets/images/section-seprator-1.png" alt="section-seprator-1" width="70" height="3">
						<p>The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day.</p>
					</div><!-- Section Header /- -->
					<form class="row">
						<div class="form-group col-md-6">
							<input type="text" id="input_fname" name="contact-fname" required placeholder="First Name" class="form-control">
						</div>
						<div class="form-group col-md-6">
							<input type="text" id="input_lname" name="contact-lname" required placeholder="Last Name" class="form-control">
						</div>
						<div class="form-group col-md-6">
							<input type="text" id="input_email" name="contact-email" required placeholder="Your Email" class="form-control">
						</div>
						<div class="form-group col-md-6">
							<input type="text" id="input_phone" required name="contact-phone" placeholder="Your Phone Number" class="form-control">
						</div>
						<div class="form-group col-md-12">
							<input type="text" id="input_subject" name="contact-subject" required placeholder="Subject" class="form-control">
						</div>
						<div class="form-group col-md-12">
							<textarea id="textarea_message" name="contact-message" placeholder="Your Message" rows="6" class="form-control"></textarea>
						</div>
						<input type="submit" title="Send Now"  value="Send Now" id="btn_submit" name="Send Now">
						<div id="alert-msg" class="alert-msg"></div>
					</form>
				</div>
				
				<div class="col-md-6 col-sm-6 col-xs-6 contact-detail">
					<div class="col-md-6 col-sm-6 col-xs-6 contact-content">
						<div class="contact-info">
							<h3>BRANCH ADDRESS</h3>
							<p>1905A, Brook Downtown,</p>
							<p>North California,CA 19A34</p> 
							<p>United States</p>
						</div>
					</div>
					<div class="col-md-6 col-sm-6 col-xs-6 contact-content">
						<div class="contact-info">
							<h3>Contact Info</h3>
							<p><a href="tel:1-800-23-456-7890" title="1-800-23-456-7890">(1-800-23-456-7890)</a></p>
							<p><a href="mailto:info@domain.com" title="info@domain.com">info@domain.com</a></p>
							<p><a href="mailto:xyz@royalbakers.com" title="xyz@royalbakers.com">xyz@royalbakers.com</a></p>
						</div>
					</div>
					<!-- Map Section -->
					<div class="map">
						<div class="map-canvas" id="map-canvas-contact" data-lat="-37.817214" data-lng="144.955925" data-string="1905A, Brook Downtown,North California,CA 19A34 United States" data-zoom="12"></div>
					</div><!--  Map Section /- -->
				</div>
			</div><!-- Container /- -->
			<div class="section-padding"></div>
		</div><!-- Contact Us 1 /- -->
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({

})
</script>