import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useMercyShip } from "../../context/MercyshipContext";
import { getDataMercy } from "../../graphql-client/queries";
import IconClose from "../icon/IconClose";
import "./Input.scss";
import lodash from "lodash";

const Input = ({ className = "" }) => {
  const { handleToggle, setDataAssets } = useMercyShip();
  const [inputTextSearch, setInputTextSearch] = useState("");
  const handleChangeSearch = lodash.debounce((e) => {
    setInputTextSearch(e.target.value);
  }, 500);
  const { loading, data } = useQuery(getDataMercy, {
    variables: {
      where: {
        search: inputTextSearch,
      },
    },
  });

  useEffect(() => {
    if (inputTextSearch !== "") {
      setDataAssets(data?.posts?.edges);
    } else {
      setDataAssets(data?.posts?.edges);
    }
  }, [data?.posts?.edges, inputTextSearch, setDataAssets]);

  // if (loading) return <div class="circle-loading"></div>;
  if (loading) return <p>Loading ...</p>;
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
