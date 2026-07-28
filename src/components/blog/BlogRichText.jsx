import { Link } from 'react-router-dom';
import { linkifyContact } from '../ui/ContactText';

const LINK_CLASS = 'text-brand-burgundy font-semibold underline underline-offset-2 hover:text-brand-burgundy-dark';

export default function BlogRichText({ parts }) {
  return (
    <>
      {parts.map((part, index) => {
        if (part.type === 'link') {
          return (
            <Link key={index} to={part.href} className={LINK_CLASS}>
              {part.text}
            </Link>
          );
        }

        return <span key={index}>{linkifyContact(part.text)}</span>;
      })}
    </>
  );
}
