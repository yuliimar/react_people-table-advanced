import { Link, useSearchParams } from 'react-router-dom';
import { getSearchWith, SearchParams } from '../../utils/searchHelper';

type Props = {
  children: React.ReactNode;
  params: SearchParams;
  className?: string;
  onClick?: () => void;
  'data-cy'?: string;
};

export const SearchLink: React.FC<Props> = ({
  children,
  params,
  className = '',
  onClick,
  'data-cy': dataCy,
}) => {
  const [searchParams] = useSearchParams();

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Link
      to={{ search: getSearchWith(searchParams, params) }}
      className={className}
      onClick={handleClick}
      data-cy={dataCy}
    >
      {children}
    </Link>
  );
};
