<script setup>
import BetweenComponent from "../../../components/BetweenComponent.vue";
import ColumnStartComponent from "../../../components/ColumnStartComponent.vue";
import ShoppingBagOpenDuoIcon from "../../../components/icons/duo-tone/ShoppingBagOpenDuoIcon.vue";
import CaretUpFilledIcon from "../../../components/icons/filled-icons/CaretUpFilledIcon.vue";
import StartComponent from "../../../components/StartComponent.vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import EvOrdersTable from "../../../components/tables/EvOrdersTable.vue";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const chartData = {
  labels: ["January", "February", "March","April","May","June","July","August","September","October","November","December"],
  datasets: [{ data: [40, 20, 12,33,56,98,99,12,34,19,99,34],backgroundColor:"#0a7274",label:["label"],text:"text",barThickness:29 }],
};
const chartOptions = {
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
</script>

<template>
  <div class="dark:bg-darkPrimary bg-[#f9f7f7] overflow-scroll">
    <p class="dark:text-white text-darkText px-8 pt-4 font-semibold text-[25px]">Dashboard Overview</p>
    <div class="flex flex-wrap items-center justify-center px-8 gap-3 mt-4">
      <div class="bg-white shadow-md dark:bg-darkSecondary p-3 rounded-md flex-1 min-h-28 basis-1/3">
        <ColumnStartComponent>
          <BetweenComponent class="mb-2 dark:fill-white fill-darkText">
            <p class="text-medium dark:text-white text-darkText font-medium">Total Revenue</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="current"
              viewBox="0 0 256 256"
            >
              <path
                d="M192,168a40,40,0,0,1-40,40H128V128h24A40,40,0,0,1,192,168ZM112,48a40,40,0,0,0,0,80h16V48Z"
                opacity="0.2"
              ></path>
              <path
                d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"
              ></path>
            </svg>
          </BetweenComponent>
          <p class="text-[25px] dark:text-white text-darkText font-semibold">$35,00.90</p>
          <StartComponent>
            <CaretUpFilledIcon class="w-4 h-4 fill-[green]" />
            <span class="text-xs font-semibold text-[green]"
              >0.3 % <span class="dark:text-white text-darkText">Last Month</span></span
            >
          </StartComponent>
        </ColumnStartComponent>
      </div>
      <div class="bg-white shadow-md dark:bg-darkSecondary p-3 rounded-md flex-1 min-h-28 basis-1/3">
        <ColumnStartComponent>
          <BetweenComponent class="mb-2 dark:fill-white fill-darkText">
            <p class="text-medium dark:text-white text-darkText font-medium">Customers</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="current"
              viewBox="0 0 256 256"
            >
              <path
                d="M168,144a40,40,0,1,1-40-40A40,40,0,0,1,168,144ZM64,56A32,32,0,1,0,96,88,32,32,0,0,0,64,56Zm128,0a32,32,0,1,0,32,32A32,32,0,0,0,192,56Z"
                opacity="0.2"
              ></path>
              <path
                d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1,0-16,24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.85,8,57,57,0,0,0-98.15,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"
              ></path>
            </svg>
          </BetweenComponent>
          <p class="text-[25px] dark:text-white text-darkText font-semibold">352</p>
          <StartComponent>
            <CaretUpFilledIcon class="w-4 h-4 fill-[green]" />
            <span class="text-xs font-semibold text-[green]"
              >0.3 % <span class="dark:text-white text-darkText">Last Month</span></span
            >
          </StartComponent>
        </ColumnStartComponent>
      </div>
      <div class="bg-white shadow-md dark:bg-darkSecondary p-3 rounded-md flex-1 min-h-28 basis-1/3">
        <ColumnStartComponent>
          <BetweenComponent class="mb-2 dark:fill-white fill-darkText">
            <p class="text-medium dark:text-white text-darkText font-medium">Sales</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="current"
              viewBox="0 0 256 256"
            >
              <path
                d="M224,80V192a8,8,0,0,1-8,8H56a16,16,0,0,1-16-16V56A16,16,0,0,0,56,72H216A8,8,0,0,1,224,80Z"
                opacity="0.2"
              ></path>
              <path
                d="M216,64H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,56V184a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,128H56a8,8,0,0,1-8-8V78.63A23.84,23.84,0,0,0,56,80H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,132Z"
              ></path>
            </svg>
          </BetweenComponent>
          <p class="text-[25px] dark:text-white text-darkText font-semibold">35</p>
          <StartComponent>
            <CaretUpFilledIcon class="w-4 h-4 fill-[green]" />
            <span class="text-xs font-semibold text-[green]"
              >0.3 % <span class="dark:text-white text-darkText">Last Month</span></span
            >
          </StartComponent>
        </ColumnStartComponent>
      </div>
      <div class="bg-white shadow-md dark:bg-darkSecondary p-3 rounded-md flex-1 min-h-28 basis-1/3">
        <ColumnStartComponent>
          <BetweenComponent class="mb-2 dark:fill-white fill-darkText">
            <p class="text-medium dark:text-white text-darkText font-medium">Orders</p>
            <ShoppingBagOpenDuoIcon class="w-7 h-7 " />
          </BetweenComponent>
          <p class="text-[25px] dark:text-white text-darkText font-semibold">$35,00.90</p>
          <StartComponent>
            <CaretUpFilledIcon class="w-4 h-4 fill-[green]" />
            <span class="text-xs font-semibold text-[green]"
              >0.3 % <span class="dark:text-white text-darkText">Last Month</span></span
            >
          </StartComponent>
        </ColumnStartComponent>
      </div>
      <!-- <div class="flex-1 basis-1/3">
        <BetweenComponent class="dark:bg-[#001e3c] border border-lightText rounded-t-xl p-6">
          <IconComponent
            class="bg-lightPrimary w-14 h-14 fill-primary dark:bg-[#0a2744]"
          >
            <OrdersDuoIcon class="w-9 h-9" />
          </IconComponent>
          <ColumnComponent class="text-right">
            <p class="normalText">Total Orders</p>
            <p class="text-large dark:text-white text-darkText font-semibold tracking-widest">
              13,789
            </p>
          </ColumnComponent>
        </BetweenComponent>
        <StartComponent class="bg- bg-[#0a2744] rounded-b-xl px-6 py-2">
          <CaretUpFilledIcon class="w-4 h-4 fill-[green]" />
          <span class="text-sm font-semibold text-[green]"
            >0.3 % <span class="dark:text-white text-darkText">Last Month</span></span
          >
        </StartComponent>
      </div> -->
      <!-- <BetweenComponent class="p-4 bg-[#001e3c] duration-500 scale-100 hover:scale-95 hover:bg-[#0a2744] border border-lightText rounded-md cursor-pointer dark:bg-[] basis-1/3 flex-1 flex" >
                <IconComponent>
                    <OrdersDuoIcon class="w-10 h-10 fill-[rgb(251,140,0,1)]"/>
                </IconComponent>
              <ColumnComponent class="text-right" >
            <p class="mediumText" >Orders</p>
            <p class="dark:text-white text-darkText font-bold text-large" >$300,00</p>
        </ColumnComponent>
            </BetweenComponent> -->
    </div>
    <div class="py-4 px-8 my-4 " >
      <div class="px- bg-white dark:bg-darkSecondary" >
        <p class="text-[26px] font-bold pl-8 pt-4 dark:text-white text-darkText font-Heebo" >Sales Overview</p> 
        <Bar  title="test"  id="my-chart-id" :options="chartOptions" :data="chartData" >
          Chart could`nt be loaded
        </Bar>
      </div>
    </div>
    <div class="py-4 px-8 m-bg-white dark:bg-darkSecondary" >
       <EvOrdersTable/>
    </div>
  </div>
</template>
