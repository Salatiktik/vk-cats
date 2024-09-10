import {} from 'react';
import { CatImage } from '../index';
import classes from './catrow.module.css'
import { imageSource } from '../../types'
type CatRowProps = {
  group: imageSource[],
  likes: string[],
  handleLikeClick: (isLike: boolean, id: string) => void
}

export const CatRow = ({ group, likes, handleLikeClick }: CatRowProps) => {
  return (
    <div className={classes.row}>
        {
          group && group.map(photo=>
            <CatImage isLiked={likes.includes(photo.id)} handleLikeClick={handleLikeClick} key={photo.id} photo={photo}/>  
          )
        }
    </div>
  )
}
