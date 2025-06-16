import { useEffect, useState } from "react";
import { Card } from "./Card";
import './loader.css'

function Main() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,region')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false); 
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader h-screen flex items-center justify-center ">
          <div className="glitch" data-glitch="Loading...">Loading...</div>
        </div>
      ) : (
        <section className="py-6 sm:py-12 bg-gray-100 text-gray-800 dark:bg-gray-100 ">
          <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
              <p className="font-serif text-sm text-gray-600 dark:text-gray-400">
                Qualisque erroribus usu at, duo te agam soluta mucius.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              {countries.map((item) => (
                <Card key={item.name.common} {...item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Main;

