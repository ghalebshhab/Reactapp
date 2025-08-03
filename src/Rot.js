import { ToggleButtonGroup,ToggleButton } from "@mui/material"
import { Link ,Routes,Route } from "react-router"
export default function Rot(){
    return(
        <>
        <ToggleButtonGroup
      exclusive
      aria-label="text alignment"
    >
     <Link to="/All"><ToggleButton value="left" aria-label="left aligned">
    All
      </ToggleButton></Link>
     <Link to="/Done"> <ToggleButton value="center" aria-label="centered">
  Done
      </ToggleButton></Link>
     <Link to="/Still"> <ToggleButton value="right" aria-label="right aligned">
Still
      </ToggleButton></Link>
    </ToggleButtonGroup>
   </>
    )
}