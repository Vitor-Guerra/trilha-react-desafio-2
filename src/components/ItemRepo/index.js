import React from 'react'

import { ButtonsContainer, DisabledButton, ItemContainer, RemoveBtn, VisitHomepage } from './styles';
import trash from '../../assets/icons/trash-fill.svg'

function ItemRepo({repo, handleRemoveRepo}) {

  console.log(repo)

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer >
        <a href={repo.html_url} rel="noreferrer" target="_blank" className="visitar">{repo.name}</a>
        <p>{repo.description === null ? <em>Sem descrição</em> : repo.description }</p>
        <ButtonsContainer>
          {repo.homepage ? (
            <VisitHomepage>
              <a href={repo.homepage} rel="noreferrer" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
              </svg>Webpage</a>
            </VisitHomepage>
            ):(
              <DisabledButton disabled>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                  </svg>
                  Webpage</span>
              </DisabledButton>
            )
          }
          <RemoveBtn onClick={handleRemove} rel="noreferreer">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
              </svg>
              Remover</span>
          </RemoveBtn>
        </ButtonsContainer>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
