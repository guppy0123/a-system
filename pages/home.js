import styles from '../styles/Home.module.css'
import Head from 'next/head'
import {useState} from "react"



export default function Home(){

  function LinkButoon(){
    const [count,setCount] = useState(999);
    const handleClick=()=>{
      setCount(count+1);
    };
    return <span onClick={handleClick}>♥ {count}</span>;
  }


  return(
    <div className={styles.container}>
      <Head>
      </Head>
      <main className={styles.main}>
        <table className={styles.type06}>
          <thead>
            <tr>
              <th>名前</th>
              <th>好きな食べ物</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>佐野たいき</td>
              <td>いくら</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.button}>
          <LinkButoon/>
        </div>
      </main>
    </div>
  )
}