import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { SetActivePlay } from "../../../Redux/Actions/Actions"
import { IconSolid } from "../../../util/FontAwesome/FontAwesome"
import { SelectItemToPlay } from "../../../util/Functions/SetStatusEleAudio"
import style from "./PlayTittleComp.module.css"

function PlayTittleComp({ tittle }) {
  const GlobalState = useSelector(state => state)
  const dispatch = useDispatch()
  const SetStatusPlaying = function () {
    SelectItemToPlay(GlobalState.EleAudio, GlobalState.isPlaying)
    dispatch(SetActivePlay(!GlobalState.isPlaying))
  }
  console.log("PlayTittle Comp ", GlobalState.isPlaying)
  return (
    <div className={`${style.PlayTitleComp}`}>
      <div className={`${style.PlayBtn}`}>
        {GlobalState.isPlaying ? (
          <FontAwesomeIcon
            onClick={() => {
              SetStatusPlaying()
              // dispatch(SetActivePlay(!GlobalState.isPlaying));
            }}
            icon={IconSolid.faPause}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              SetStatusPlaying()
            }}
            icon={IconSolid.faPlay}
          />
        )}
      </div>
      <Typography component={"h3"} fontWeight={600} fontSize={"1.1rem"}>
        {tittle ? tittle : "Default Tittle"}
      </Typography>
    </div>
  )
}

export default PlayTittleComp
