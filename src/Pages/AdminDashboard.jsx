import { useState, useEffect } from 'react'
import Header from '../Components/Layout/Header'
import Layout from '../Components/Layout/Layout'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('youtube')

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem'
  }

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  }

  const tabsStyle = {
    display: 'flex',
    borderBottom: '1px solid #e2e8f0'
  }

  const tabStyle = (isActive) => ({
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    borderBottom: `2px solid ${isActive ? '#3b82f6' : 'transparent'}`,
    backgroundColor: isActive ? '#f8fafc' : 'transparent',
  })

  const tabContentStyle = {
    paddingTop: '1rem'
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [activeTab, setActiveTab] = useState('youtube');

  const hardcodedEmail = 'admin@example.com';
  const hardcodedPassword = 'password123';

  const handleLogin = () => {
    if (email === hardcodedEmail && password === hardcodedPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid email or password');
    }
  };

  if (!true) {
    return (
     <Layout> <div
     style={{
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       height: '100vh',
       background: 'black',
     }}
   >
     <div
       style={{
         padding: '40px',
         background: '#fff',
         borderRadius: '20px',
         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
         width: '300px',
         textAlign: 'center',
       }}
     >
       <h2 style={{ marginBottom: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
         Login
       </h2>
       <div>
         <input
           type="email"
           placeholder="Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           style={{
             padding: '10px',
             marginBottom: '15px',
             width: '100%',
             borderRadius: '10px',
             border: '1px solid #ccc',
             fontSize: '14px',
           }}
         />
       </div>
       <div>
         <input
           type="password"
           placeholder="Password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           style={{
             padding: '10px',
             marginBottom: '20px',
             width: '100%',
             borderRadius: '10px',
             border: '1px solid #ccc',
             fontSize: '14px',
           }}
         />
       </div>
       <button
         onClick={handleLogin}
         style={{
           padding: '10px 20px',
           background: '#007bff',
           color: '#fff',
           border: 'none',
           borderRadius: '10px',
           cursor: 'pointer',
           width: '100%',
           fontSize: '16px',
         }}
       >
         Login
       </button>
     </div>
   </div></Layout>
    );
  }

  return (
  <>

    <div style={containerStyle}>
      <h1 style={titleStyle}>Content Management System</h1>
      <div style={tabsStyle}>
        <button
          style={tabStyle(activeTab === 'youtube')}
          onClick={() => setActiveTab('youtube')}
        >
          YouTube URLs
        </button>
        <button
          style={tabStyle(activeTab === 'programs')}
          onClick={() => setActiveTab('programs')}
        >
          Programs
        </button>
      </div>
      <div style={tabContentStyle}>
        {activeTab === 'youtube' && <YouTubeUrlManager />}
        {activeTab === 'programs' && <ProgramManager />}
      </div>
    </div></>
  )
}

function YouTubeUrlManager() {
  const [urls, setUrls] = useState([])
  const [newUrl, setNewUrl] = useState({ url: '', title: '', description: '' , email:'113sumitdhonde@gmail.com'})
  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    fetchUrls()
  }, [])

  const fetchUrls = async () => {
    try {
      const response = await fetch('https://peter-backend.onrender.com/api/youtube/allurls')
      const data = await response.json()
      setUrls(data)
    } catch (error) {
      console.error('Error fetching URLs:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingId) {
        console.log("editing pass 1",editingId)

        await fetch(`https://peter-backend.onrender.com/api/youtube/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json'},            
            //  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmRlNDgyZjFlMjM3Y2Y1MTJjYTZmOTMiLCJpYXQiOjE3Mjc2ODA4MDksImV4cCI6MTcyODA0MDgwOX0._VLmf5zsGIbICEUcod4IMCcC9ZK32mpEI2_6FnbwZQI' ,
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmZhODg4MTlmMmQxZWJjNDcwMTQzYTkiLCJpYXQiOjE3Mjc2OTgxNTUsImV4cCI6MTI5NjAxNzI3Njk4MTU1fQ.uX21VWKX_VbQC_gOu71G3MpXpIOMyGsMGUBqDKJy2b0' ,

            body: JSON.stringify(newUrl),
        })
      } else {
        console.log("post pass 1", newUrl)
        await fetch('https://peter-backend.onrender.com/api/youtube', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'  },
          // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmRlNDgyZjFlMjM3Y2Y1MTJjYTZmOTMiLCJpYXQiOjE3Mjc2ODA4MDksImV4cCI6MTcyODA0MDgwOX0._VLmf5zsGIbICEUcod4IMCcC9ZK32mpEI2_6FnbwZQI' ,
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmZhODg4MTlmMmQxZWJjNDcwMTQzYTkiLCJpYXQiOjE3Mjc2OTgxNTUsImV4cCI6MTI5NjAxNzI3Njk4MTU1fQ.uX21VWKX_VbQC_gOu71G3MpXpIOMyGsMGUBqDKJy2b0' ,

          body: JSON.stringify(newUrl),
        })
      }
      setNewUrl({ url: '', title: '', description: '' })
      setEditingId(null)
      fetchUrls()
    } catch (error) {
      console.error('Error saving URL:', error)
    }
  }

  const handleEdit = (url) => {
    setNewUrl({ url: url.url, title: url.title, description: url.description })
    setEditingId(url._id)
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`https://peter-backend.onrender.com/api/youtube/${id}`, { method: 'DELETE',          headers: { 'Content-Type': 'application/json' , 'authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmRlNDgyZjFlMjM3Y2Y1MTJjYTZmOTMiLCJpYXQiOjE3Mjc2ODA4MDksImV4cCI6MTcyODA0MDgwOX0._VLmf5zsGIbICEUcod4IMCcC9ZK32mpEI2_6FnbwZQI' },
      })
      fetchUrls()
    } catch (error) {
      console.error('Error deleting URL:', error)
    }
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1rem'
  }

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #e2e8f0',
    borderRadius: '0.25rem'
  }

  const textareaStyle = {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #e2e8f0',
    borderRadius: '0.25rem',
    minHeight: '100px'
  }

  const buttonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#3b82f6',
    color: 'white'
  }

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse'
  }

  const thStyle = {
    padding: '0.75rem',
    textAlign: 'left',
    borderBottom: '1px solid #e2e8f0',
    fontWeight: 'bold',
    backgroundColor: '#f8fafc'
  }

  const tdStyle = {
    padding: '0.75rem',
    textAlign: 'left',
    borderBottom: '1px solid #e2e8f0'
  }

  const outlineButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'transparent',
    color: '#3b82f6',
    border: '1px solid #3b82f6'
  }

  const destructiveButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ef4444'
  }

  return (
    <div>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="url"
          value={newUrl.url}
          onChange={(e) => setNewUrl({ ...newUrl, url: e.target.value })}
          placeholder="YouTube URL"
          required
        />
        <input
          style={inputStyle}
          type="text"
          value={newUrl.title}
          onChange={(e) => setNewUrl({ ...newUrl, title: e.target.value })}
          placeholder="Video Title"
          required
        />
        <textarea
          style={textareaStyle}
          value={newUrl.description}
          onChange={(e) => setNewUrl({ ...newUrl, description: e.target.value })}
          placeholder="Video Description"
          required
        />
        <button style={buttonStyle} type="submit">
          {editingId ? 'Update' : 'Add'} URL
        </button>
      </form>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>YouTube URL</th>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url._id}>
              <td style={tdStyle}>{url.url}</td>
              <td style={tdStyle}>{url.title}</td>
              <td style={tdStyle}>{url.description.substring(0, 15)+"..."}</td>
              <td style={tdStyle}>
                <button
                  style={outlineButtonStyle}
                  onClick={() => handleEdit(url)}
                >
                  Edit
                </button>
                <button
                  style={destructiveButtonStyle}
                  onClick={() => handleDelete(url._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ProgramManager() {
  const [programs, setPrograms] = useState([])
  const [newProgram, setNewProgram] = useState({ title: '', description: '', price: '' ,email:'113sumitdhonde@gmail.com' })
  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    fetchPrograms()
  }, [])

  const fetchPrograms = async () => {
    try {
      const response = await fetch('https://peter-backend.onrender.com/api/programs/allprograms')
      const data = await response.json()
      setPrograms(data)
    } catch (error) {
      console.error('Error fetching programs:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingId) {
        //${editingId}
        await fetch(`https://peter-backend.onrender.com/api/programs/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmRlNDgyZjFlMjM3Y2Y1MTJjYTZmOTMiLCJpYXQiOjE3Mjc2ODA4MDksImV4cCI6MTcyODA0MDgwOX0._VLmf5zsGIbICEUcod4IMCcC9ZK32mpEI2_6FnbwZQI' ,
          body: JSON.stringify(newProgram),
        })
      } else {
        console.log(newProgram)
        await fetch('https://peter-backend.onrender.com/api/programs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmRlNDgyZjFlMjM3Y2Y1MTJjYTZmOTMiLCJpYXQiOjE3Mjc2ODA4MDksImV4cCI6MTcyODA0MDgwOX0._VLmf5zsGIbICEUcod4IMCcC9ZK32mpEI2_6FnbwZQI' ,
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmZhODg4MTlmMmQxZWJjNDcwMTQzYTkiLCJpYXQiOjE3Mjc2OTc1OTcsImV4cCI6MTcyODA1NzU5N30.sw-WmP1NNAq11vQleHllZsA5mPL9t67glMKWiulCuVw' ,

          body: JSON.stringify(newProgram),
        })
      }
      setNewProgram({ title: '', description: '', price: '' })
      setEditingId(null)
      fetchPrograms()
    } catch (error) {
      console.error('Error saving program:', error)
    }
  }

  const handleEdit = (program) => {
    setNewProgram({ title: program.title, description: program.description, price: program.price.toString() })
    setEditingId(program._id)
  }

  const handleDelete = async (id) => {
    try {

        console.log("pass 1")
      await fetch(`https://peter-backend.onrender.com/api/programs/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'},
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmRlNDgyZjFlMjM3Y2Y1MTJjYTZmOTMiLCJpYXQiOjE3Mjc2ODA4MDksImV4cCI6MTcyODA0MDgwOX0._VLmf5zsGIbICEUcod4IMCcC9ZK32mpEI2_6FnbwZQI',
      });
      console.log("pass 2")

      fetchPrograms();
    } catch (error) {
      console.error('Error deleting program:', error);
    }
  };
  
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1rem'
  }

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #e2e8f0',
    borderRadius: '0.25rem'
  }

  const textareaStyle = {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #e2e8f0',
    borderRadius: '0.25rem',
    minHeight: '100px'
  }

  const buttonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: '#3b82f6',
    color: 'white'
  }

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse'
  }

  const thStyle = {
    padding: '0.75rem',
    textAlign: 'left',
    borderBottom: '1px solid #e2e8f0',
    fontWeight: 'bold',
    backgroundColor: '#f8fafc'
  }

  const tdStyle = {
    padding: '0.75rem',
    textAlign: 'left',
    borderBottom: '1px solid #e2e8f0'
  }

  const outlineButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'transparent',
    color: '#3b82f6',
    border: '1px solid #3b82f6'
  }

  const destructiveButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ef4444'
  }

  return (
    <div>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          value={newProgram.title}
          onChange={(e) => setNewProgram({ ...newProgram, title: e.target.value })}
          placeholder="Program Name"
          required
        />
        <textarea
          style={textareaStyle}
          value={newProgram.description}
          onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })}
          placeholder="Details"
          required
        />
        <input
          style={inputStyle}
          type="Number"
          value={newProgram.price}
          onChange={(e) => setNewProgram({ ...newProgram, price: e.target.value })}
          placeholder="Price"
          required
        />
        <button style={buttonStyle} type="submit">
          {editingId ? 'Update' : 'Add'} Program
        </button>
      </form>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program) => (
            <tr key={program._id}>
              <td style={tdStyle}>{program.title}</td>
              <td style={tdStyle}>{program.description.substring(0, 15)+"..."}</td>
              {/* <td style={tdStyle}>{url.description.substring(0, 15)+"..."}</td> */}

              <td style={tdStyle}>{program.price}</td>
              <td style={tdStyle}>
                <button
                  style={outlineButtonStyle}
                  onClick={() => handleEdit(program)}
                >
                  Edit
                </button>
                <button
                  style={destructiveButtonStyle}
                  onClick={() => handleDelete(program._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
