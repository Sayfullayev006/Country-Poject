
import React from 'react';
import { useAppSelector } from '../hook/hook';
// import LikeCountryCard from '../store/LikeReducer';
import "./List.css";
// import LikedCatd from '../Cards/LikedCard';
import LikedCard from '../Cards/LikedCard';
// import {  } from '../Reducers/Type'; 



const Liked: React.FC = () => {
  const likedCountries = useAppSelector((state) => state.LikeProduct.likedCountries);

  return (
    <div className="flex flex-wrap justify-center gap-[60px]">
    {likedCountries.length > 0 ? (
      likedCountries.map((country) => (
        <LikedCard key={country.name.common} country={country} />
      ))
    ) : (
      <div className='mt-[50px] text-3xl'>No liked countries yet.</div>
    )}
  </div>
  );
};

export default Liked;


// shumi ?ha chiqqan shkeilli





















































































































// // import React from 'react'

// import { useEffect, useState } from "react"
// import { addLike } from "../Reducers/LikeReducer"
// import { useDispatch, useSelector } from "react-redux"
// import axios from "axios"


// interface LikeState {
//   // length: number
//   // slice(arg0: number, arg1: number): unknown
//   likeProductSlice: {
//     likeProduct: Array<any>
//   // likeProductList: any

//   }
//  }


//  export const LikePage = () => {
  
//  const dispatch = useDispatch()
//   const likeProduct = useSelector((state: LikeState) =>  console.log(state))

//   const [isLoading, setIsLoading] = useState(true); 

//     useEffect(() => {
//         axios.get(`https://restcountries.com/v3.1/all`).then(res => {
//           dispatch(addLike(res.data))
//           setIsLoading(false)
//         })
//       }, [])
//   return (
//     // <div>{likeProduct.map(item:any) => (p
//     //   <div>{item.name.common}</div>
//     // )}</div>
//     <p>dw</p>
//   )
// }

