import { useEffect, useState } from 'react'
import { getLikes } from '../../api/cats/api'
import { getPhoto } from '../../api/pinterest/api'
import {CatRow} from '../../components/index'
import { imageSource , likeSource} from '../../types/index'
import { createLike, deleteLike } from '../../api/cats/api';


export const LikesPage = ()=> {
  const [likes, setLikes] = useState<string[]>([])
  const [likedList, setLikedList] = useState<imageSource[][]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getLikedList = async () =>{
    setIsLoading(true);
    const {data} = await getLikes();
    let tempLikes : string[] = [];
    data.forEach((cur:likeSource)=>{tempLikes.push(cur.photoId)})
    setLikes(tempLikes)
    let tempArray : imageSource[] = [];
    
    for(let i = 0; i<data.length;i++){
      const {data: photo} = await getPhoto(data[i].photoId);
      tempArray.push(photo)
    }

    let tempGroups: imageSource[][]=[]

    for(let i = 0; i< Math.ceil(tempArray.length/5);i++){
      tempGroups[i]=tempArray.slice((i*5),(i*5)+5);
    } 
    setLikedList(tempGroups)
    setIsLoading(false)
  }

  useEffect(()=>{
    getLikedList();
  },[])

  const handleLikeClick=(isLike: boolean, id: string)=>{
    if(isLike){
      createLike(id)
      setLikes([...likes, id])
    }
    else{
      deleteLike(id)
      let tempArray = Array.from(likes);
      tempArray.splice(likes.indexOf(id),1);
      setLikes(tempArray)
    }
  }

  return (
    <> 
      { 
        likedList && likes && likedList.map(group=>
          <CatRow likes={likes} handleLikeClick={handleLikeClick} key={group[0]?.id} group={group}/>
        )
      }
      {
        isLoading && <div>... загружаем ваших любимых котиков ...</div>
      }
    </>
  )
}

