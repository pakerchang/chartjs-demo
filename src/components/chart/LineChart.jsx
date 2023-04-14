import { Chart as ChartJS, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { Line } from "react-chartjs-2";
import { resData } from "@/utils/data";

ChartJS.register(...registerables, zoomPlugin);

const data = {
  labels: resData.map((e) => e.date),
  datasets: [
    {
      label: "First dataset",
      data: resData.map((e) => e.value),
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const options = {
  scales: {
    x: {
      stacked: true,
    },
  },
  plugins: {
    zoom: {
      zoom: {
        wheel: {
          enabled: true,
        },
        mode: "x",
      },
      pan: {
        enabled: true,
        mode: "x",
      },
    },
  },
};

function LineChart() {
  return <Line data={data} options={options} />;
}

export default LineChart;
