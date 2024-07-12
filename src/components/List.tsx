import React, { useEffect } from "react";
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
// import { getProducts } from '../store/reducer';
// import { RootState } from '../store/store';
import "./List.css";
// import { ADD_LIKE } from '../Reducers/Type';
// import { Country } from '../store/reducer';
import { useAppDispatch, useAppSelector } from "../hook/hook";
import { fetchCountries } from "../store/reducer";
// import { add_like } from '../store/LikeReducer';
import ListCard from "../Cards/ListCard";

export const List: React.FC = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countries.countries);
  const status = useAppSelector((state) => state.countries.status);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="loader">
        <div data-glitch="Loading..." className="glitch">
          Loading...
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return <div>Failed to load countries.</div>;
  }

  // const data = useSelector((state: RootState) => state.countries.countries);

  return (
    <div className="flex justify-between flex-wrap gap-10 p-5">
      {countries.slice(0, 12).map((country) => (
        <ListCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};
