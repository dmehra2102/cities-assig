import React, { useEffect, useState } from "react";
import Country from "./Country";

function ListTable() {
      const [page, setPage] = useState(1);
      const [country, setCountry] = useState([]);
      const [sorting,setSorting] = useState(true);

      useEffect(() => {
            fetch(`http://localhost:8080/country?_limit=5&_page=${page}`)
                  .then((res) => res.json())
                  .then((data) => setCountry(data));
      }, [page]);
      return (
            <div>
                  <div>
                        <table>
                              <thead>
                                    <tr>
                                          <th>S.No.</th>
                                          <th>Country</th>
                                          <th>City</th>
                                          <th>Population</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {country.sort((a,b)=> a.population-b.population).map((item, index) => {
                                          return (
                                                <Country
                                                      item={item}
                                                      index={index}
                                                />
                                          );
                                    })}
                              </tbody>
                        </table>
                  </div>
                  <div>
                        {page !== 1 && <button onClick={()=> setPage(page-1)}>Previous</button>}
                        <button onClick={()=> setSorting(!sorting)}>Sort By Descending Order</button>
                        <button onClick={()=> setPage(page+1)}>Next</button>
                  </div>
            </div>
      );
}

export default ListTable;
