<template>
  <div class="text-center">
    <h1 class="display-3 mt-2">
      Web Cam Qr Scanner Feature
    </h1>

    <div style="width: 400px" class="mx-auto mt-6" v-if="isScanner">
      <scanner-component />
    </div>
    <div style="width: 400px" class="mx-auto mt-6" v-else>
      <v-btn color="primary" @click="isScanner = !isScanner">
        Turn on scanner
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    ScannerComponent: () => import("../components/ScannerComponent")
  },
  data: () => ({
    isScanner: false
  })
};
</script>
