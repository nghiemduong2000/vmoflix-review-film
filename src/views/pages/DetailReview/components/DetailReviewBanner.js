import PropTypes from 'prop-types';
import React from 'react';

const DetailReviewBanner = (props) => {
  const { currentFilm } = props;
  return (
    <div className='detailReview__banner relative flex items-center justify-center h-50rem'>
      <div className='detailReview__banner-wrap-image bg-black absolute w-full h-full'>
        <img
          src={currentFilm.bannerFilm}
          className='w-full h-full object-cover opacity-40 filter blur-sm'
          alt='banner'
        />
      </div>
      <h1 className='detailReview__banner-title z-1 text-white text-56 w-100rem font-bold text-center'>
        {currentFilm.title}
      </h1>
    </div>
  );
};

DetailReviewBanner.propTypes = {
  currentFilm: PropTypes.object.isRequired,
};

export default DetailReviewBanner;
