<template>
  <div class="flex-1 bg-pink flex items-center justify-center h-full">
    <svg
      ref="svg"
      class="h-[100px] border-transparent fle items-center justify-center w-full"
      viewBox="0 0 100 100"
    ></svg>
  </div>
</template>

<script setup lang="ts" >
import {  ref, onMounted, PropType } from "vue";
import * as d3 from "d3";

const props = defineProps({
  activeTheme: {
    type: String
  },
  theme: {
    type: String
  },
  data: {
    type: [Number]
  },
  barSize: {
    type: Number
  },
  barSpacing: {
    type: Number
  },
  barHeight:{type:Number}
});

// export default defineComponent({
//   setup() {
    const svg = ref(null); // Reference to the SVG element

    
    onMounted(() => {
  const data = props.data;
      const dataLength = data.length;
      const barHeight = props.barHeight || 100;
      const barWidth = props.barSize || 12;
      const barSpacing = props.barSpacing || 5; // Spacing between bars
      const totalChartWidth = dataLength * (barWidth + barSpacing) - barSpacing;
  // console.log(dataLength);
  // console.log(data.length);
      const svgElement = d3.select(svg.value);
      svgElement.selectAll("*").remove(); // Clear any existing content

      const chartGroup = svgElement
        .append("g")
        .attr(
          "transform",
          `translate(${(100 - totalChartWidth) / 2}, 0)` // Center horizontally
        );

        
      chartGroup
        .selectAll("rect")
        .data(props.data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * (barWidth + barSpacing))
        .attr("y", (d) => barHeight - d)
        .attr("width", barWidth)
        .attr("height", (d) => d)
        .attr("fill", (d) => (d < Math.max(...data) ? props.theme : props.activeTheme))
        .attr("rx", 10) // Rounded corners
        .attr("ry", 5);
      chartGroup
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .attr("x", (d, i) => i * (barWidth + barSpacing) + barWidth / 2)
        .attr("y", barHeight + 15) // Position below the bars
        .attr("text-anchor", "middle")
        .text((d, i) => `Label ${i + 1}`);       });


    // return {
    //   svg,
    // };
  // },
// });
</script>

<style scoped>
.de{
  animation-duration: 1s;
}
</style>
