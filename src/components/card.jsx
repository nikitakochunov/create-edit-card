import React from 'react'
import { Link } from 'react-router-dom'

const CURRENT_YEAR = 2023

const Card = ({ data }) => {
  const getAgeText = () => {
    const age = CURRENT_YEAR - +data.birthDate

    const lastDigits = age % 100 > 20 ? age % 10 : age % 100

    let text = ''
    if (lastDigits === 1) {
      text = 'год'
    } else if ([2, 3, 4].includes(lastDigits)) {
      text = 'года'
    } else {
      text = 'лет'
    }

    return age + ' ' + text
  }

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
                {data.birthDate} ({getAgeText()})
              </span>
            </div>
            <div>
              <strong>Портфолио: </strong>
              <a href={data.portfolio}>{data.portfolio}</a>
            </div>
            <Link className='btn btn-primary mt-3' to='/card/control'>
              Редактировать
            </Link>
          </>
        ) : (
          <>
            <p>Нет данных</p>
            <Link className='btn btn-primary' to='/card/control'>
              Добавить
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Card
