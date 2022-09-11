import React from "react";
import Link from "next/link";

const about = () => {
  return (
    <div>
      This is a sample text
      <Link href="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default about;
