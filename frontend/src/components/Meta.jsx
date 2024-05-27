import { Helmet } from "react-helmet-async";

import React from "react";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "EasyDev",
  description:
    "Website displaying my projects and my personal information related to the Web Dev field",
  keywords:
    "web development,full stack web dev,mern stack,shivansh srivastava,mern projects",
};

export default Meta;
