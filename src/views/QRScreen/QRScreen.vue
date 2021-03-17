<template>
  <div class="text-center">
    <div class="container-arrow">
      <img src="../../assets/ArrowCam.png" />
    </div>
    <h1 class="display-1 mt-2">
      Please Scan Your Code
    </h1>
    <div style="width: 300px" class="mx-auto mt-4">
      <scanner-component ref="scannerComponent" :show-result="true" />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    ScannerComponent: () => import("../../components/ScannerComponent")
  },
  data: () => ({
    result: null
  }),
  watch: {}
};
</script>
