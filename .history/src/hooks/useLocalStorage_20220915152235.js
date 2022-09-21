import { useState, useLocalStorage } from "react";

const { storedValue, setValue } = useLocalStorage("favoriteValue", [])

export default function 