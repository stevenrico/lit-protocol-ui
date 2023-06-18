import UploadDataset from "./pages/UploadDataset.js"
import DatasetList from "./pages/DatasetList.js"

function main() {
  document.addEventListener("lit-ready", () => {
    DatasetList()
    UploadDataset()
  })
}

main()
