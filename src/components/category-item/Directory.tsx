import React from 'react'
import { BackgoundImage,Body,DirectoryItemCont } from './DirectoryStyles/directory';
import { useNavigate } from 'react-router-dom';
interface CategoryItem {
    id: number;
    title: string;
    imageUrl:string;
    route:string
}
function Directory({id,imageUrl,title,route}:CategoryItem) {
  const navigate = useNavigate()
  return (
    <DirectoryItemCont key={id} onClick={() => navigate(`${route}`)}>
    <BackgoundImage  imageUrl={imageUrl}/>
        <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
        </Body>
        </DirectoryItemCont>
      
  )
}

export default Directory