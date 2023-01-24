<template>
  <AppHeader/>
  <router-view></router-view>
</template>

<script lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "AppLayout",
  components:{AppHeader,},
})
</script>