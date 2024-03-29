
import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';
import Logo from '../components/Logo';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false)


  const handleSearchRepo = async () => {
    setIsLoading(true)
    try {
      const {data} = await api.get(`repos/${currentRepo}`)
      if(data.id){
        const isExist = repos.find(repo => repo.id === data.id);
        if(!isExist){
          setRepos(prev => [...prev, data]);
          setCurrentRepo('')
          return setIsLoading(false)
        }
      }
      alert('Repositório já incorporado')
      setIsLoading(false)
    } catch (error) {
      alert('Repositório não encontrado :/')
      setIsLoading(false)
    }
  }
      
  

  const handleRemoveRepo = (id) => {
    const removedRepo = repos.filter(repo => repo.id !== id)
    setRepos(removedRepo)
  }


  return (
    <Container>
      <Logo />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} loading={isLoading}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
