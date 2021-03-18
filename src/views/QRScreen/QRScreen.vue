<template>
  <div class="text-center">
    <div class="container-arrow">
      <img src="../../assets/ArrowCam.png" />
    </div>
    <h1 class="display-3 mt-2 mb-2">
      Please Scan Your Code
    </h1>
    <div class="mx-auto mt-4">
      <scanner-component
        ref="scannerComponent"
        :show-result="true"
        @onResultListener="onResultListener"
      />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    ScannerComponent: () => import("../../components/ScannerComponent")
  },
  data: () => ({
    number: null
  }),
  watch: {},
  methods: {
    onResultListener: function(value) {
      this.number = value;
    }
  }
};
</script>
