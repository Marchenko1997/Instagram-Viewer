import { ColorRing } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={[
          "#FFDC80", 
          "#F77737", 
          "#E1306C", 
          "#C13584", 
          "#A11392", 
          "#833AB4", 
          "#405DE6", 
        ]}
      />
    </LoaderContainer>
  );
};

export default Loader;
