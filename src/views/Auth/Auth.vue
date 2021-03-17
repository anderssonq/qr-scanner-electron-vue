<template>
  <div>
    <v-row>
      <v-col cols="12" class="text-center">
        <div class="container-arrow">
          <img src="../../assets/ArrowCam.png" />
        </div>
        <h1 class="display-1 mt-2">
          Please Scan Your Code
        </h1>
        <scanner-component
          ref="scannerComponent"
          @onResultListener="onResultListener"
          class="ma-auto"
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          label="PIN"
          class="input-pad"
          height="42"
          v-model="number"
          readonly
          outlined
        ></v-text-field>
        <numeric-pac
          :onInput="onInput"
          :onDelete="onDelete"
          :onReset="onReset"
          :show="showKeypad"
        />
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn outlined color="primary" block @click="signin" large>
          Acceder
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {
    "numeric-pac": () => import("../../components/NumericPad"),
    ScannerComponent: () => import("../../components/ScannerComponent")
  },
  data: () => ({
    number: "",
    maxLength: 12,
    showKeypad: true
  }),
  methods: {
    signin: function() {
      this.$router.push({ name: "dashboard" });
    },
    onResultListener: function(value) {
      this.number = value;
      this.signin();
    },
    onInput(key) {
      this.number = (this.number + key).slice(0, this.maxLength);
    },
    onDelete() {
      this.number = this.number.slice(0, this.number.length - 1);
    },
    onReset() {
      this.number = "";
    }
  }
};
</script>
