// import { Nav } from "react-bootstrap"
import Hreo from "../Home/Hero/Hero"
// import Nav from "../Home/Nav/Nav"
import Under from "../Home/Under/Under"
import Essential from "../Home/Essential/Essential"
import POSSIBILITIES from "../Home/POSSIBILITIES/POSSIBILITIES"
import INNOVATIVE from "../Home/INNOVATIVE/INNOVATIVE"
import ARRIVALS from "../Home/ARRIVALS/ARRIVALS"
import CUSTOMERS from "../Home/CUSTOMERS/CUSTOMERS"
import Navbarse from "../../components/Navbarse/Navbarse"
// import { Nav } from "react-bootstrap"

function Home() {
  return (
    <>
    <Navbarse/>
    <Hreo/>
    <Under/>
    < Essential/>
    <POSSIBILITIES/>
    <INNOVATIVE/>
    <ARRIVALS/>
    <CUSTOMERS />
    </>
  )
}

export default Home