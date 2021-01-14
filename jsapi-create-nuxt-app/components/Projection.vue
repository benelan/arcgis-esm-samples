<template>
  <p>Check the console for point projection.</p>
</template>

<script>
import * as pe from "@arcgis/core/geometry/projection.js";
import Point from "@arcgis/core/geometry/Point.js";

export default {
  name: "Projection",
  async mounted() {
    pe.load()
      .then(() => {
        console.log(
          pe.project(new Point({ x: -117, y: 34 }), { wkid: 3857 }).toJSON()
        );
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
