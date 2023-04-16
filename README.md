# Chartjs for React

## A chart demo with react v18

## Dev

```zsh
pnpm install

pnpm dev
```

---

## Deps

- react^18.2.28
- chart.js^4.2.1
- react-chartjs-2^5.2.0
- chartjs-plugin-zoom^2.0.1

---

## Develop

Google 大部分的 example 都是在 chart.js^2, chartjs-plugin-zoom^0.7, react-chartjs-2^ 之前的版本  
而在最新版本裡所使用的寫法已不同於舊版本

新舊版本差異由為明顯的是下列這段:

```jsx
import { Chart as ChartJS, registerables } from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(...registerables, zoomPlugin);
```

在 react-chartjs-2 支援 tree shaking 之後都需要額外註冊使用，如果不確定使用的圖型類別需要哪些相關的組件  
可以直接使用 `registerables`

如果需要使用 chart.js 生態圈裡額外提供的 plugin，則需要一併引入 register 中  
並在 Chart component 的 options 中加入相關設定，唯一需要注意的是 options 的格式結構也做了一定程度的改動，舊有的寫法可能會造成 crash 或是讀取不到設置
