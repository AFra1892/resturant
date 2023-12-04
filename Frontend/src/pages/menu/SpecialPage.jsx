import { useParams } from "react-router-dom";
const SpecialPage = () => {
  // const queryParameters = new URLSearchParams(window.location.search)
  // const id = queryParameters.get(':id')
  
  let params = useParams();
 
  return (
    <div>{params.id}</div>
  )
}

export default SpecialPage