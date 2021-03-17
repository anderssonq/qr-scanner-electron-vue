<template>
  <Content />
</template>

<script>
export default {
  name: "App",
  components: {
    Content: () => import("./views/Content/Content")
  },
  data: () => ({})
};
</script>
