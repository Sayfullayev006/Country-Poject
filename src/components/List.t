import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getProducts } from '../store/reducer';

export const List = () => {
  interface ProductType {
    flags: { png: string };
    name: { common: string };
    capital: string;
    population: number;
    region: string;
  }

  interface ListType {
    products: Array<ProductType>;
  }

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Array<ProductType>>([]); // Declare the data variable

  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://restcountries.com/v3.1/all`)
     .then((res) => {
        dispatch(getProducts(res.data));
        setData(res.data); // Set the data variable
        setIsLoading(false);
      })
     .catch((error) => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      });
  }, []);

 const data = useSelector((state:ListType) => state.products);
    console.log(data)
  return (
    <div>
      {isLoading? (
        <div className="loader">
          <div data-glitch="Loading..." className="glitch">Loading...</div>
        </div>
      ) : (
        <div className='flex justify-between flex-wrap gap-10 p-5 '>
        {data.length > 0 ? 
             data.slice(0,12).map((item: { flags: { png: string }, name: { common: string }, capital: string, population: number, region: string }) => (
             <div className=''>
              <div className='card '>
              <div className="bg ">
              <img className='w-[350px] h-[200px]'src={item.flags.png} alt="flag"/>
              <p className='absolute text-[24px] mt-[15px] font-semibold'>Cauntry:</p>
              <h1 className='ml-[105px] text-[18px] mt-[22px] '> {item.name.common}</h1>
              <p className='absolute  text-[24px] font-semibold'>Capital:</p>
              <h1 className='ml-[95px] text-[18px] mt-[7px]'>{item.capital}</h1>
              <p className="absolute text-[24px] font-semibold">Population:</p>
              <h1 className='ml-[135px] text-[18px] mt-[7px]'> {item.population}</h1>
              <p className='absolute text-[24px] font-semibold'>Region:</p>
              <h1 className='ml-[95px] text-[18px] mt-[7px]'> {item.region}</h1>
              {/* <button onClick={() => addLikeProducts(item)} className='bg-blue-500 text-white w-[120px]  rounded-md ml-[10px] h-[40px]  mt-[20px] hover:bg-blue-300'>Like</button> */}

              </div>
              <div className="blob"></div> 

          </div>
            </div>
            
        ))
       
    : <div className="loader">
    <div data-glitch="Loading..." className="glitch">Loading...</div>
 </div>}
        </div>
      )}
    </div>
  );
};