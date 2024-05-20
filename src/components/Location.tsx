import "../styles/Location.css";
import { useCallback, useEffect, useState } from "react";
import fetchLocation from "../services/fetchLocation";

export default function Location() {
  const [location, setLocation] = useState({
    country: { name: "" },
    city: { name: "" },
  });

  const newLocation = useCallback(async () => {
    try {
      const fetchedLocation = await fetchLocation();
      if (fetchedLocation) {
        setLocation(fetchedLocation);
      }
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  }, []);

  useEffect(() => {
    newLocation();
  }, [newLocation]);

  return (
    <p className="location">
      in {location.city.name}, {location.country.name}
    </p>
  );
}
