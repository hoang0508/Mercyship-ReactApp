import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useMercyShip } from "../../context/MercyshipContext";
import { getDataMercy } from "../../graphql-client/queries";
import IconClose from "../icon/IconClose";
import "./Input.scss";
import lodash from "lodash";

const Input = ({ className = "" }) => {
  const { handleToggle } = useMercyShip();
  const [inputTextSearch, setInputTextSearch] = useState("");
  const handleChangeSearch = lodash.debounce((e) => {
    setInputTextSearch(e.target.value);
  }, 500);
  const { loading, error, data } = useQuery(getDataMercy, {
    variables: {
      where: {
        search: inputTextSearch,
      },
    },
  });

  // useEffect(() => {

  // }, [])

  console.log(data);

  return (
    <div className="input">
      <input
        type="text"
        className={`input-search ${className}`}
        // value={inputTextSearch}
        onChange={(e) => handleChangeSearch(e)}
      />
      <div className="input-search--close" onClick={handleToggle}>
        <IconClose />
      </div>
    </div>
  );
};

export default Input;
