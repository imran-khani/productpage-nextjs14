
import axios from 'axios';

const getData = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
}

const Home = async() => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      {
        data?.map((item: any) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))
        
      }
    </div>
  )
}

export default Home