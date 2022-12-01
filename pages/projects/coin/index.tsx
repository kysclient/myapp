import styled from "styled-components";
import {fetchCoins} from "../../api/coin-api";
import Link from "next/link";
import {useQuery} from "react-query";
import {Default} from "../../../src/components/layouts/Default";
import {NextPage} from "next";
import {RouteParams} from "./[coinId]";

export const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
`
export const Header = styled.header`
  position: relative;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CoinList = styled.ul`
    list-style: none;
`
const Coin = styled.li`
  background-color: ${(props) => props.theme.bgColor};
  color: ${props => props.theme.textColor};
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid white;

  a {
    padding: 10px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }

  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`
export const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  font-size: 48px;
`

export const Loader = styled.span`
  text-align: center;
  display: block;
`

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;

`

interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string
}

interface ICoinsProps {
}

const  Coins: NextPage = (props) => {
    const {isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins)

    
    return (
        <Default pageName={"Coins"}>
            <Container>
                <title>코인</title>
                <Header>
                    {/*<Link to="/">*/}
                    {/*    <BackBtn>&larr;</BackBtn>*/}
                    {/*</Link>*/}

                    <Title>코인</Title>
                </Header>

                {
                    isLoading ? <Loader>Loading...</Loader>
                        :
                        <>
                            <CoinList>
                                {
                                    data?.slice(0, 100).map((coin, idx) => (
                                        <Coin key={coin.id}>
                                            <Link
                                                href={{
                                                    pathname: `/projects/coin/${coin.id}`,
                                                    query: {name: coin.name} ,
                                                }}>
                                                <a>
                                                    <Img
                                                        src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                                                    {coin.name} &rarr;
                                                </a>
                                            </Link>
                                        </Coin>
                                    ))
                                }
                            </CoinList>


                        </>

                }
            </Container>
        </Default>

    )
}

export default Coins