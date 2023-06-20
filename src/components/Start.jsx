import Footer from "./Footer"
import Introduction from "./Introduction"
import Introduction2 from "./Introduction2"
import LinkCuriosities from "./LinkCuriosities"
import LinkNasa from "./LinkNasa"
import LinkSites from "./LinkSites"
import LinkTest from "./LinkTest"

const Start = () => {
    return(
        <div>
            <Introduction/>
            <Introduction2/>
            <LinkCuriosities/>
            <LinkSites/>
            <LinkNasa/>
            <LinkTest/>
            <Footer/>
        </div>
    )
}

export default Start