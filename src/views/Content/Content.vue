<template>
  <v-app>
    <!-- <v-app-bar app color="primary">
      Lorem ipsum dolor sit amet consectetur
    </v-app-bar> -->
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-bottom-navigation
      background-color="primary"
      dark
      horizontal
      app
      v-model="menu"
      class="pt-2"
    >
      <v-btn value="qrcode" color="primary">
        <span>Scan a code</span>

        <v-icon>mdi-qrcode-scan</v-icon>
      </v-btn>

      <v-btn value="videos" color="primary">
        <span>Videos</span>

        <v-icon>mdi-video-image</v-icon>
      </v-btn>

      <v-btn value="auth" color="primary">
        <span>Admin</span>

        <v-icon>mdi-shield-account-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "Content",
  data: () => ({
    menu: "qrcode"
  }),
  watch: {
    menu: function() {
      switch (this.menu) {
        case "qrcode":
          this.$router.push({ name: "qrcode" }).catch(() => {});
          break;
        case "videos":
          this.$router.push({ name: "videos" }).catch(() => {});
          break;
        case "dashboard":
          this.$router.push({ name: "dashboard" }).catch(() => {});
          break;
        default:
          this.$router.push({ name: "auth" }).catch(() => {});
          break;
      }
    }
  }
};
</script>
