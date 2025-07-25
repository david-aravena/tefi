import { useState } from "react";
import {ButtonsAddUpload} from "./ui/buttonsAddUpload/ButtonsAddUpload"
import {ListSelectionFile} from "./ui/listSelectionFile/ListSelectionFile"

export default function ListFiles(){

  const [filesSelected, setFilesSelected] = useState([{name:"fotografia", size:"10", type:"jpeg"}]);
  const [uploadFilesProgress, setUploadFilesProgress] = useState(null);

  const getFilesFromInput = (e) => {
    const filesFromInput = e.target.files;
    setFilesSelected([...filesSelected, ...filesFromInput]);
  }

  const deleteFileSelected = (file) => {
    const files = filesSelected;
    files.splice(file, 1);
    setFilesSelected([...files]);
  }

  const uploadFiles = () => {
    // sendFilesToStorage(filesSelected, setUploadFilesProgress)
  }

  return(
    <div className="containerListFiles">
      <ButtonsAddUpload getFilesFromInput={getFilesFromInput} uploadFiles={uploadFiles} />   
      <ListSelectionFile filesSelected={filesSelected} deleteFileSelected={deleteFileSelected} />
    </div>
  )
}