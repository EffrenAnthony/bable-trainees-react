import React from 'react'

function Profile() {
  return (
    <div className='container__profile'>
      <div className='container__profile__item'>
          <img className='container__profile__item--img' src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
              alt='image user' />
          <div className='container__profile__item--text'>
              <p className='container__profile__item--text-title'><strong>Title</strong></p>
              <p className='container__profile__item--text-subtitle'>Subtitle</p>
              <p className='container__profile__item--text-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui omnis voluptatum quas asperiores soluta aliquid incidunt? Rem impedit cupiditate inventore.</p>
          </div>
      </div>
    </div>
);
}

export default Profile