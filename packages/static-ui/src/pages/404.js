import React from "react";
import { Link } from "gatsby";

// markup
const NotFoundPage = () => {
  return (
    <main>
      <Link to="/" replace>
        Go home
      </Link>
    </main>
  );
};

export default NotFoundPage;
