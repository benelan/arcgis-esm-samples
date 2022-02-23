<template>
  <div>
    <client-only>
      <EsriMap />
    </client-only>
    <Tutorial />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  components: {
    EsriMap: () => {
      if (process.client) return import("../components-no-ssr/EsriMap");
    },
  },
};
</script>
