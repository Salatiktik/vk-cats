import classes from './catimage.module.css'
import { imageSource } from '../../types'


type CatImageProps = {
  photo: imageSource,
  isLiked: boolean,
  handleLikeClick: (isLike: boolean, id: string) => void
}

export const CatImage = ({ photo, isLiked, handleLikeClick }: CatImageProps) => {
  return (
    <div className={classes.imageBox}>
        <div className={classes.fade}></div>
        <img src={photo?.url} className={classes.image}/>
        {
          isLiked?
            <div onClick={()=>handleLikeClick(false, photo.id)} className={classes.heartLike}></div>
          :
            <div onClick={()=>handleLikeClick(true, photo.id)} className={classes.heart}></div>
        }
    </div>
  )
}
