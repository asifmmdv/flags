import { useEffect, useState } from "react"
import { Card } from "./Card";

function Main() {
    const [countries,setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,region')
        .then(response => response.json())
        .then(data => setCountries(data));
    }, [])
    console.log(countries);
    
  return (
    <>
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                    <p className="font-serif text-sm dark:text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {countries.map((item) => (
                        <Card key={item.name.common} {...item} />
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Main

