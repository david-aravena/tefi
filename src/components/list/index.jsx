import { useState } from 'react';
import {ButtonsAddUpload} from "./ui/buttonsAddUpload/ButtonsAddUpload"
import {ListSelectionFile} from "./ui/listSelectionFile/ListSelectionFile"
import "./listFiles.css"
export default function ListFiles(){

  const [filesSelected, setFilesSelected] = useState([]);
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