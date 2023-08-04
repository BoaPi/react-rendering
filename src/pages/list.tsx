import React, { useMemo } from 'react';

import Item from './item';

type Country = {
  id: number,
  name: string,
}

interface List {
  countries: Country[],
}

export default React.memo(function List({ countries }: List) {
  const content = useMemo(() => {
    const sortedCountries = countries.sort((a, b) => {
      if (a.id < b.id) {
        return 1;
      } else if (a.id > b.id) {
        return -1;
      } else {
        return 0;
      }
    });

    return sortedCountries.map((country) => (
      <Item id={country.id} name={country.name} key={country.id} />
    ))
  }, [countries])

  console.log('List - render')

  return content;
})