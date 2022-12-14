import { Grid, List } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import SongItem from "../Songitem/SongItem"
import style from "./ListSong.module.css"
function ListSong({
  tittle,
  IsHaveBtnALL,
  IsWrap,
  ColSpacing,
  RowSpacing,
  ListArr
}) {
  if (ListArr.length >= 6) ListArr = ListArr.slice(0, 6)
  // console.log(ListArr, " 14");
  const [properties, SetProperties] = useState({
    data: [],
    page: 0
  })

  return (
    <div className={`${style.ListSongContainer}`}>
      <div className={`${style.ListSongHeading}`}>
        <h3>{tittle}</h3>
        {IsHaveBtnALL ? (
          <Link style={{ color: "#fff", textDecoration: "none" }} to="/all">
            Xem tất cả
          </Link>
        ) : null}
      </div>
      <Grid
        className={(IsWrap ? `${style.WrapListSong}` : null) + ""}
        container
        columnSpacing={ColSpacing}
        rowSpacing={RowSpacing}
      >
        {ListArr
          ? ListArr.map(function (item, idx) {
              return (
                <SongItem
                  key={item.encodeId}
                  IdSongItem={item.encodeId}
                  tittle={item.title}
                  Thumbnail={item.thumbnail}
                />
              )
            })
          : null}
      </Grid>
    </div>
  )
}

export default ListSong
