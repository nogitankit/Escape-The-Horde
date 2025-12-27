import { languages } from './languages';
import clsx from 'clsx';

export default function Frame({ wrong }) {
  
  const languageList = languages.map((lang, index) => {
    const isLost = index < wrong; 
    return (
      <div 
        key={index}
        className={clsx('frame', {
            'bad': isLost,
        })}
        style={{
           backgroundColor: isLost ? null : lang.backgroundColor,
           color: isLost ? null : lang.color
        }}
      >
        {lang.name}
      </div>
    );
  });

  return (
    <div className='badge'>
      {languageList}
    </div>
  );
}