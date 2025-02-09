<script setup lang="ts">
import BetweenComponent from "../../../components/BetweenComponent.vue";
import ColumnComponent from "../../../components/ColumnComponent.vue";
import ColumnStartComponent from "../../../components/ColumnStartComponent.vue";
import FlexComponent from "../../../components/FlexComponent.vue";
import IconComponent from "../../../components/IconComponent.vue";
import CaretDownIcon from "../../../components/icons/line-icons/CaretDownIcon.vue";
import SettingsLineIcon from "../../../components/icons/line-icons/SettingsLineIcon.vue";
import StartComponent from "../../../components/StartComponent.vue";
import VendorDashboardMinChart from "./components/VendorDashboardMinChart.vue";
import VendorDashboardTransactions from "./components/VendorDashboardTransactions.vue";
// var options = {
//   series: [
//     {
//       name: "Desktops",
//       data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
//     },
//   ],
//   chart: {
//     type: "line",
//     zoom: {
//       enabled: false,
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     width: 3,
//     curve: "smooth",
//   },
//   title: {
//     text: "Sales Analytics",
//     align: "left",
//   },
//   grid: {
//     row: {
//       colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
//       opacity: 0.5,
//     },
//   },
//   xaxis: {
//     categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
//   },
// };

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "vue-chartjs";
import VendorTopProductsComponent from "./components/VendorTopProductsComponent.vue";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData3 = {
  labels: ["January", "February", "March","April","May","June","July","August","September","October","November","December"],
  datasets: [{ data: [40, 20, 12,33,56,98,99,12,34,19,99,34],backgroundColor:"#0a7274",label:["label"],text:"text",barThickness:29 }],
};
const chartOptions3 = {
  responsive: true,
  maintainAspectRatio: true,
  layout: {
    padding:40
  },
  scales: {
    y: {
      max:40,
      ticks: {
        callback: function (value, index, ticks) {
          return "$"+value
        }
      }
   }
  }
  
};

 const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}


const options2 = {
  responsive: true,
  maintainAspectRatio: true,
};

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "May",
      backgroundColor: "#f87979",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "June",
      backgroundColor: "blue",
      data: [5, 5, 0, 81, 6, 95, 30],
    },
  ],
};

const data1 = [50, 72, 33, 14, 65, 96];
const data2 = [50, 72, 33, 14, 65,45, 96];
</script>

<template>
  <section class="h-fit">
    <BetweenComponent class="p-6">
      <p class="text-[28px] font-semibold text-lightText">Dashboard</p>
      <div
        class="rounded-md bg-white border-gray-300 border cursor-pointer py-[6px] gap-1 px-4 flex items-center justify-center"
      >
        <SettingsLineIcon class="w-[22px] h-[22px] fill-primary" />
        <p class="text-primary mt- text-[15px] font-medium">Manage</p>
      </div>
    </BetweenComponent>
    <FlexComponent class="gap-3 px-6 flex w-full">
      <div class="bg-white rounded-md flex-1 py-2 px-4 flex items-center">
        <div class="flex flex-col gap-1 j justify-center flex-1">
          <p class="text-2xl font-bold">$10.54</p>
          <p class="text-sm font-medium text-lightText">Total Revenue</p>
          <span class="flex items-end text-[#06A561] fill-[#06A561]"
            ><span class="text-sm font-medium text-current">22.45% </span>
            <span
              ><CaretDownIcon
                class="w-[14px] h-[14px] rotate-180 fill-current"
              /> </span
          ></span>
        </div>
        <IconComponent class="bg-[#D7DBEC] p-2">
          <svg
            viewBox="0 0 13 12"
            fill="current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.5 1.5C6.77614 1.5 7 1.72386 7 2L7.00039 2.04515C8.09682 2.24571 8.94466 3.09265 8.9974 4.14575L9 4.25H8C8 3.71689 7.58894 3.24552 7.00069 3.07141L7.00039 5.54515C8.13277 5.75229 9 6.64889 9 7.75C9 8.85111 8.13277 9.74771 7.00039 9.95485L7 10C7 10.2761 6.77614 10.5 6.5 10.5C6.22386 10.5 6 10.2761 6 10L6.00011 9.95494C4.90344 9.75454 4.05535 8.90751 4.0026 7.85425L4 7.75H5C5 8.28326 5.4113 8.75475 5.99981 8.92874L6.00011 6.45494C4.86748 6.24797 4 5.35127 4 4.25C4 3.14873 4.86748 2.25203 6.00011 2.04506L6 2C6 1.72386 6.22386 1.5 6.5 1.5ZM7.00062 6.57139L7.00069 8.92859C7.58894 8.75448 8 8.28311 8 7.75C8 7.21687 7.5889 6.74548 7.00062 6.57139ZM5 4.25C5 4.78328 5.41133 5.25479 5.99988 5.42876L5.99981 3.07126C5.4113 3.24525 5 3.71674 5 4.25Z"
              fill="#1E5EFF"
            />
          </svg>
        </IconComponent>
        <!-- <VendorDashboardMinChart /> -->
      </div>
      <div class="bg-white rounded-md flex-1 py-2 px-4 flex items-center">
        <div class="flex flex-col gap-1 j justify-center flex-1">
          <p class="text-2xl font-bold">1,054</p>
          <p class="text-sm font-medium text-lightText">Orders</p>
          <span class="flex items-end text-[#06A561] fill-[#06A561]"
            ><span class="text-sm font-medium text-current">12.45% </span>
            <span
              ><CaretDownIcon
                class="w-[14px] h-[14px] rotate-180 fill-current"
              /> </span
          ></span>
        </div>
        <IconComponent class="bg-[#D7DBEC] p-2">
          <svg
            class=""
            viewBox="0 0 13 12"
            fill="current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.25 9.5C4.66421 9.5 5 9.83579 5 10.25C5 10.6642 4.66421 11 4.25 11C3.83579 11 3.5 10.6642 3.5 10.25C3.5 9.83579 3.83579 9.5 4.25 9.5ZM9.25 9.5C9.66421 9.5 10 9.83579 10 10.25C10 10.6642 9.66421 11 9.25 11C8.83579 11 8.5 10.6642 8.5 10.25C8.5 9.83579 8.83579 9.5 9.25 9.5ZM2.75 1C2.86051 1 2.96724 1.03658 3.05401 1.10304L3.10355 1.14645L4.4575 2.5H10.7447C11.0209 2.5 11.2447 2.72386 11.2447 3C11.2447 3.0671 11.2312 3.13351 11.205 3.19527L9.84946 6.39055C9.69271 6.76003 9.33024 7 8.92888 7H4.5V7.5L4.50336 7.55831C4.53002 7.78785 4.71215 7.96997 4.94169 7.99664L5 8H9.5L9.55831 8.00336C9.80698 8.03225 10 8.24358 10 8.5C10 8.75642 9.80698 8.96775 9.55831 8.99664L9.5 9H5L4.91186 8.99745C4.15362 8.95352 3.54648 8.34638 3.50255 7.58814L3.5 7.5V6.5L3.50336 6.44169C3.50938 6.38993 3.52329 6.34058 3.54387 6.29488C3.51552 6.20204 3.5 6.10283 3.5 6V2.9575L2.5425 2H2C1.72386 2 1.5 1.77614 1.5 1.5C1.5 1.22386 1.72386 1 2 1H2.75ZM9.989 3.5H4.5V6H8.92888L9.989 3.5Z"
              fill="#1E5EFF"
            />
          </svg>
        </IconComponent>
        <!-- <VendorDashboardMinChart /> -->
      </div>
      <div class="bg-white rounded-md flex-1 py-2 px-4 flex">
        <div class="flex flex-col gap-1 j justify-center flex-1">
          <p class="text-2xl font-bold">$10.54</p>
          <p class="text-sm font-medium text-lightText">Total Revenue</p>
          <span class="flex items-end text-[#06A561] fill-[#06A561]"
            ><span class="text-sm font-medium text-current">22.45% </span>
            <span
              ><CaretDownIcon
                class="w-[14px] h-[14px] rotate-180 fill-current"
              /> </span
          ></span>
        </div>
        <VendorDashboardMinChart
          :data="data1"
          :barSize="12"
          :barSpacing="5"
          activeTheme="red"
          theme="blue"
        />
      </div>
      <div class="bg-white rounded-md flex-1 py-2 px-4 flex">
        <div class="flex flex-col gap-1 j justify-center flex-1">
          <p class="text-2xl font-bold">1,654</p>
          <p class="text-sm font-medium text-lightText">New Users</p>
          <span class="flex items-end text-[#06A561] fill-[#06A561]"
            ><span class="text-sm font-medium text-current">22.45% </span>
            <span
              ><CaretDownIcon
                class="w-[14px] h-[14px] rotate-180 fill-current"
              /> </span
          ></span>
        </div>
        <VendorDashboardMinChart
          :data="data1"
          :barSize="12"
          :barSpacing="5"
          activeTheme="red"
          theme="blue"
        />
      </div>
    </FlexComponent>
    <div
      class="h-[440px] gap-6 my-5 py-10 px-6 items-center justify-stretch flex"
    >
      <div class="flex-1 h-[440px] rounded-md bg-white justify-stretch">
        <BetweenComponent class="px-4 pt-4">
          <p class="text font-medium">Orders Over Time</p>
          <div class="flex gap-2">
            <select
              name=""
              id=""
              class="bg-transparent px-2 py-1 text-sm text-darkText font-medium"
            >
              <option value="12 hours" class="text-lightText text-sm">
                Last 12 Hours
              </option>
              <option value="24 hours" class="text-lightText text-sm">
                Last 24 Hours
              </option>
              <option value="1 week" class="text-lightText text-sm">
                Last 1 Week
              </option>
            </select>
          </div>
        </BetweenComponent>
        <StartComponent class="px-4 pt-4 gap-3">
          <ColumnComponent>
            <p class="text-base font-semibold text-darkText">645</p>
            <p class="text-[13px] font-medium text-lightText">
              Orders on May 22
            </p></ColumnComponent
          >
          <ColumnComponent>
            <p class="text-base font-semibold text-darkText">645</p>
            <p class="text-[13px] font-medium text-lightText">
              Orders on May 22
            </p></ColumnComponent
          >
        </StartComponent>
        <Line
          style="padding: 0 16px; background-color: white; height: fit-content"
          id="my-chart-id"
          :options="options2"
          :data="chartData"
        />
      </div>
      <div
        class="h-[440px] flex flex-col rounded-md flex-1 max-w-[280px] bg-white"
      >
        <div class="bg-[gren] flex-1">
          <StartComponent class="px-4 py-4">
            <p class="text-lg font-semibold text-darText">Last 7 Days Sales</p>
          </StartComponent>
          <ColumnStartComponent class="py-4 px-6">
            <p class="text-dakText text-lg font-semibold">1,258</p>
            <p class="text-sm font-medium text-lightText">Items Sold</p>
          </ColumnStartComponent>
          <ColumnStartComponent class="px-6">
            <p class="text-darkTxt text-lg font-semibold">$12,258</p>
            <p class="text-sm font-medium text-lightText">Revenue</p>
          </ColumnStartComponent>
        </div>
        <div class="px-6" >
          <hr>
        </div>
        <div class="bg-[re] flex-1 flex items-center justify-center">
             <Bar  title="test"  id="my-chart-id" :options="chartOptions3" :data="chartData3" />

        </div>
      </div>
    </div>
    <div class="flex items-center px-6 justify-center h-[400px] gap-3">
      <div class="flex-1 rounded-xl h-full bg-white border">
        <VendorDashboardTransactions />
      </div>
      <div class="flex-1 rounded-xl h-full bg-white">
        <VendorTopProductsComponent />
      </div>
    </div>
  </section>
</template>
