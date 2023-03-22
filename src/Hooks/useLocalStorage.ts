import { useEffect, useState } from "react";

export default function useLocalStorage<interf>(itemName: string, initialVal: interf):{item: interf, saveItem: (newItem: interf) => void, sincronize: () => void} {

  // Local State
  let parsedItem: interf = initialVal
  const [item, setItem] = useState<interf>(parsedItem)
  const [sincronized, setSincronize] = useState(true)

  useEffect(() => {

    const localStorageItem = localStorage.getItem(itemName)
    
    localStorageItem
    ? parsedItem = JSON.parse(localStorageItem)
    : localStorage.setItem(itemName, JSON.stringify(parsedItem))
    
    saveItem(parsedItem)
    setSincronize(true)

  }, [sincronized])

  const saveItem = (newItem: interf) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  const sincronize = () => {
    setSincronize(false)
  }

  return {
    item,
    saveItem,
    sincronize
  }
}