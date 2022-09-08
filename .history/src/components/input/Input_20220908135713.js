import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useMercyShip } from "../../context/MercyshipContext";
import { getDataMercy } from "../../graphql-client/queries";
import IconClose from "../icon/IconClose";
import "./Input.scss";
import lodash from "lodash";

const Input = ({ className = "" }) => {
  const { handleToggle } = useMercyShip();
  const [inputTextSearch, setInputTextSearch] = useState("");
  console.log(
    "🚀 ~ file: Input.js ~ line 12 ~ Input ~ inputTextSearch",
    inputTextSearch
  );
  const { loading, error, data } = useQuery(getDataMercy, {
    variables: {
      where: {
        search: "Ale",
      },
    },
  });

  // console.log(data);

  const handleChangeSearch = lodash.debounce((e) => {
    setInputTextSearch(e.target.value);
  }, 500);

  return (
    <div className="input">
      <input
        type="text"
        className={`input-search ${className}`}
        value={inputTextSearch}
        onChange={(e) => handleChangeSearch(e)}
      />
      <div className="input-search--close" onClick={handleToggle}>
        <IconClose />
      </div>
    </div>
  );
};

export default Input;
