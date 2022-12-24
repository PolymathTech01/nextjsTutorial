export const getStaticPaths = async () => {
  // this function will tell next how many html pages needs to be created to our data
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  const paths = data.map((polymath) => {
    return {
      params: { id: polymath.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users/' + id
  );
  const data = await response.json();

  return {
    props: { polymath: data },
  };
};
const Details = ({ polymath }) => {
  return (
    <div>
      <h1>{polymath.name}</h1>
      <p>{polymath.email}</p>
      <p>{polymath.website}</p>
      <p>{polymath.address.city}</p>
    </div>
  );
};

export default Details;
