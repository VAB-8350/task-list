import { useState } from "react";

export default function useLocalStorage<interf>(itemName: string, initialVal: interf):[interf, (newItem: interf) => void] {

  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem: interf = initialVal

  localStorageItem
   ? parsedItem = JSON.parse(localStorageItem)
   : localStorage.setItem(itemName, JSON.stringify(parsedItem))

   // Local State
  const [item, setItem] = useState<interf>(parsedItem);


  const saveItem = (newItem: interf) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [
    item,
    saveItem
  ]
}