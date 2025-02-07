import { LoadBtn, DownloadContainer } from "./DownloadBtn.styled"
import { useNavigate } from "react-router-dom"

const DownloadBtn = ({mediaUrl, mediaType}) => {
    const navigate = useNavigate();
    
    const handleDownload = () => {
        navigate("/download", { state: { mediaUrl, mediaType } });
    }

  return (
      <DownloadContainer>
          <LoadBtn onClick={handleDownload}>Download</LoadBtn>
    </DownloadContainer>
  )
}

export default DownloadBtn