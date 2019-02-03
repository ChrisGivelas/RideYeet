import { createStackNavigator, createAppContainer } from "react-navigation"
import HomePage from "./screens/HomePage"
import Tutorial1 from "./screens/Tutorial1"
import Tutorial2 from "./screens/Tutorial2"
import BookingScreen from "./screens/BookingScreen"
import ResultsPage from "./screens/ResultsPage"
import ViaRail from "./screens/ViaRail"
import MegaBusPayment from './screen/MegaBusPayment'

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomePage
        },
        Tutorial1: {
            screen: Tutorial1
        },
        Tutorial2: {
            screen: Tutorial2
        },
        Booking: {
            screen: BookingScreen
        },
        Results: {
            screen: ResultsPage
        },
        ViaRail: {
            screen: ViaRail
        },
        Payment: {
            screen: MegaBusPayment
        }
    },
    {
        initialRouteName: "Home"
    }
)

export default createAppContainer(AppNavigator)
