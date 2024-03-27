import { Suspense } from "react"
import loader from "./assets/loader.gif"  
import PropTypes from "prop-types"
import "./assets/css/loader.css"

const LazyLoader = ({component:Component, ...rest}) => {
  return (
    <div className="loader">
        <Suspense fallback = {<img src={loader} alt="Loader"></img>}>
        <Component {...rest}/>
        </Suspense>
      
    </div>
  )
}
LazyLoader.propTypes={
    component: PropTypes.element.isRequired
}

export default LazyLoader
