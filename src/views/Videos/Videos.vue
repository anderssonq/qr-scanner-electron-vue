<template>
  <div class="container-videos">
    <v-card
      class="mx-auto mb-2"
      outlined
      v-for="(item, index) in [1, 2, 1, 1, 1, 1]"
      :key="index"
      elevation="2"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            OVERLINE
          </div>
          <v-list-item-title class="headline mb-1">
            Headline 5
          </v-list-item-title>
          <v-list-item-subtitle
            >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
          >
        </v-list-item-content>
        <div class="container-card pt-2 pb-2">
          <iframe
            src="https://www.youtube.com/embed/kDrq1-O8RsA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>
