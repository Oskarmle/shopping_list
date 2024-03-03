import React from "react";
import Feed from "../components/molecules/feed";
import Form from "../components/molecules/form";

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
