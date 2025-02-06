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
            "#2713a1",
            "#a11392",
            "#efac59",
            "#FFDC80",
            "#F77737",
            "#833AB4",
            "#405DE6",
          ]}
        />
      </LoaderContainer>
    );
};

export default Loader;
