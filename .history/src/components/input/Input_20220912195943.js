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
    valueToggle,
    setDataAssets,
    inputTextSearch,
    setInputTextSearch,
    dataAssest,
  } = useMercyShip();

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

  const demo = dataAssest && dataAssest.map((item) => item?.node?.title);
  const demo2 = [];
  console.log("🚀 ~ file: Input.js ~ line 35 ~ Input ~ demo2", demo2);

  for (const item of demo) {
    if (item.includes("h")) {
      demo2.push(item);
    }
  }
  // useEffect thay đổi component khi search
  useEffect(() => {
    if (inputTextSearch !== "") {
      setDataAssets(data?.posts?.edges);
    } else {
      setDataAssets(data?.posts?.edges);
      console.log("abc");
    }
  }, [data?.posts?.edges, inputTextSearch, setDataAssets]);

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
