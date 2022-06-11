import { img3 } from "./images/img3.jpg";
import { img4 } from "./images/img4.jpg";

const data=[
    {
        img:img3
    },
    {
        img:img4
    },

]

data.map(({img}) => {
    return(
        <div>
            <img src = {img}></img>
        </div>
    )
})

export default tut