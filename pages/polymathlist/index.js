import Link from 'next/link';
import styles from '../../styles/Polymath.module.css';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: { polymath: data },
  };
};
const index = ({ polymath }) => {
  return (
    <div>
      <h1>polymath list is here!!! </h1>
      {polymath.map((user) => (
        <div key={user.id}>
          <Link
            href={`/polymathlist/${user.id}`}
            key={user.id}
            className={styles.single}
          >
            <h3>{user.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default index;
