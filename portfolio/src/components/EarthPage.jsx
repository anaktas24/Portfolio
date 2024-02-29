// src/components/EarthPage.js
import { useParams } from 'react-router-dom';

const EarthPage = () => {
  const { Earth } = useParams();

  return <div>{`This is the page for ${Earth}`}</div>;
};

export default EarthPage;
