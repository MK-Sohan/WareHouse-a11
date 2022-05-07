import React from "react";

const Blogs = () => {
  return (
    <div className="mx-5 w-50">
      <h1>Difference between javascript and nodejs</h1>
      <p>
        JavaScript is a simple programming language that runs in any browser
        JavaScript Engine.And it is normally used for any client-side activity
        for one web application.Whereas Node JS mainly used for accessing or
        running any operating system for non-blocking operation.Node js requires
        libraries that can easily be accessed from JavaScript programming for
        better use.JavaScript running in any engine like Spider monkey (FireFox)
        V8 (Google Chrome). So JavaScript programming is very easy to write, and
        put any running environment means proper browser. Whereas Node JS only
        support the V8 engine, which googles chrome specific. But whether it
        supports the V8 engine, written JavaScript code can able to run in any
        environment. So there has no browser-specific constraint on it.
      </p>
      <h1> Differences between sql and nosql databases.</h1>
      <p>
        <li>
          SQL databases are relational, NoSQL databases are non-relational.
        </li>
        <li>
          SQL databases use structured query language and have a predefined
          schema. NoSQL databases have dynamic schemas for unstructured data.
        </li>
        <li>
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable.
        </li>
        <li>
          SQL databases are table-based, while NoSQL databases are document,
          key-value, graph, or wide-column stores.
        </li>
        <li>
          SQL databases are better for multi-row transactions, while NoSQL is
          better for unstructured data like documents or JSON.
        </li>
      </p>
      <h1>What is the purpose of jwt and how does it work?</h1>
      <p>
        JWT, or JSON Web Token, is an open standard used to share security
        information between two parties — a client and a server.In short, JWTs
        are used as a secure way to authenticate users and share information. .A
        JWT is a string made up of three parts, separated by dots (.).Once
        decoded,we will get two JSON strings. The signature. Header contains the
        type of token — JWT in this case — and the signing algorithm. The
        payload contains the claims. This is displayed as a JSON string, usually
        containing no more than a dozen fields to keep the JWT compact. This
        information is typically used by the server to verify that the user has
        permission to perform the action they are requesting. There are no
        mandatory claims for a JWT, but overlaying standards may make claims
        mandatory. For example, when using JWT as bearer access token under
        OAuth2.0, iss, sub, aud, and exp must be present. some are more common
        than others. The signature ensures that the token hasn’t been altered.
        The party that creates the JWT signs the header and payload with a
        secret that is known to both the issuer and receiver, or with a private
        key known only to the sender. When the token is used, the receiving
        party verifies that the header and payload match the signature.
      </p>
    </div>
  );
};

export default Blogs;
