import { createStackNavigator, createAppContainer } from "react-navigation"
import HomePage from "./screens/Home"
import Tutorial1 from "./screens/Tutorial/Tutorial1"
import Tutorial2 from "./screens/Tutorial/Tutorial2"
import BookingScreen from "./screens/Booking"
import ResultsPage from "./screens/ResultsPage"

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
        }
    },
    {
        initialRouteName: "Home",
        headerLayoutPreset: "center"
    }
)

export default createAppContainer(AppNavigator)
