import React, { useEffect, useState } from "react";

import ListNote from "./../components/listNote/listNote";
import SearchBar from "./../components/searchBar/searchBar";
import InputBar from "./../components/inputBar/inputBar";
import { link } from "./../API/api";
import "./Mainpage.css";
import Loading from "./../components/Loading/Loading";

function Mainpage() {
  const [list, setlist] = useState(null);
  const [filterlist, setfilterlist] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(link);
      res
        .json()
        .then((res) => {
          setlist(res);
          setfilterlist(res);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);
  function filterHadler(event) {
    const ok = event.target.value.toLocaleLowerCase();
    setfilterlist(
      list.filter(
        (element) =>
          element.body.toLocaleLowerCase().includes(ok) ||
          element.title.toLocaleLowerCase().includes(ok)
      )
    );
  }
  async function addHandler(item) {
    await fetch(link, {
      method: "POST",
      body: JSON.stringify({
        title: item.title,
        body: item.body,
        userId: item.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      alert(`status ${response.status}`);
    });
  }
  return (
    <div className="mainpage">
      <SearchBar filterHadler={filterHadler} />
      <InputBar addHandler={addHandler} />
      {filterlist === null ? <Loading /> : <ListNote list={filterlist} />}
    </div>
  );
}

export default Mainpage;
