import { useState, useLocalStorage } from "react";

const { storedValue, setValue } = useLocalStorage("favoriteValue", [])