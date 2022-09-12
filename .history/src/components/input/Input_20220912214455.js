import { useQuery } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { useMercyShip } from "../../context/MercyshipContext";
import { getDataMercy } from "../../graphql-client/queries";
import IconClose from "../icon/IconClose";
import "./Input.scss";
import lodash from "lodash";

const Input = ({ className = "" }) => {
  // context
  const {
    handleToggle,
    setDataAssets,
    inputTextSearch,
    setInputTextSearch,
    dataAssest,
  } = useMercyShip();

  // handleChangeSearch
  const handleChangeSearch = lodash.debounce((e) => {
    setInputTextSearch(e.target.value);
  }, 500);
  const { data } = useQuery(getDataMercy);
  const dataInputSearch =
    dataAssest &&
    dataAssest.length > 0 &&
    dataAssest.filter((item) =>
      item?.node?.title.toLowerCase().includes(inputTextSearch?.toLowerCase())
    );

  // useEffect thay đổi component khi search
  useEffect(() => {
    if (inputTextSearch !== "") {
      setDataAssets(dataInputSearch);
    } else {
      setDataAssets(data?.posts?.edges);
    }
  }, [data?.posts?.edges, dataInputSearch, inputTextSearch, setDataAssets]);

  // input ref focus
  const inputRef = useRef(null);
  const [inputClick, setInputClick] = useState();
  const handleInputRef = () => {
    setInputClick("click");
  };
  useEffect(() => {
    if (inputClick === "click") {
      inputRef.current = inputRef.current.style.border = "1px solid #EB3349";
    }
  }, [inputClick]);

  const handleCloseInput = () => {
    handleToggle();
    setInputTextSearch("");
  };

  return (
    <div className="input" ref={inputRef} onClick={() => handleInputRef()}>
      <input
        type="text"
        className={`input-search ${className}`}
        onChange={(e) => handleChangeSearch(e)}
      />
      <div className="input-search--close" onClick={() => handleCloseInput()}>
        <IconClose />
      </div>
    </div>
  );
};

export default Input;
