import React, {useState, useEffect} from 'react'

async function getPosts(){
    console.log(process.env.BASE_URL)
    const res = await fetch(`http://localhost:3000/api/getposts`)
    if (!res.ok){
        console.log(res)
    }
    return res.json()
}

function something() {
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const posts = await getPosts();
        setData(posts);
      }
  
      fetchData();
    }, []);
    console.log(data)
  return (
    <div>

      Something else
        <ul>
            {data.map((post) => (
            <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </li>
            ))}
      </ul>
    </div>
    
  )
}

export default something