import './SinglePeopleCard.css';

function SinglePeopleCard({ data }) {
  return (
    <>
      <p>
        {data.name}
        {data.birthday}
      </p>
    </>
  );
}

export default SinglePeopleCard;
