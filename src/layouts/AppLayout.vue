<template>
  <AppHeader/>
  <router-view></router-view>
  <AppFooter/>
</template>

<script lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "AppLayout",
  components:{AppHeader, AppFooter},
})
</script>