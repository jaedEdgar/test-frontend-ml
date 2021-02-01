import React from 'react';

const Base = ({ children, scripts }) => (
  <html>
    <head>
      <meta charSet='UTF-8' />
      <title>Server Side Rendered React App!!</title>
      <link rel='stylesheet' href='/styles.css' />
    </head>
    <body>
      <div id='app' dangerouslySetInnerHTML={{ __html: children }} />
      {scripts.map((item, index) => (
        <script key={index} src={item} />
      ))}
    </body>
  </html>
);

export default Base;
