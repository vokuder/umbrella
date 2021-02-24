<template>
  <v-overlay v-if="$store.getters['loading_spinner/getIsActive']">
    <v-progress-circular indeterminate size="64"
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  name: "StoreAwareLoadingSpinner"
}
</script>
