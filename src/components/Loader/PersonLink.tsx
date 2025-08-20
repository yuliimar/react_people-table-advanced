import { Person } from '../../types/Person';

type Props = {
  person: Person | null;
};

export const PersonLink: React.FC<Props> = ({ person }) => {
  if (!person) {
    return null;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = `#/people/${person.slug}`;
  };

  return (
    <a
      href={`#/people/${person.slug}`}
      onClick={handleClick}
      className={person.sex === 'f' ? 'has-text-danger' : ''}
    >
      {person.name}
    </a>
  );
};
