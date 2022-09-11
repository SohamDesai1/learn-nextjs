import React from "react";
import Link from "next/link";
const contact = () => {
  return (
    <div>
      <ul>
        <li>ph no - 9833793411</li>
        <li>address - Kandivalli</li>
      </ul>

      <Link href="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default contact;
