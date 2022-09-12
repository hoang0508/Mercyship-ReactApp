import { useQuery } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { useMercyShip } from "../../context/MercyshipContext";
import { getDataMercy } from "../../graphql-client/queries";
import IconClose from "../icon/IconClose";
import "./Input.scss";
import lodash from "lodash";

const Input = ({ className = "" }) => {
  // context
  const { handleToggle, setDataAssets, inputTextSearch, setInputTextSearch } =
    useMercyShip();

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

  const inputRef = useRef(null);
  const [h, setH] = useState();
  const handleInputRef = () => {
    setH("click");
  };
  useEffect(() => {
    if (h === "click") {
      inputRef.current = inputRef.current.style.border = "1px solid #f00";
    }
  }, [h]);
  return (
    <div className="input" ref={inputRef} onClick={() => handleInputRef()}>
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
