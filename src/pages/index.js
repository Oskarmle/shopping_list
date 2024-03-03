import React from "react";
import Feed from "../components/molecules/Feed";
import Form from "../components/molecules/Form";

export default function index() {
  return (
    <div className="box">
      <div className="container">
        <Form></Form>
        <Feed></Feed>
      </div>
    </div>
  );
}
