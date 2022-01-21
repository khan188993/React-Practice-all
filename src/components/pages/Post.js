import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Post = () => {
    // console.log(useParams());
    const {category,brand,id} = useParams();
    const [searchParam,setSearchParam] = useSearchParams()
    // http://localhost:3000/post/leptop-brand/32?price=200
    console.log(searchParam.get('price'));
    return (
        <>
         <h1>Post Page  {category && `form ${category}`}</h1>   
         <h1>Post Brand Page  {brand && `form ${brand}, ${id}`}</h1>   
         {/* category or brand 2tar ekta use korte parbo  */}
        </>
    )
}

export default Post
