export const Card = ({ name, capital, flags, region }) => {
    return (
      <article className="flex flex-col dark:bg-[white] shadow-xl rounded-md overflow-hidden">
        <div rel="noopener noreferrer" href="#" aria-label="Flag">
          <img
            alt={`${name.common} flag`}
            className="object-cover w-full h-52 dark:bg-gray-500"
            src={flags?.png}
          />
        </div>
        <div className="flex flex-col flex-1 p-6">
          <div rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">
            {region}
          </div>
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            {name?.common}
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
            <span>{capital?.[0]}</span>
            <span>{region}</span>
          </div>
        </div>
      </article>
    );
  };
  
