import * as React from 'react';
import { Rating } from '@/components/';

interface RatingProps {
  average: number;
  min: number;
  max: number;
}

interface PosterProps {
  title: string;
  img: string;
  pubdate: string;
  rating: RatingProps;
}

const Poster = (props: PosterProps) => {
  const { img, title } = props;
  return (
    <div className="movies-poster">
      <img className="poster-img" src={img} alt={img} />
      <p className="poster-title">{title}</p>
      <div className="poster-rating">
        <Rating rating={4.6} />
      </div>
    </div>
  );
};

export default Poster;