import React from 'react'
import { Link } from 'react-router-dom'

const CURRENT_YEAR = 2023

const Card = ({ data }) => {
  return (
    <div className='card m-4' style={{ width: 18 + 'rem' }}>
      <div className='card-header'>Карточка студента</div>
      <div className='card-body'>
        {data ? (
          <>
            <div>
              <strong>Имя: </strong>
              <span>{data.name}</span>
            </div>
            <div>
              <strong>Фамилия: </strong>
              <span>{data.lastName}</span>
            </div>
            <div>
              <strong>Год рождения: </strong>
              <span>
                {data.birthDate} ({CURRENT_YEAR - data.birthDate} года)
              </span>
            </div>
            <div>
              <strong>Портфолио: </strong>
              <a href={data.portfolio}>{data.portfolio}</a>
            </div>
            {/* <button className='btn btn-primary mt-3' onClick={handleEdit}>
              Редактрировать
            </button> */}
            <Link className='btn btn-primary mt-3' to='/control'>
              Редактрировать
            </Link>
          </>
        ) : (
          <>
            <p>Нет данных</p>
            {/* <button className='btn btn-primary' onClick={handleCreate}>
              Добавить
              </button> */}
            <Link className='btn btn-primary' to='/control'>
              Добавить
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Card
