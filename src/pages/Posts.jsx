import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal'

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false)

    useEffect(() =>{
        setLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            setPosts(res.data)
            })
            .finally(() => setLoading(false))
        }, [])

        function creatPost(e) {
            e.preventDefault()

            const data = {
                title: title,
                body: body,
                userId: '1',
            }

            if(title && body){
                axios
                .post('https://jsonplaceholder.typicode.com/posts', data)
                .then(res => {
                    console.log('Success', res)
                    setPosts([res.data, ...posts])
                    setModalIsOpen(false)
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                    setTitle('')
                    setBody('')
                })
            }
        }
            const deletePost = id => {
                setPosts(posts.filter(item => item.id !== id))
        }

  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-[80%] mx-auto my-[100px] gap-4'>
        {loading ? (
            <h1 className='text-3xl text-gray-400 font-medium'>Loading...</h1>
        ) : (
            posts?.map(item => (
                
        posts?.map(item => (
            <div className='p-4 shadow-md rounded-md bg-slate-200 min-h-[200px]' key={item?.id}>{item.title}
            <div className='min-h-[250px] '>
							<h2 className='text-xl font-medium drop-shadow-md text-gray-700'>{item.title}</h2>
							<p className='text-gray-500 italic'>{item.body}</p>
						</div>
            <button onClick={e => deletePost(item.id)} className='px-6 py-1 rounded-md bg-red-300 text-white shadow-md'>Delete</button>
            </div>

        ))
        ))
        )}

        <button onClick={e => setModalIsOpen(true)} className='fixed bottom-[100px] right-[25px] py-2 px-4 rounded-md bg-indigo-400 text-white shadow-md hover:bg-indigo-600 transition duration-200'>New post</button>
        {modalIsOpen ? <Modal creatPost={creatPost} setModalIsOpen={setModalIsOpen} title={title} setTitle={setTitle} body={body} setBody={setBody} /> : null}
    </div>
  )
}

export default Posts