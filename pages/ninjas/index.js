import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'


// run only in the build time
// and run before the component is rendered
export const getStaticProps = async () => {
    
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ninjas}) => {
    return ( 
        <div>
            <h1>All Ninjas</h1> 
            {ninjas.map(ninja => (
                <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                    <p className={styles.single}>
                        <h3>
                            {ninja.name}
                        </h3>
                    </p>
                </Link>
            ))}
        </div>
     );
    }
 
export default Ninjas;