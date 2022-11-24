import {useQuery} from "react-query";
import ApexChart from "react-apexcharts"
import {useRecoilValue} from "recoil";
import {fetchCoinHistory} from "../../../../pages/api/coin-api";
import {useColorMode} from "@chakra-ui/react";
import {FC} from "react";
interface IHistorical {
    time_open: string
    time_close: string
    open: number
    high: number
    low: number
    close: number
    volume: number
    market_cap: number
}

interface ChartProps {
    coinId: string;
}

const CoinChart: FC<ChartProps> = ({coinId}) => {
    // const isDark = useRecoilValue(isDarkAtom)
    const { colorMode, toggleColorMode } = useColorMode();

    const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId),
        {
            refetchInterval: 10000,
        })
    return (
        <div>
            {
                isLoading ? "Loading chart..."
                    : <ApexChart
                        type="line"
                        series={[
                            {
                                name: "price",
                                data: data?.map((price) => price.close) as number[],
                            },
                        ]}
                        options={{
                            chart: {
                                height: 300,
                                width: 500,
                                toolbar: {
                                    show: false
                                },
                                background:"transparent"
                            },
                            theme: {
                                mode:colorMode === "dark" ? "dark" : "light"
                            },
                            grid: {show: false},
                            stroke: {
                                curve: "smooth",
                                width: 4
                            },
                            yaxis: {
                                show: false
                            },
                            xaxis: {
                                labels: {show: false},
                                type: "datetime",
                                categories: data?.map((price) => price.time_close),
                            },
                            fill: {
                                type: "gradient",
                                gradient: {gradientToColors: ["#0be881"], stops: [0, 100]}
                            },
                            colors: ["#0fbcf9"],
                            tooltip: {
                                y: {
                                    formatter: (val: number) => {
                                        return `$ ${val.toFixed(2)}`
                                    }
                                },
                            }
                        }}
                    />
            }
        </div>
    );
}

export default CoinChart;