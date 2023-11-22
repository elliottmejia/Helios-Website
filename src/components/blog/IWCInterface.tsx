import React, { useState, useEffect } from 'react';
import ImageWithCredit from '@components/blog/ImageWithCredit';

interface Props {
  filename?: string;
  src?: string;
  anchorTag: string;
  alt?: string;
  height?: string;
  creditCopy?: string;
}

const IWCInterface: React.FC<Props> = ({ filename, src, anchorTag, alt = '', height = '400px', creditCopy = 'Photo by' }) => {
  if (src && filename) {
    throw new Error("You can't have both a filename and a src. Please choose one.");
  }

  const fullPath = filename ? `@assets/blogimages/${filename}` : src || '';
  const [links, setLinks] = useState(['', '']);
  const [author, setAuthor] = useState('');
  const [source, setSource] = useState('');
  const [hrefCount, setHrefCount] = useState(0);
  const [parseIndex, setParseIndex] = useState(0);

  useEffect(() => {
    for (let i = 0; i < anchorTag.length; i++) {
      if (
        anchorTag[i] === 'h' &&
        anchorTag[i + 1] === 'r' &&
        anchorTag[i + 2] === 'e' &&
        anchorTag[i + 3] === 'f'
      ) {
        if (hrefCount > 1) {
          throw new Error('Out of bounds error on hrefCount > Links[]. Runaway assignment of hrefs.');
        }
        links[hrefCount] = captureQuote(i);
        if (hrefCount === 1) {
          setAuthor(captureName(parseIndex));
        } else {
          setSource(captureName(parseIndex));
        }
        setHrefCount(hrefCount + 1);
      }
    }
    if (!alt) {
      setAuthor(`Solar blog image by ${author}`);
    }
  }, [anchorTag]);

  const captureQuote = (i: number): string => {
    let buffer = '';
    let j = i + 6;
    while (anchorTag[j] !== '"') {
      buffer += anchorTag[j];
      j++;
    }
    setParseIndex(j);
    return buffer;
  };

  const captureName = (i: number): string => {
    let buffer = '';
    let j = i + 1;
    while (anchorTag[j] !== '<') {
      buffer += anchorTag[j];
      j++;
    }
    return buffer;
  };

  return (
    <ImageWithCredit
      imgLink={fullPath}
      imgAlt={alt}
      height={height}
      creditLink={links[1]}
      creditCopy={creditCopy}
      creditName={author}
      creditSource={source}
    />
  );
};

export default IWCInterface;