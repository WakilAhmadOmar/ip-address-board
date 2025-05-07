import { REGEX_PREPARE_SPLIT } from "../constant/common";

export const HighlightMatch = ({ text, query }: { text: string; query: string }) => {
    
    const regex = new RegExp(`(${query.replace(REGEX_PREPARE_SPLIT, '\\$&')})`, 'gi');
    const parts = text.split(regex);
   
    if (!query.trim()) {
      return <span>{text}</span>;
    }

  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} className='text-blue-500 font-medium'>
            {part}
          </span>
        ) : (
          <span key={index} className='font-[300]'>
            {part}
          </span>
        ),
      )}
    </>
  );
};
