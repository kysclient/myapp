import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import styled from "styled-components";
import {fetchCoinInfo, fetchCoinTickers} from "../../api/coin-api";
import {Default} from "../../../src/components/layouts/Default";
import Link from "next/link";
import CoinChart from "../../../src/components/templates/chart/Chart";


export interface RouteParams {
    coinId: string;
}

export interface RouteState {
    name: string;
}

export const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`
export const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  font-size: 48px;
`

export const Loader = styled.span`
  text-align: center;
  display: block;
`

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.overViewBgColor};
  padding: 10px 20px;
  border-radius: 10px;

`;
export const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }

`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;

`;

const Tab = styled.span<{ isActive: boolean }>`

  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${props => props.theme.overViewBgColor};
  padding: 7px 0px;
  border-radius: 10px;

  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  &:hover {
    cursor: pointer;
  }
  a {
    display: block;
  }
`;

export const BackBtn = styled.span`
  position: absolute;
  left: 0;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }

`

interface InfoData {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
    logo: string,
    description: string,
    message: string,
    open_source: boolean,
    started_at: string,
    development_status: string,
    hardware_wallet: boolean,
    proof_type: string,
    org_structure: string,
    hash_algorithm: string,
    first_data_at: string,
    last_data_at: string
}

interface PriceData {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    circulating_supply: number,
    total_supply: number,
    max_supply: number,
    beta_value: number,
    first_data_at: string,
    last_updated: string,
    quotes: {
        USD: {
            ath_date: string
            ath_price: number
            market_cap: number
            market_cap_change_24h: number
            percent_change_1h: number
            percent_change_1y: number
            percent_change_6h: number
            percent_change_7d: number
            percent_change_12h: number
            percent_change_15m: number
            percent_change_24h: number
            percent_change_30d: number
            percent_change_30m: number
            percent_from_price_ath: number
            price: number
            volume_24h: number
            volume_24h_change_24h: number
        }
    }
}


const Coin = () => {

    const router = useRouter();

    useEffect(() => {
        console.log('router : ', router)
    }, [router])
    const {coinId, name} = router.query;
    const priceMatch = router.pathname === "/projects/coin/[coinId]/price"
    const chartMatch = router.pathname === "/projects/coin/[coinId]/chart"

    const [tab, setTab] = useState("CHART");

    const {isLoading: infoLoading, data: infoData} = useQuery<InfoData>(
        ["info", coinId], () => fetchCoinInfo(coinId)
    )
    const {isLoading: tickersLoading, data: tickersData} = useQuery<PriceData>(
        ["tickers", coinId], () => fetchCoinTickers(coinId),
        {
            refetchInterval: 5000,
        }
    )
    const tabOnChange = (e: React.MouseEvent<HTMLSpanElement>, price: string) => {
        setTab(prev => {
            return price;
        })
    }


    const loading = infoLoading || tickersLoading;


    return (
        <Default pageName={"Coin-Info"}>
            <Container>

                <Header>
                    <Link href={"/projects/coin"}>
                        <BackBtn>&larr;</BackBtn>
                    </Link>

                    <Title>
                        {name ? name : loading ? "Loading..." : infoData?.name}
                    </Title>
                </Header>
                {loading ? (
                    <Loader>Loading...</Loader>
                ) : (
                    <>
                        <Overview>
                            <OverviewItem>
                                <span>Rank:</span>
                                <span>{infoData?.rank}</span>
                            </OverviewItem>
                            <OverviewItem>
                                <span>Symbol:</span>
                                <span>${infoData?.symbol}</span>
                            </OverviewItem>
                            <OverviewItem>
                                <span>Price:</span>
                                <span>{`$${tickersData?.quotes.USD.price}`}</span>
                            </OverviewItem>
                        </Overview>
                        <Description>{infoData?.description}</Description>
                        <Overview>
                            <OverviewItem>
                                <span>Total Supply:</span>
                                <span>{tickersData?.total_supply}</span>
                            </OverviewItem>
                            <OverviewItem>
                                <span>Max Supply:</span>
                                <span>{tickersData?.max_supply}</span>
                            </OverviewItem>
                        </Overview>

                        <Tabs>
                            <Tab isActive={tab === "Chart"} onClick={(e) => {tabOnChange(e, 'Chart')}}>
                                Chart
                            </Tab>
                            <Tab isActive={tab === "Price"} onClick={(e) => {tabOnChange(e, "Price")}}>
                                Price
                            </Tab>
                        </Tabs>

                        {
                            tab === "Chart" &&
                            <CoinChart
                                coinId={coinId? coinId : ""}
                                />
                        }


                    </>
                )}
            </Container>
        </Default>
    )
}

export default Coin;