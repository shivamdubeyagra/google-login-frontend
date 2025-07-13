import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
      <div>
          <h2>404 Not Found</h2>
          <button onClick={handleGoBack}>Go Back</button>
      </div>
  );
}

export default NotFound;
