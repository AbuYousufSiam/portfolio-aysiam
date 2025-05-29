import React, { useEffect, useState } from 'react';

export default function API_integration() {
  // States declaration using hooks at the very beginning of the Component
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedDataType, setSelectedDataType] = useState('todos');
  const [modalData, setModalData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [subViewTitle, setSubViewTitle] = useState('');
  const [isSubView, setIsSubView] = useState(false);
  const [subViewType, setSubViewType] = useState('');

  // useEffect function is used to be Fetching User List here (First API Call)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  useEffect(() => {
    if (selectedUser && !isSubView) {
      fetch(`https://jsonplaceholder.typicode.com/users/${selectedUser.id}/${selectedDataType}`)
        .then((res) => res.json())
        .then(setModalData)
        .catch((err) => console.error('Error fetching data:', err));
    }
  }, [selectedUser, selectedDataType, isSubView]);

  const handleSubView = (endpoint, id, title, type) => {
    fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}/${type}`)
      .then((res) => res.json())
      .then((data) => {
        setModalData(data);
        setSubViewTitle(title);
        setIsSubView(true);
        setSubViewType(type);
      })
      .catch((err) => console.error(`Error fetching ${type}:`, err));
  };

  const resetSubView = () => {
    setIsSubView(false);
    setSubViewTitle('');
    setSubViewType('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <p>This is API Integration Testing from 'https://jsonplaceholder.typicode.com/'</p>

      <table border="1" cellPadding="10" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <button
                  onClick={() => {
                    setSelectedUser(user);
                    setSelectedDataType('todos');
                    resetSubView();
                    setIsModalOpen(true);
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && selectedUser && (
        <div style={{
          position: 'fixed', top: 0, left: 0,
          width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.5)', display: 'flex',
          justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div style={{
            background: '#fff', padding: '20px',
            width: '80%', maxHeight: '80%',
            overflowY: 'auto', position: 'relative',
            borderRadius: '8px', boxShadow: '0 0 20px rgba(0,0,0,0.3)'
          }}>
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute', top: '10px', right: '10px',
                background: 'transparent', border: 'none',
                fontSize: '20px', cursor: 'pointer'
              }} title="Close"> ❌
            </button>

            <div style={{ marginBottom: '20px' }}>
              <h3>User Information</h3>
              <p><strong>Name:</strong> {selectedUser.name}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Company:</strong> {selectedUser.company?.name}</p>
            </div>

            {!isSubView && (
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {['todos', 'albums', 'posts'].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedDataType(type);
                        resetSubView();
                      }}
                      style={{
                        padding: '10px 20px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        backgroundColor: selectedDataType === type ? '#4CAF50' : '#f0f0f0',
                        color: selectedDataType === type ? 'white' : 'black',
                        fontWeight: selectedDataType === type ? 'bold' : 'normal',
                        cursor: 'pointer'
                      }}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isSubView && (
              <div style={{
                display: 'flex', justifyContent: 'center', marginBottom: '20px',
                gap: '10px'
              }}>
                <button
                  disabled
                  style={{
                    padding: '10px 20px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >{selectedDataType.charAt(0).toUpperCase() + selectedDataType.slice(1)}</button>
                <button
                  disabled
                  style={{
                    padding: '10px 20px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    backgroundColor: '#c8e6c9',
                    color: 'black'
                  }}
                >{subViewTitle}</button>
              </div>
            )}

            <table border="1" cellPadding="10" width="100%">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title / Task</th>
                  {selectedDataType === 'todos' && <th>Completed</th>}
                  {selectedDataType === 'albums' && !isSubView && <th>Photos</th>}
                  {selectedDataType === 'posts' && !isSubView && <th>Comments</th>}
                </tr>
              </thead>
              <tbody>
                {modalData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title || item.name || item.body}</td>
                    {selectedDataType === 'todos' && (
                      <td>{item.completed ? '✔️' : '❌'}</td>
                    )}
                    {selectedDataType === 'albums' && !isSubView && (
                      <td>
                        <button onClick={() => handleSubView('albums', item.id, `Photos of Album #${item.id}`, 'photos')}>
                          Photos
                        </button>
                      </td>
                    )}
                    {selectedDataType === 'posts' && !isSubView && (
                      <td>
                        <button onClick={() => handleSubView('posts', item.id, `Comments on Post #${item.id}`, 'comments')}>
                          Comments
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>

            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                marginTop: '15px', backgroundColor: '#f44336',
                color: 'white', padding: '10px 20px', border: 'none',
                borderRadius: '4px', cursor: 'pointer'
              }}
            >Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
