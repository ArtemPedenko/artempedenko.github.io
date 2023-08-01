import { useSelector, useDispatch } from "react-redux";
import { setSelectedData } from "../store/slice";



const addToSelected = (selectedData, dataElement) => {
    const changedSelectedData = [...selectedData]
    let count = 0;
    selectedData.map((item) => {
        if (item[0] === dataElement[0])
        count += 1;
    })
    if (count === 0) {
        changedSelectedData.push(dataElement);
    }
    //console.log(" count = " + count)
    //console.log(changedSelectedData)
    return changedSelectedData;
}

export {addToSelected};