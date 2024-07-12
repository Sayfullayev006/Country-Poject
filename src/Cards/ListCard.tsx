import React from 'react';
import { Country } from '../store/reducer';
import { useAppDispatch } from '../hook/hook';
import { add_like } from '../store/LikeReducer';

interface CountryCardProps {
  country: Country;
}

const ListCard: React.FC<CountryCardProps> = ({ country }) => {
  const dispatch = useAppDispatch();

  return (
    <div key={country.name.common} className='card'>
    <div className='bg'>
      <img className='w-[350px] h-[200px]' src={country.flags.png} alt="flag" />
      <p className='absolute text-[24px] mt-[15px] font-semibold'>Country:</p>
      <h1 className='ml-[105px] text-[18px] mt-[22px]'>{country.name.common}</h1>
      <p className='absolute text-[24px] font-semibold'>Capital:</p>
      <h1 className='ml-[95px] text-[18px] mt-[7px]'>{country.capital}</h1>
      <p className='absolute text-[24px] font-semibold'>Population:</p>
      <h1 className='ml-[135px] text-[18px] mt-[7px]'>{country.population}</h1>
      <p className='absolute text-[24px] font-semibold'>Region:</p>
      <h1 className='ml-[95px] text-[18px] mt-[7px]'>{country.region}</h1>
      <button onClick={() => dispatch(add_like(country))} className= ' mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>
        <span className='  relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
          Like
          </span>
          </button>

    </div>
    <div className="blob"></div>
  </div>
  );
};

export default ListCard;
