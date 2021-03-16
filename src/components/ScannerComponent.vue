<template>
  <div>
    <qrcode-stream @decode="onDecode" @init="onInit"></qrcode-stream>
    <p class="error">{{ error }}</p>
    <p>
      Please put the Qr code in front of your web cam, below will display result
      of it
    </p>

    <p class="decode-result">
      Last result:
      <a :href="result" target="_blank"
        ><b>{{ result ? result : "No code scanned yet" }}</b></a
      >
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    result: null,
    error: ""
  }),
  methods: {
    onDecode(result) {
      this.result = result;
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
