import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";



type LineChartProp = {
    chartDataProp : any,
    titleChart : string
}

const LineChart : React.FC<LineChartProp> = ({chartDataProp, titleChart}) => {

    const [dataForChart, setData] = useState([["Date", "Prices"]])

    useEffect(() => {
        let dataTemp = [["Date", "Prices"]]
        if (chartDataProp.prices) {
            chartDataProp.prices.map((item:any) => {
                dataTemp.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`, item[1]])
            })
            setData(dataTemp)
            
        }

    }, [chartDataProp])

    return (
        <Chart 
        chartType="LineChart"
        data={dataForChart}
        height="100%"
         />    
    )   
}
export default LineChart