import { useEffect, useState } from 'react'
import { getLikes } from '../../api/cats/api'
import { getCats} from '../../api/pinterest/api'
import {CatRow} from '../../components/index'
import { imageSource , likeSource} from '../../types/index'
import { createLike, deleteLike } from '../../api/cats/api';


export const BasePage = () => {
  const [imgList, setImgList] = useState<imageSource[][]>([])
  const [likes, setLikes] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getNewGroup = async() =>{
    console.log('try to load new group')
    setIsLoading(true)
    const {data} = await getCats(5);
    setIsLoading(false)
    setImgList([...imgList, data.slice(0,5), data.slice(5)]);
  }

  const getLikedList = async()=>{
    setIsLoading(true);
    const {data} = await getLikes();
    let tempLikes : string[] = [];
    data.forEach((cur:likeSource)=>{tempLikes.push(cur.photoId)})
    setLikes(tempLikes)
  }

  useEffect(()=>{
    getLikedList();
  },[])

  useEffect(()=>{
    if(window.innerHeight > document.body.offsetHeight && !isLoading){
      getNewGroup();
    }
  },[isLoading])

  window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !isLoading) {
        getNewGroup();
    }
  };

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
        imgList && imgList.map(group=>
          <CatRow likes={likes}handleLikeClick={handleLikeClick} key={group[0]?.id} group={group}/>
        )
      }
      {
        isLoading && <div>... загружаем еще котиков ...</div>
      }
    </>
  )
}

export default BasePage;
