import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useMercyShip } from "../../context/MercyshipContext";
import { getDataMercy } from "../../graphql-client/queries";
import IconClose from "../icon/IconClose";
import "./Input.scss";
import lodash from "lodash";

const Input = ({ className = "" }) => {
  // context
  const { handleToggle, setDataAssets } = useMercyShip();
  // state input search
  const [inputTextSearch, setInputTextSearch] = useState("");

  // handleChangeSearch
  const handleChangeSearch = lodash.debounce((e) => {
    setInputTextSearch(e.target.value);
  }, 500);
  const { data } = useQuery(getDataMercy, {
    variables: {
      where: {
        search: inputTextSearch,
      },
    },
  });

  // useEffect thay đổi component khi search
  useEffect(() => {
    if (inputTextSearch !== "") {
      setDataAssets(data?.posts?.edges);
    } else {
      setDataAssets(data?.posts?.edges);
    }
  }, [data?.posts?.edges, inputTextSearch, setDataAssets]);

  return (
    <div className="input">
      <input
        type="text"
        className={`input-search ${className}`}
        onChange={(e) => handleChangeSearch(e)}
      />
      <div className="input-search--close" onClick={handleToggle}>
        <IconClose />
      </div>
    </div>
  );
};

export default Input;
