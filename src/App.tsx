
import './App.css'
// import {useEffect} from 'react'
// import axios from 'axios'
// import {useDispatch} from 'react-redux'
// import { getProducts } from './store/reducer'
import { List } from './components/List'
import { NavLink, Route, Routes } from 'react-router-dom'
import  LikePage  from './components/LikePage'
function App() {
  
// const dispatch = useDispatch()
//   useEffect(() =>  {
//    axios.get(`https://restcountries.com/v3.1/all`).then(res => {
//      dispatch(getProducts(res.data))
//    } )
//   }, [])
  
  return (
    <>
    <header className=' header'>
      <div className='bg2'>
      <NavLink className='' to={"/"}><p className=' ml-[400px] mt-[20px] absolute font-bold text-xl'>Products</p></NavLink>
      <NavLink className='' to={"/like"}><p className=' absolute mt-[20px] ml-[800px]  font-bold text-xl'>Like Products</p></NavLink>
      </div>
      <div className="blob2"></div>
    
    </header>
    <Routes>
      <Route path='/' element={<List/>}/>
      <Route path='/like' element={<LikePage/>}/>
    </Routes>
    {/* <List/> */}
    </>
    
  )// dispatch qilib likega bervordizmi ?ha
}

export default App
