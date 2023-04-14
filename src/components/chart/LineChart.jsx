import { useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { Line } from "react-chartjs-2";
import { resData } from "@/utils/data";

ChartJS.register(...registerables, zoomPlugin);

function LineChart() {
  const [counts, setCounts] = useState(50);

  const data = {
    labels: resData.map((e) => e.date),
    datasets: [
      {
        label: "First dataset",
        data: resData.map((e) => e.value),
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: false,
        // min: 0,
        // max: counts,
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

  const addData = () => counts < 150 && setCounts(counts + 20);
  const minsData = () => counts > 10 && setCounts(counts - 20);
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Line data={data} options={options} />
      <div style={{ paddingTop: 15, alignSelf: "end" }}>
        <button onClick={addData} disabled={counts > 150}>
          +
        </button>
        <button onClick={minsData} disabled={counts < 10}>
          -
        </button>
      </div>
    </div>
  );
}

export default LineChart;
