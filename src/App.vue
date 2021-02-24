<template>
  <div>
    <router-view></router-view>
    <StoreAwareLoadingSpinner></StoreAwareLoadingSpinner>
  </div>
</template>

<script>
import StoreAwareLoadingSpinner from "@/components/StoreAwareLoadingSpinner";
export default {
  name: 'App',
  components: {StoreAwareLoadingSpinner},
};
</script>
