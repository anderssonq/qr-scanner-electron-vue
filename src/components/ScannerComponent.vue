<template>
  <div class="container-qr-scanner">
    <qrcode-stream
      class="container-qr"
      @decode="onDecode"
      @init="onInit"
    ></qrcode-stream>
    <p class="error">{{ error }}</p>
    <p class="decode-result font-weight-bold mb-0" v-if="showResult">
      Result:
      <v-chip color="green" link @click="openBrowser(result)">
        <p class="white--text mb-0">
          {{ result ? result : "No code scanned yet" }}
        </p>
      </v-chip>
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    result: null,
    error: ""
  }),
  props: {
    showResult: {
      type: Boolean,
      default: () => false
    }
  },
  watch: {
    result: function() {
      this.$emit("onResultListener", this.result);
    }
  },
  methods: {
    onDecode(result) {
      this.result = result;
    },
    openBrowser: function(qrcode) {
      if (!qrcode) return;

      window.open(qrcode.href, "_blank");
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    }
  }
};
</script>

<style>
.container-qr-scanner {
  width: 300px;
}
</style>
