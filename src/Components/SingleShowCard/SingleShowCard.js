import './SingleShowCard.css';

function SingleShowCard({ data }) {
  return (
    <>
      <p>
        {data.name}
        {data.rating.average}
      </p>
    </>
  );
}

export default SingleShowCard;
